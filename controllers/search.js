var googleApiKey = "AIzaSyCnkXyQmkmowSm3Wjs_kVba2GbaQQZW-1w";
var express = require('express')
    , router = express.Router();
var fs = require('fs');
var request = require('request');
var sqlite3 = require('sqlite3').verbose();
var async = require('async');
router.get('/', function (req, res) {
    res.render('index.ejs');
});

var vidStartTime = new Date().getTime();


router.get('/sync', function(req, res){
    console.log(new Date().getTime());
    var date= new Date().getTime()+"";
    res.send(date);
});

router.get('/seek', function(req,res){
    var website = req.body.website;
    var videoid = req.body.id;
    var date= new Date().getTime();
    var currentTime = date-vidStartTime;
    res.send('{"date":'+date+', "currentTime":'+currentTime+'}');
});
module.exports = router;