var express = require('express');
var router = express.Router();
const Users = require('../model/users');

router.get('/', function(req, res) {
    Users.find()
    .exec(function(err,response) {
      if (err) {
          res.status(400).json({status:'failed',error:err})
      } else {
          res.status(200).json(response)
      }
    })
});

router.get('/:idUser', function (req,res) {
    let idUser = req.params.idUser;
    Users.find({_id:idUser})
    .exec(function(err,response) {
        if (err) {
            res.status(400).json({status:'failed',error:err})
        } else {
            res.status(200).json(response)
        }
    })
})

router.post('/', function (req,res) {
    let nama = req.body.nama;
    let alamat = req.body.alamat;
    try {
        const newUsers = new Users({nama,alamat});
        newUsers.save().then(dataCreated => {
            res.status(201).json({status:'success',data:dataCreated})
        })
    } catch (error) {
        res.status(400).json({status:'failed',error});
    }
})

module.exports = router;
