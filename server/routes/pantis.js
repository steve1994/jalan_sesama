var express = require('express');
var router = express.Router();
var path = require('path');
const Panti = require('../model/pantis');

router.get('/:idUser', function(req, res) {
    let idUser = req.params.idUser;
    Panti.find({idUser})
    .exec(function (err,response) {
        if (err) {
            res.status(400).json({status:'failed',error:err})
        } else {
            res.status(200).json(response)
        }
    })
});

router.get('/', function(req, res) {
    Panti.find()
    .exec(function (err,response) {
        if (err) {
            res.status(400).json({status:'failed',error:err})
        } else {
            res.status(200).json(response)
        }
    })
})

router.post('/:idUser', function(req,res) {
    let idUser = req.params.idUser;
    let nama = req.body.nama;
    let alamat = req.body.alamat;
    let judul = req.body.judul;
    let deskripsi = req.body.deskripsi;
    let jumlahOrang = req.body.jumlahOrang;
    let location = req.body.location;
    let status = "pending";
    try {
        const newPanti = new Panti({idUser,nama,alamat,judul,deskripsi,jumlahOrang,location,status});
        newPanti.save().then(dataCreated => {
            res.status(201).json({status:'success',data:dataCreated})
        })
    } catch (error) {
        res.status(400).json({status:'failed',error});
    }
})

function randomString(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

router.put('/uploadphoto/:idPanti', function (req,res) {
    let idPanti = req.params.idPanti;
    let uploadedFile = req.files ? req.files.files : null;
    let fileName = req.files ? (randomString(10) + "_" + req.files.files.name) : null;
    if (uploadedFile) {
        uploadedFile.mv(path.join(__dirname,`../public/images/uploaded_image/panti/${fileName}`), function (err) {
            if (err) {
                res.status(400).json({status:'failed',error:err})
            } else {
                Panti.findOneAndUpdate({_id:idPanti},{foto:fileName},function (err,response) {
                    if (err) {
                        res.status(400).json({status:'failed',error:err});
                    } else {
                        res.status(201).json({status:'success',data:response});
                    }
                })
            }
        })
    } else {
        res.status(400).json({status:'failed',error:'file uploaded is empty'});
    }
})

router.put('/status/:idPanti/:status', function (req,res) {
    let idPanti = req.params.idPanti;
    let status = req.params.status;
    Panti.findOneAndUpdate({_id:idPanti},{status},function (err,response) {
        if (err) {
            res.status(400).json({status:'failed',error:err});
        } else {
            res.status(201).json({status:'success',data:response});
        }
    })
})

router.delete('/:idPanti',function (req,res) {
    let idPanti = req.params.idPanti;
    Panti.findOneAndDelete({_id:idPanti},function (err,response) {
        if (err) {
            res.status(400).json({status:'failed',error:err})
        } else {
            res.status(201).json({status:'success',data:response})
        }
    })
})

module.exports = router;
