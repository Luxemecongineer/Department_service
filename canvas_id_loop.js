/**
 * Created by Think on 8/31/2017.
 */
/**
 * Created by Think on 8/31/2017.
 */
//note that one way to determined whether one student finish submission:
//<div id="this_student_does_not_have_a_submission" style="display: block;">
//<div id="this_student_does_not_have_a_submission" style="display: none;">

//First review how to get value from attribute.
var assignment_id = "39973";
var url_1 = "https://canvas.rice.edu/courses/6915/gradebook/speed_grader?assignment_id=";
var url_2 = "#";
var url_3 = "{\"student_id\":\"";
var url_4 = "\"}";
var status = [];
var id_list = ["21237", "21062", "20052", "20016", "21543", "21090"];
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


var new_url = url_1 + assignment_id + url_2 + encodeURIComponent(url_3) + id_list[0] + encodeURIComponent(url_4);
casper.thenOpen(new_url, function(){
    this.echo(new_url);
    this.echo(this.getTitle());
});

casper.then(function() {
    this.wait(10000, function() {
        this.echo("10s");
        this.capture("f_if_grading.png")
    });
});



// this is refer
casper.then(function() {
    var current = 0;
    var end = 5;
    while(current <= end) {

        (function(id_index) {
            var new_url = url_1 + assignment_id + url_2 + encodeURIComponent(url_3) + id_list[id_index] + encodeURIComponent(url_4);
            casper.thenOpen(new_url,function(){
                this.echo(new_url);
                this.echo(this.getTitle());
                this.wait(10000, function() {
                    this.echo("10s");
                    this.capture("f_loop"+ id_index + ".png");
                    this.waitForSelector('input#grading-box-extended',
                        function pass(){
                            this.echo("Submission status:");
                            status = this.evaluate(getStatus);
                            this.echo(status);
                        },
                        function fail (){
                            this.echo("fail");
                        },
                    timeout = 200000);
                });
            });
        })(current);
        current++;
    }
});



//start to open student's discussion page
//casper.thenOpen('https://canvas.rice.edu/courses/6915/gradebook/speed_grader?assignment_id=39973#%7B%22student_id%22%3A%2215970%22%7D', function(){
//casper.thenOpen('https://canvas.rice.edu/courses/6915/gradebook/speed_grader?assignment_id=39973#%7B%22student_id%22%3A%2215670%22%7D', function(){
//casper.thenOpen('https://canvas.rice.edu/courses/6915/gradebook/speed_grader?assignment_id=39973#%7B%22student_id%22%3A%2220052%22%7D', function(){
//   this.echo(this.getTitle());
//});





//wait the input of grading
//casper.then(function() {
//    this.wait(10000, function() {
//        this.echo("10s");
//    });
//});
//
//casper.waitForSelector('input#grading-box-extended',
//    function pass(){
//        this.echo("Submission status:");
//        status = this.evaluate(getStatus);
//        this.echo(status);
//    },
//    function fail (){
//        this.echo("fail");
//    },
//timeout = 200000);
//
//
//casper.then(function(){
//    if (status == 'display: none;') {
//        this.echo("This student has a submission");
//        grading.call(this);
//    }
//    else if (status == 'display: block;')
//    {
//        this.echo("This student doesn't have a submission");
//    }
//    else
//    {
//        this.echo("Some error occur")
//    }
//});

//casper.then(function() {
//    this.wait(1000, function() {
//        this.echo("1s");
        //this.echo("finish");
        //this.capture("f_if_grading.png")
    //});
//});


casper.run();