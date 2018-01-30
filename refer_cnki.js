/**
 * Created by Think on 2016/5/25.
 */
/**
 * Created by Think on 2016/3/31.
 * page - 1
 */
var casper = require("casper").create({
    waitTimeout: 200000,
    stepTimeout: 200000,
    userAgent:"User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.110 Safari/537.36",
    verbose: true,
    pageSettings: {
    webSecurityEnabled: false
    },
    onWaitTimeout: function() {
          this.echo('** Wait-TimeOut **');
    },
    onStepTimeout: function() {
        this.echo('** Step-TimeOut **');
    }
});
phantom.outputEncoding="gbk";
var filepath11 = 'C:/working/cs/Mtime/test11.txt',
    filepath12 = 'C:/working/cs/Mtime/test12.txt',
    filepath13 = 'C:/working/cs/Mtime/test13.txt',
    filepath10 = 'C:/working/cs/Mtime/test10.txt',
    filepath09 = 'C:/working/cs/Mtime/test09.txt',
    click_year_1 = 'dt[onclick="GetIssue(\'',
    click_year = 2013,
    click_year_3 = '\')"]',
    click_vol_1 = 'a[onclick="GetCatalog(\'yq\',\'CJFD\',\'JJYJ\',\'',
    click_vol_2 = click_year.toString(),
    click_vol_3 = '\',\'',
    click_vol_4 = 2,
    cache_0 = 0,
    click_vol_5 = '\'); return false;"]',
    j = 8;
    fs = require('fs');
var links =[];
//var vol_list = ['12', '01','09'];
var vol_list = ['01', '02', '03', '04', '05', '06','07', '08','09', '10', '11', '12'];

function GetHref(){
    var links = document.querySelectorAll('dd.row.clearfix span.name a');
    return Array.prototype.map.call(links, function(e){
        return e.getAttribute('href')
    });
}

casper.start('http://navi.cnki.net/knavi/journal/Detailq/CJFD/JJYJ?Year=&Issue=&Entry=', function(){
    this.echo(this.getTitle());
});


casper.then(function() {
    this.wait(4000,function() {
        this.capture("try1.png");
    });
});


casper.then(function(){
    this.click('dt[onclick="GetIssue(\'' + click_year.toString() + '\')"]');
});


casper.then(function() {
    this.wait(4000,function() {
        this.capture("try2.png");
    });
});

casper.then(function(){
    this.click(click_vol_1 + click_vol_2 + click_vol_3 + vol_list[0] + click_vol_5);
});

casper.then(function() {
    this.wait(4000,function() {
        this.capture("try3.png");
    });
});

casper.waitForSelector('dd.row.clearfix.bgcGray', function then (){
    links = this.evaluate(GetHref);
}, function onTimeout(){
    this.die('Timeout reached. Fail at fetch');
});



casper.then(function(){
   for (var i = 0; i< links.length; i++){
       fs.write("cnki_site_JJYJ_test.csv", links[i] + '\n', 'a');
   }
});

//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------

casper.then(function(){
    if (this.exists('a[onclick="GetCatalogPage(\'2\');"]')) {
        this.echo('the 2nd page exists');
        this.click('a[onclick="GetCatalogPage(\'2\');"]');
    }
});


casper.then(function() {
    this.wait(4000,function() {
        this.capture("try4.png");
    });
});

casper.waitForSelector('dd.row.clearfix.bgcGray', function then (){
    links = this.evaluate(GetHref);
}, function onTimeout(){
    this.die('Timeout reached. Fail at fetch');
});


casper.then(function(){
   for (var i = 0; i< links.length; i++){
       fs.write("cnki_site_JJYJ_test.csv", links[i] + '\n', 'a');
   }
});

//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//-------------------------------------------------vol 1 -----------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

casper.then(function(){
    //this.click(click_vol_1 + click_vol_2 + click_vol_3 + cache_0.toString() + click_vol_4.toString() + click_vol_5);
    this.click(click_vol_1 + click_vol_2 + click_vol_3 + vol_list[1] + click_vol_5);
});

casper.then(function() {
    this.wait(4000,function() {
        this.capture("try5.png");
    });
});

