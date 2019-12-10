var express = require('express');
var router = express.Router();
var path = require('path');
const Panti = require('../model/pantis');
const Notification = require('../model/notification');

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

router.get('/detailPanti/:_id', function(req, res) {


    Panti.findById({_id: req.params._id})
    .exec(function (err,response) {
        if (err) {
            res.status(400).json({status:'failed',error:err})
        } else {

            res.status(200).json(response)
            console.log('PANTIS >', response);
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


//post panti harus pakai (:idUser), sementara dihapus dulu
router.post('/:idUser', function(req,res) {
    console.log('params', req.params);
    console.log('BOdy', req.body);


    let idUser = req.params.idUser;
    let nama = req.body.nama;
    let alamat = req.body.alamat;
    let judul = req.body.judul;
    let deskripsi = req.body.deskripsi;
    let jumlahOrang = req.body.jumlahOrang;
    let location = req.body.location;
    let status = "pending";
    try {
        const newPanti = new Panti({idUser,judul,nama,alamat,deskripsi,jumlahOrang,location,status});
        newPanti.save().then(dataCreated => {
            let dataPanti = dataCreated;
            let notification_name = `Panti dengan nama ${nama} menunggu approval dari admin`;
            let type = 'panti';
            const newNotification = new Notification({created_at:new Date(),notification_name,type,origin_id:dataPanti._id});
            newNotification.save().then(dataCreated => {
                res.status(201).json({status:'success',data:dataPanti});
            })
        })
    } catch (error) {
        res.status(400).json({status:'failed',error});
    }
})

router.put('/:idPanti', function(req,res) {
    let idPanti = req.params.idPanti;
    let nama = req.body.nama;
    let judul = req.body.judul;
    let alamat = req.body.alamat;
    let deskripsi = req.body.deskripsi;
    let jumlahOrang = req.body.jumlahOrang;
    let foto = req.body.foto;
    let location = req.body.location;
    Panti.findOneAndUpdate({_id:idPanti},{nama,judul,alamat,deskripsi,jumlahOrang,foto,location},function (err,response) {
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

router.put('/uploadphoto/:idPanti', function (req,res) {
    console.log('upload on', req.files);

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
            let realResponse = response;
            Notification.findOneAndDelete({origin_id:idPanti},function (err,response) {
                if (err) {
                    res.status(400).json({status:'failed',error:err});
                } else {
                    res.status(201).json({status:'success',data:realResponse});
                }
            })
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
