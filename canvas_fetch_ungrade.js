/**
 * Created by Think on 8/31/2017.
 */
//note that one way to determined whether one student finish submission:
//<div id="this_student_does_not_have_a_submission" style="display: block;">
//<div id="this_student_does_not_have_a_submission" style="display: none;">

//First review how to get value from attribute.
var status = [];
var ungrad_id = [];
var casper = require('casper').create({
    viewportSize: {
        width: 1920,
        height: 1080
    },
    verbose: true,
    //logLevel: 'debug',
    pageSettings: {
         loadImages:  false,         // The WebPage instance used by Casper will
         loadPlugins: false,         // use these settings
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
    }, 'sl104', 'Wbfzdxx980724');

});

//wait login success.
casper.then(function() {
    this.wait(10000, function() {
        this.echo("10s");
    });
});

//start to open student's discussion page
casper.thenOpen('https://canvas.rice.edu/courses/6915/gradebook/speed_grader?assignment_id=39973#%7B%22student_id%22%3A%2215970%22%7D', function(){
   this.echo(this.getTitle());
});

//wait the input of grading
casper.then(function() {
    this.wait(10000, function() {
        this.echo("100s");
    });
});

//grading process
//-------------------------- version 1 -----------------------------
//casper.waitForSelector('input#grading-box-extended',function then(){
//    this.echo("Submission status:");
//    status = this.evaluate(getStatus);
//    this.echo(status);
//    grad = this.evaluate(function(id_cache) {
//        var Grad_Status = document.querySelectorAll('option[value="'+ id_cache + '"]');
//        return Array.prototype.map.call(Grad_Status, function (e) {
//            return e.getAttribute('class')
//        }, '15970');
//    });
//    this.echo(grad);
//}, timeout = 200000);

//-------------------------- version 2 -----------------------------
casper.waitForSelector('input#grading-box-extended',function then(){
    this.echo("Submission status:");
    status = this.evaluate(getStatus);
    this.echo(status);
    ungrad_id = this.evaluate(getUnGrad);
    this.echo(ungrad_id);
}, timeout = 200000);
//
//function getGrad(){
//    var Grad_Status = document.querySelectorAll('option[value="15970"]');
//    return Array.prototype.map.call(Grad_Status, function(e){
//        return e.getAttribute('class')
//    });
//}
//
//// login step, Plug your own netID and password.
//casper.start('http://canvas.rice.edu/login/saml/4', function() {
//    this.evaluate(function(j_username, j_password) {
//        document.querySelector('input#username.form-element.form-field').value = j_username;
//        document.querySelector('input#password.form-element.form-field').value = j_password;
//        document.querySelector('button.form-element.form-button').click();
//    }, 'sl104', 'Wbfzdxx980724');
//
//});

//casper.run();

casper.then(function() {
    var current = 0;
    var end = ungrad_id.length;
    while(current < end) {
        (function(id_index) {
            var new_url = url_1 + assignment_id + url_2 + encodeURIComponent(url_3) + ungrad_id[id_index] + encodeURIComponent(url_4);
            this.echo(new_url);
            //casper.thenOpen(new_url,function(){
            //    this.echo(new_url);
            //    this.echo(this.getTitle());
            //    this.wait(10000, function() {
            //        this.echo("10s");
            //        this.capture("f_loop"+ id_index + ".png");
            //        this.waitForSelector('input#grading-box-extended',
            //            function pass(){
            //                this.echo("Submission status:");
            //                status = this.evaluate(getStatus);
            //                this.echo(status);
            //            },
            //            function fail (){
            //                this.echo("fail");
            //            },
            //        timeout = 200000);
            //    });
            //});
        })(current);
        current++;
    }
});



casper.run(function(){
    this.echo(ungrad_id.length + 'students found:');
    this.echo('-'+ links.join('\n -')).exit()
});