casper.waitForSelector('dd.row.clearfix.bgcGray', function then (){
    links = this.evaluate(GetHref);
}, function onTimeout(){
    this.die('Timeout reached. Fail at fetch');
});

casper.then(function(){
   for (var i = 0; i< links.length; i++){
       fs.write("cnki_site_JJYJ_test.csv", links[i] + '\n', 'a');
   }
});

//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------

casper.then(function(){
    if (this.exists('a[onclick="GetCatalogPage(\'2\');"]')) {
        this.echo('the 2nd page exists');
        this.click('a[onclick="GetCatalogPage(\'2\');"]');
    }
});


casper.then(function() {
    this.wait(4000,function() {
        this.capture("try6.png");
    });
});

casper.waitForSelector('dd.row.clearfix.bgcGray', function then (){
    links = this.evaluate(GetHref);
}, function onTimeout(){
    this.die('Timeout reached. Fail at fetch');
});


casper.then(function(){
   for (var i = 0; i< links.length; i++){
       fs.write("cnki_site_JJYJ_test.csv", links[i] + '\n', 'a');
   }
});


//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//-------------------------------------------------vol 2 -----------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

casper.then(function(){
    //this.click(click_vol_1 + click_vol_2 + click_vol_3 + cache_0.toString() + click_vol_4.toString() + click_vol_5);
    this.click(click_vol_1 + click_vol_2 + click_vol_3 + vol_list[2] + click_vol_5);
});

casper.then(function() {
    this.wait(4000,function() {
        this.capture("try5.png");
    });
});

casper.waitForSelector('dd.row.clearfix.bgcGray', function then (){
    links = this.evaluate(GetHref);
}, function onTimeout(){
    this.die('Timeout reached. Fail at fetch');
});

casper.then(function(){
   for (var i = 0; i< links.length; i++){
       fs.write("cnki_site_JJYJ_test.csv", links[i] + '\n', 'a');
   }
});

//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------

casper.then(function(){
    if (this.exists('a[onclick="GetCatalogPage(\'2\');"]')) {
        this.echo('the 2nd page exists');
        this.click('a[onclick="GetCatalogPage(\'2\');"]');
    }
});


casper.then(function() {
    this.wait(4000,function() {
        this.capture("try6.png");
    });
});

casper.waitForSelector('dd.row.clearfix.bgcGray', function then (){
    links = this.evaluate(GetHref);
}, function onTimeout(){
    this.die('Timeout reached. Fail at fetch');
});


casper.then(function(){
   for (var i = 0; i< links.length; i++){
       fs.write("cnki_site_JJYJ_test.csv", links[i] + '\n', 'a');
   }
});


//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//-------------------------------------------------vol 3 -----------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

casper.then(function(){
    //this.click(click_vol_1 + click_vol_2 + click_vol_3 + cache_0.toString() + click_vol_4.toString() + click_vol_5);
    this.click(click_vol_1 + click_vol_2 + click_vol_3 + vol_list[3] + click_vol_5);
});

casper.then(function() {
    this.wait(4000,function() {
        this.capture("try5.png");
    });
});

casper.waitForSelector('dd.row.clearfix.bgcGray', function then (){
    links = this.evaluate(GetHref);
}, function onTimeout(){
    this.die('Timeout reached. Fail at fetch');
});

casper.then(function(){
   for (var i = 0; i< links.length; i++){
       fs.write("cnki_site_JJYJ_test.csv", links[i] + '\n', 'a');
   }
});

//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------

casper.then(function(){
    if (this.exists('a[onclick="GetCatalogPage(\'2\');"]')) {
        this.echo('the 2nd page exists');
        this.click('a[onclick="GetCatalogPage(\'2\');"]');
    }
});


casper.then(function() {
    this.wait(4000,function() {
        this.capture("try6.png");
    });
});

casper.waitForSelector('dd.row.clearfix.bgcGray', function then (){
    links = this.evaluate(GetHref);
}, function onTimeout(){
    this.die('Timeout reached. Fail at fetch');
});


casper.then(function(){
   for (var i = 0; i< links.length; i++){
       fs.write("cnki_site_JJYJ_test.csv", links[i] + '\n', 'a');
   }
});


