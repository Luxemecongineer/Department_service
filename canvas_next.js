/**
 * Created by Think on 8/31/2017.
 */
/**
 * Created by Think on 2017/8/30.
 */
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

casper.start('http://canvas.rice.edu/login/saml/4', function() {
    this.evaluate(function(j_username, j_password) {
        document.querySelector('input#username.form-element.form-field').value = j_username;
        document.querySelector('input#password.form-element.form-field').value = j_password;
        document.querySelector('button.form-element.form-button').click();
    }, 'sl104', 'Wbfzdxx980724');
});

casper.then(function() {
    this.wait(10000, function() {
        this.echo("10s");
    });
});

casper.thenOpen('https://canvas.rice.edu/courses/6915/gradebook/speed_grader?assignment_id=39973#%7B%22student_id%22%3A%2215794%22%7D', function(){
//casper.thenOpen('https://canvas.rice.edu/courses/6915/gradebook/speed_grader?assignment_id=39973#%7B%22student_id%22%3A%2221069%22%7D', function(){
   this.echo(this.getTitle());
});

casper.then(function() {
    this.wait(10000, function() {
        this.echo("10s");
    });
});


casper.waitForSelector('input#grading-box-extended',function then(){
    this.echo("fill credit");
    this.capture("f_fill.png");
    //this.sendKeys('input#grading-box-extended','1',{keepFocus:true});
    //this.page.sendEvent("keypress", this.page.event.key.Enter);
    this.click('button#next-student-button');
}, timeout = 200000);

casper.wait(1000,function(){
    this.capture("f_1.png");
    this.click('button#next-student-button');
});

casper.wait(1000,function(){
    this.capture("f_2.png");
    this.click('button#next-student-button');
});

casper.wait(1000,function(){
    this.capture("f_3.png");
    this.click('button#next-student-button');
});

casper.then(function() {
    this.wait(1000, function() {
        //this.echo("1s");
        this.echo("finish");
        this.capture("f_final.png")
    });
});

casper.run();