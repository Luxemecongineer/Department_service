/**
 * Created by Think on 8/31/2017.
 */

var status = [];
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
    var Status = document.querySelector('div#this_student_does_not_have_a_submission');
    return Array.prototype.map.call(Status, function(e){
        return e.getAttribute('style')
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
        this.echo("10s");
    });
});

//grading process
casper.waitForSelector('input#grading-box-extended',function then(){
    this.echo("Submission status:");
    status = this.evaluate(getStatus);
    this.echo(status)
}, timeout = 200000);



//this is refer
function myIfBranch(){
    this.click("#new_add");
    this.echo("done567");
    this.waitForSelector(".cartGdList",
        function pass () {
            this.click("...");
            this.echo("done8");
            this.waitForSelector(".cart_s_Box",
                function pass () {
                    this.click("#js_upFormBtn");
                    this.echo("step4");
                    var end = new Date().getTime();
                    var time = end - start;
                    this.echo('time: ' + time + 'ms*');
                },
                function fail () {
                    this.echo('fail');
                }
            );
        },
        function fail () {
            this.echo('fail');
        }
    );
}





//if (status[0] == 'display: none;'){
//    casper.then(function(){
//       this.echo("This student doesn't have a submission");
//    });
//} else {
//    casper.then(function(){
//       this.echo("This student has a submission");
//    });
//}





//
//
//casper.then(function(){
//    //var stat = status[0];
//    if (status == 'display: none;') {
//        this.echo("This student doesn't have a submission");
//    }
//    else if (status == 'display: block;')
//    {
//        this.echo("This student has a submission");
//    }
//    else
//    {
//        this.echo("Some error occur")
//    }
//});
//






//casper.then(function(){
//    this.
//});

//casper.then(function(){
//   if (status[0] == 'display: none;'){
//       this.echo("This student does not have a submission");
//   } else {
//       this.echo("This student has a submission");
//   }
//});

casper.run();