//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//-------------------------------------------------vol 4 -----------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

casper.then(function(){
    //this.click(click_vol_1 + click_vol_2 + click_vol_3 + cache_0.toString() + click_vol_4.toString() + click_vol_5);
    this.click(click_vol_1 + click_vol_2 + click_vol_3 + vol_list[4] + click_vol_5);
});

casper.then(function() {
    this.wait(4000,function() {
        this.capture("try5.png");
    });
});

casper.waitForSelector('dd.row.clearfix.bgcGray', function then (){
    links = this.evaluate(GetHref);
}, function onTimeout(){
    this.die('Timeout reached. Fail at fetch');
});

casper.then(function(){
   for (var i = 0; i< links.length; i++){
       fs.write("cnki_site_JJYJ_test.csv", links[i] + '\n', 'a');
   }
});

//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------

casper.then(function(){
    if (this.exists('a[onclick="GetCatalogPage(\'2\');"]')) {
        this.echo('the 2nd page exists');
        this.click('a[onclick="GetCatalogPage(\'2\');"]');
    }
});


casper.then(function() {
    this.wait(4000,function() {
        this.capture("try6.png");
    });
});

casper.waitForSelector('dd.row.clearfix.bgcGray', function then (){
    links = this.evaluate(GetHref);
}, function onTimeout(){
    this.die('Timeout reached. Fail at fetch');
});


casper.then(function(){
   for (var i = 0; i< links.length; i++){
       fs.write("cnki_site_JJYJ_test.csv", links[i] + '\n', 'a');
   }
});


//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//-------------------------------------------------vol 5 -----------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

casper.then(function(){
    //this.click(click_vol_1 + click_vol_2 + click_vol_3 + cache_0.toString() + click_vol_4.toString() + click_vol_5);
    this.click(click_vol_1 + click_vol_2 + click_vol_3 + vol_list[5] + click_vol_5);
});

casper.then(function() {
    this.wait(4000,function() {
        this.capture("try5.png");
    });
});

casper.waitForSelector('dd.row.clearfix.bgcGray', function then (){
    links = this.evaluate(GetHref);
}, function onTimeout(){
    this.die('Timeout reached. Fail at fetch');
});

casper.then(function(){
   for (var i = 0; i< links.length; i++){
       fs.write("cnki_site_JJYJ_test.csv", links[i] + '\n', 'a');
   }
});

//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------

casper.then(function(){
    if (this.exists('a[onclick="GetCatalogPage(\'2\');"]')) {
        this.echo('the 2nd page exists');
        this.click('a[onclick="GetCatalogPage(\'2\');"]');
    }
});


casper.then(function() {
    this.wait(4000,function() {
        this.capture("try6.png");
    });
});

casper.waitForSelector('dd.row.clearfix.bgcGray', function then (){
    links = this.evaluate(GetHref);
}, function onTimeout(){
    this.die('Timeout reached. Fail at fetch');
});


casper.then(function(){
   for (var i = 0; i< links.length; i++){
       fs.write("cnki_site_JJYJ_test.csv", links[i] + '\n', 'a');
   }
});


//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//-------------------------------------------------vol 6 -----------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

casper.then(function(){
    //this.click(click_vol_1 + click_vol_2 + click_vol_3 + cache_0.toString() + click_vol_4.toString() + click_vol_5);
    this.click(click_vol_1 + click_vol_2 + click_vol_3 + vol_list[6] + click_vol_5);
});

casper.then(function() {
    this.wait(4000,function() {
        this.capture("try5.png");
    });
});

casper.waitForSelector('dd.row.clearfix.bgcGray', function then (){
    links = this.evaluate(GetHref);
}, function onTimeout(){
    this.die('Timeout reached. Fail at fetch');
});

casper.then(function(){
   for (var i = 0; i< links.length; i++){
       fs.write("cnki_site_JJYJ_test.csv", links[i] + '\n', 'a');
   }
});

//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------

casper.then(function(){
    if (this.exists('a[onclick="GetCatalogPage(\'2\');"]')) {
        this.echo('the 2nd page exists');
        this.click('a[onclick="GetCatalogPage(\'2\');"]');
    }
});


