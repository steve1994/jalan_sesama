var express = require('express');
var router = express.Router();
var path = require('path');
const Notification = require('../model/notification');

router.get('/', function(req, res) {
    Notification.find()
    .exec(function (err,response) {
        if (err) {
            res.status(400).json({status:'failed',error:err});
        } else {
            res.status(200).json(response);
        }
    })
});

module.exports = router;
