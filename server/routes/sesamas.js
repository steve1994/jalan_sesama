var express = require('express');
var router = express.Router();
var path = require('path');
const Sesama = require('../model/sesamas');

router.get('/:idUser', function(req, res) {
    let idUser = req.params.idUser;
    Sesama.find({idUser})
    .exec(function (err,response) {
        if (err) {
            res.status(400).json({status:'failed',error:err})
        } else {
            res.status(200).json(response)
        }
    })
});

router.get('/detailSesama/:_id', function(req, res) {

    
    Sesama.findById({_id: req.params._id})
    .exec(function (err,response) {
        if (err) {
            res.status(400).json({status:'failed',error:err})
        } else {
            
            res.status(200).json(response)
            console.log('Sesama >', response);
        }
    })
});

router.get('/', function(req, res) {
    Sesama.find()
    .exec(function (err,response) {
        if (err) {
            res.status(400).json({status:'failed',error:err})
        } else {
            res.status(200).json(response)
        }
    })
})

router.post('/:idUser', function(req,res) {

    console.log('data sesama POST', req.body);
    

    let idUser = req.params.idUser;
    let nama = req.body.nama;
    let alamat = req.body.alamat;
    let judul = req.body.judul;
    let deskripsi = req.body.deskripsi;
    let location = req.body.location;
    let status = "pending";
    try {
        const newSesama = new Sesama({idUser,nama,alamat,judul,deskripsi,location,status});
        newSesama.save().then(dataCreated => {
            res.status(201).json({status:'success',data:dataCreated})
        })
    } catch (error) {
        res.status(400).json({status:'failed',error});
    }
})

router.put('/:idSesama', function(req,res) {

    let idSesama = req.params.idSesama;
    let nama = req.body.nama;
    let judul = req.body.judul;
    let alamat = req.body.alamat;
    let deskripsi = req.body.deskripsi;
    let foto = req.body.foto;
    let location = req.body.location;
    Sesama.findOneAndUpdate({_id:idSesama},{nama,judul,alamat,deskripsi,foto ,location},function (err,response) {
        if (err) {
            res.status(400).json({status:'failed',error:err});
        } else {
            res.status(201).json({status:'success',data:response});
        }
    })
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

router.put('/uploadphoto/:idSesama', function (req,res) {

    console.log('data sesama PUT', req.files);

    let idSesama = req.params.idSesama;
    let uploadedFile = req.files ? req.files.files : null;
    let fileName = req.files ? (randomString(10) + "_" + req.files.files.name) : null;
    if (uploadedFile) {
        uploadedFile.mv(path.join(__dirname,`../public/images/uploaded_image/sesama/${fileName}`), function (err) {
            if (err) {
                res.status(400).json({status:'failed',error:err})
            } else {
                Sesama.findOneAndUpdate({_id:idSesama},{foto:fileName},function (err,response) {
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

router.put('/status/:idSesama/:status', function (req,res) {
    let idSesama = req.params.idSesama;
    let status = req.params.status;
    Sesama.findOneAndUpdate({_id:idSesama},{status},function (err,response) {
        if (err) {
            res.status(400).json({status:'failed',error:err});
        } else {
            res.status(201).json({status:'success',data:response});
        }
    })
})

router.delete('/:idSesama',function (req,res) {
    let idSesama = req.params.idSesama;
    Sesama.findOneAndDelete({_id:idSesama},function (err,response) {
        if (err) {
            res.status(400).json({status:'failed',error:err})
        } else {
            res.status(201).json({status:'success',data:response})
        }
    })
})

module.exports = router;