casper.then(function() {
    this.wait(4000,function() {
        this.capture("try6.png");
    });
});

casper.waitForSelector('dd.row.clearfix.bgcGray', function then (){
    links = this.evaluate(GetHref);
}, function onTimeout(){
    this.die('Timeout reached. Fail at fetch');
});


casper.then(function(){
   for (var i = 0; i< links.length; i++){
       fs.write("cnki_site_JJYJ_test.csv", links[i] + '\n', 'a');
   }
});


//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//-------------------------------------------------vol 7 -----------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

casper.then(function(){
    //this.click(click_vol_1 + click_vol_2 + click_vol_3 + cache_0.toString() + click_vol_4.toString() + click_vol_5);
    this.click(click_vol_1 + click_vol_2 + click_vol_3 + vol_list[7] + click_vol_5);
});

casper.then(function() {
    this.wait(4000,function() {
        this.capture("try5.png");
    });
});

casper.waitForSelector('dd.row.clearfix.bgcGray', function then (){
    links = this.evaluate(GetHref);
}, function onTimeout(){
    this.die('Timeout reached. Fail at fetch');
});

casper.then(function(){
   for (var i = 0; i< links.length; i++){
       fs.write("cnki_site_JJYJ_test.csv", links[i] + '\n', 'a');
   }
});

//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------

casper.then(function(){
    if (this.exists('a[onclick="GetCatalogPage(\'2\');"]')) {
        this.echo('the 2nd page exists');
        this.click('a[onclick="GetCatalogPage(\'2\');"]');
    }
});


casper.then(function() {
    this.wait(4000,function() {
        this.capture("try6.png");
    });
});

casper.waitForSelector('dd.row.clearfix.bgcGray', function then (){
    links = this.evaluate(GetHref);
}, function onTimeout(){
    this.die('Timeout reached. Fail at fetch');
});


casper.then(function(){
   for (var i = 0; i< links.length; i++){
       fs.write("cnki_site_JJYJ_test.csv", links[i] + '\n', 'a');
   }
});


//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//-------------------------------------------------vol 8 -----------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

casper.then(function(){
    //this.click(click_vol_1 + click_vol_2 + click_vol_3 + cache_0.toString() + click_vol_4.toString() + click_vol_5);
    this.click(click_vol_1 + click_vol_2 + click_vol_3 + vol_list[8] + click_vol_5);
});

casper.then(function() {
    this.wait(4000,function() {
        this.capture("try5.png");
    });
});

casper.waitForSelector('dd.row.clearfix.bgcGray', function then (){
    links = this.evaluate(GetHref);
}, function onTimeout(){
    this.die('Timeout reached. Fail at fetch');
});

casper.then(function(){
   for (var i = 0; i< links.length; i++){
       fs.write("cnki_site_JJYJ_test.csv", links[i] + '\n', 'a');
   }
});

//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------

casper.then(function(){
    if (this.exists('a[onclick="GetCatalogPage(\'2\');"]')) {
        this.echo('the 2nd page exists');
        this.click('a[onclick="GetCatalogPage(\'2\');"]');
    }
});


casper.then(function() {
    this.wait(4000,function() {
        this.capture("try6.png");
    });
});

casper.waitForSelector('dd.row.clearfix.bgcGray', function then (){
    links = this.evaluate(GetHref);
}, function onTimeout(){
    this.die('Timeout reached. Fail at fetch');
});


casper.then(function(){
   for (var i = 0; i< links.length; i++){
       fs.write("cnki_site_JJYJ_test.csv", links[i] + '\n', 'a');
   }
});


//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//-------------------------------------------------vol 9 -----------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

casper.then(function(){
    //this.click(click_vol_1 + click_vol_2 + click_vol_3 + cache_0.toString() + click_vol_4.toString() + click_vol_5);
    this.click(click_vol_1 + click_vol_2 + click_vol_3 + vol_list[9] + click_vol_5);
});

casper.then(function() {
    this.wait(4000,function() {
        this.capture("try5.png");
    });
});

casper.waitForSelector('dd.row.clearfix.bgcGray', function then (){
    links = this.evaluate(GetHref);
}, function onTimeout(){
    this.die('Timeout reached. Fail at fetch');
});

