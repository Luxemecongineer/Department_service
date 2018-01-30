/**
 * Created by Luxem on 8/31/2017.
 */
// ======== Plug required information here! ==================
var assignment_id = "39995";
var UrNetID = "sl104";
var UrPwd = "Wbfzdxx980724";
// ======== You are all set. Execute it! =====================
var status = [];
var ungrad_id = [];
var url_1 = "https://canvas.rice.edu/courses/6915/gradebook/speed_grader?assignment_id=";
var url_2 = "#";
var url_3 = "{\"student_id\":\"";
var url_4 = "\"}";
var id_start = "21237";
var url_start = url_1 + assignment_id + url_2 + encodeURIComponent(url_3) + id_start + encodeURIComponent(url_4);
var casper = require('casper').create({
    viewportSize: {
        width: 1920,
        height: 1080
    },
    verbose: true,
    //logLevel: 'debug',
    pageSettings: {
         loadImages:  false,
         loadPlugins: false,
         userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36'
    }
});

function getStatus(){
    var Status = document.querySelectorAll('div#this_student_does_not_have_a_submission');
    return Array.prototype.map.call(Status, function(e){
        return e.getAttribute('style')
    });
}

function grading(){
    this.sendKeys('input#grading-box-extended','1',{keepFocus:true});
    this.page.sendEvent("keypress", this.page.event.key.Enter);
}

function getUnGrad(){
    var Grad_Status = document.querySelectorAll('option.not_graded.ui-selectmenu-hasIcon');
    return Array.prototype.map.call(Grad_Status, function(e){
        return e.getAttribute('value')
    });
}

// login step, Plug your own netID and password.
casper.start('http://canvas.rice.edu/login/saml/4', function() {
    this.evaluate(function(j_username, j_password) {
        document.querySelector('input#username.form-element.form-field').value = j_username;
        document.querySelector('input#password.form-element.form-field').value = j_password;
        document.querySelector('button.form-element.form-button').click();
    }, UrNetID, UrPwd);

});

//wait login process
casper.then(function() {
    this.wait(10000, function() {
        this.echo("Login process......");
    });
});

casper.thenOpen(url_start, function(){
   this.echo("Discussion question: "+ this.getTitle());
});

//wait to get ungraded list
casper.then(function() {
    this.wait(10000, function() {
        this.echo("Start from a lucky guy");
    });
});

//-------------------------- version 2 -----------------------------
casper.waitForSelector('input#grading-box-extended',function then(){
    //this.echo("Submission status:");
    //status = this.evaluate(getStatus);
    //this.echo(status);
    ungrad_id = this.evaluate(getUnGrad);
    //this.echo(ungrad_id[4]);
}, timeout = 200000);

casper.then(function() {
    var current = 0;
    var end = ungrad_id.length;
    //var end = 10;
    while(current < end) {

        (function(id_index) {
            var new_url = url_1 + assignment_id + url_2 + encodeURIComponent(url_3) + ungrad_id[id_index] + encodeURIComponent(url_4);
            var id_cache = ungrad_id[id_index];
            casper.thenOpen(new_url,function(){
                //this.echo(new_url);
                this.echo("------------- \n-------------");
                this.echo(id_cache);
                this.wait(3000, function() {
                    this.echo("......");
                    grading.call(this);
                    //this.capture("f_url_loop"+ id_index + ".png");
                    this.echo("student " + id_cache + " is graded");
                });
            });
        })(current);
        current++;
    }
});

casper.then(function(){
   this.echo(ungrad_id.length + ' students are graded at this time.');
});

casper.run();