casper.then(function(){
   for (var i = 0; i< links.length; i++){
       fs.write("cnki_site_JJYJ_test.csv", links[i] + '\n', 'a');
   }
});

//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------

casper.then(function(){
    if (this.exists('a[onclick="GetCatalogPage(\'2\');"]')) {
        this.echo('the 2nd page exists');
        this.click('a[onclick="GetCatalogPage(\'2\');"]');
    }
});


casper.then(function() {
    this.wait(4000,function() {
        this.capture("try6.png");
    });
});

casper.waitForSelector('dd.row.clearfix.bgcGray', function then (){
    links = this.evaluate(GetHref);
}, function onTimeout(){
    this.die('Timeout reached. Fail at fetch');
});


casper.then(function(){
   for (var i = 0; i< links.length; i++){
       fs.write("cnki_site_JJYJ_test.csv", links[i] + '\n', 'a');
   }
});


//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//-------------------------------------------------vol 10 -----------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

casper.then(function(){
    //this.click(click_vol_1 + click_vol_2 + click_vol_3 + cache_0.toString() + click_vol_4.toString() + click_vol_5);
    this.click(click_vol_1 + click_vol_2 + click_vol_3 + vol_list[10] + click_vol_5);
});

casper.then(function() {
    this.wait(4000,function() {
        this.capture("try5.png");
    });
});

casper.waitForSelector('dd.row.clearfix.bgcGray', function then (){
    links = this.evaluate(GetHref);
}, function onTimeout(){
    this.die('Timeout reached. Fail at fetch');
});

casper.then(function(){
   for (var i = 0; i< links.length; i++){
       fs.write("cnki_site_JJYJ_test.csv", links[i] + '\n', 'a');
   }
});

//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------

casper.then(function(){
    if (this.exists('a[onclick="GetCatalogPage(\'2\');"]')) {
        this.echo('the 2nd page exists');
        this.click('a[onclick="GetCatalogPage(\'2\');"]');
    }
});


casper.then(function() {
    this.wait(4000,function() {
        this.capture("try6.png");
    });
});

casper.waitForSelector('dd.row.clearfix.bgcGray', function then (){
    links = this.evaluate(GetHref);
}, function onTimeout(){
    this.die('Timeout reached. Fail at fetch');
});


casper.then(function(){
   for (var i = 0; i< links.length; i++){
       fs.write("cnki_site_JJYJ_test.csv", links[i] + '\n', 'a');
   }
});


//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//-------------------------------------------------vol 11 -----------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

casper.then(function(){
    //this.click(click_vol_1 + click_vol_2 + click_vol_3 + cache_0.toString() + click_vol_4.toString() + click_vol_5);
    this.click(click_vol_1 + click_vol_2 + click_vol_3 + vol_list[11] + click_vol_5);
});

casper.then(function() {
    this.wait(4000,function() {
        this.capture("try5.png");
    });
});

casper.waitForSelector('dd.row.clearfix.bgcGray', function then (){
    links = this.evaluate(GetHref);
}, function onTimeout(){
    this.die('Timeout reached. Fail at fetch');
});

casper.then(function(){
   for (var i = 0; i< links.length; i++){
       fs.write("cnki_site_JJYJ_test.csv", links[i] + '\n', 'a');
   }
});

//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------
//----------------------------------------------

casper.then(function(){
    if (this.exists('a[onclick="GetCatalogPage(\'2\');"]')) {
        this.echo('the 2nd page exists');
        this.click('a[onclick="GetCatalogPage(\'2\');"]');
    }
});


casper.then(function() {
    this.wait(4000,function() {
        this.capture("try6.png");
    });
});

casper.waitForSelector('dd.row.clearfix.bgcGray', function then (){
    links = this.evaluate(GetHref);
}, function onTimeout(){
    this.die('Timeout reached. Fail at fetch');
});


casper.then(function(){
   for (var i = 0; i< links.length; i++){
       fs.write("cnki_site_JJYJ_test.csv", links[i] + '\n', 'a');
   }
});



casper.run(function(){
    this.echo(click_year.toString() + 'finished').exit()
});

