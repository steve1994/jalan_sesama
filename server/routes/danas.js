var express = require('express');
var router = express.Router();
var path = require('path');
const Dana = require('../model/danas');
const Panti = require('../model/pantis');
const Sesama = require('../model/sesamas');

router.get('/panti/:idPanti', function(req, res) {
  let idPanti = req.params.idPanti;
  Dana.find({idPanti})
  .exec(function (err,response) {
    if (err) {
      res.status(400).json({status:'failed',error:err})
    } else {
      res.status(200).json(response)
    }
  })
});

router.get('/sesama/:idBantuSesama', function(req, res) {
  let idBantuSesama = req.params.idBantuSesama;
  Dana.find({idBantu:idBantuSesama})
  .exec(function (err,response) {
    if (err) {
      res.status(400).json({status:'failed',error:err})
    } else {
      res.status(200).json(response)
    }
  })
})

router.get('/', function(req, res) {
  Dana.find()
  .exec(function (err,response) {
    if (err) {
      res.status(400).json({status:'failed',error:err})
    } else {
      res.status(200).json(response)
    }
  })
})

router.get('/complete', function(req, res) {
  Dana.find()
  .exec(function (errDocs,docs) {
    Panti.find()
    .exec(function (errPantiDocs,pantiDocs) {
      Sesama.find()
      .exec(function (errSesamaDocs,sesamaDocs) {
        docs.map((item,index) => {
          item['namaPantiOrBantu'] = "";
          if (item.idPanti) {
            item['namaPantiOrBantu'] = pantiDocs.filter((a)=>a._id==item.idPanti)[0].nama;
          }
          if (item.idBantu) {
            item['namaPantiOrBantu'] = sesamaDocs.filter((b)=>b._id==item.idBantu)[0].nama;
          }
          console.log(item);
          return item;
        })
        if (errDocs) {
          res.status(400).json({status:'failed',error:errDocs})
        } else if (errPantiDocs) {
          res.status(400).json({status:'failed',error:errPantiDocs})
        } else if (errSesamaDocs) {
          res.status(400).json({status:'failed',error:errSesamaDocs})
        } else {
          res.status(200).json(docs)
        }
      })
    })
  })
})

router.post('/panti/:idPanti', function(req,res) {
  let idPanti = req.params.idPanti;
  let idBantu = null;
  let nama = req.body.nama;
  let alamat = req.body.alamat;
  let judul = req.body.judul;
  let deskripsi = req.body.deskripsi;
  let status = "pending";
  let nominalSet = req.body.nominalSet;
  let nominalProcess = 0;
  try {
    const newAnggaranPanti = new Dana({idPanti,idBantu,nama,alamat,judul,deskripsi,status,nominalSet,nominalProcess});
    newAnggaranPanti.save().then(dataCreated => {
      res.status(201).json({status:'success',data:dataCreated})
    })
  } catch (error) {
    res.status(400).json({status:'failed',error});
  }
})

router.post('/sesama/:idBantuSesama', function(req,res) {
  let idPanti = null;
  let idBantu = req.params.idBantuSesama;
  let nama = req.body.nama;
  let alamat = req.body.alamat;
  let judul = req.body.judul;
  let deskripsi = req.body.deskripsi;
  let status = "pending";
  let nominalSet = req.body.nominalSet;
  let nominalProcess = 0;
  try {
    const newAnggaranBantuSesama = new Dana({idPanti,idBantu,nama,alamat,judul,deskripsi,status,nominalSet,nominalProcess});
    newAnggaranBantuSesama.save().then(dataCreated => {
      res.status(201).json({status:'success',data:dataCreated});
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

router.put('/uploadphoto/:idGalangDana', function (req,res) {
  let idGalangDana = req.params.idGalangDana;
  let uploadedFile = req.files ? req.files.files : null;
  let fileName = req.files ? (randomString(10) + "_" + req.files.files.name) : null;
  if (uploadedFile) {
    uploadedFile.mv(path.join(__dirname,`../public/images/uploaded_image/dana/${fileName}`), function (err) {
      if (err) {
        res.status(400).json({status:'failed',error:err})
      } else {
        Product.findOneAndUpdate({_id:idGalangDana},{foto:fileName},function (err,response) {
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

router.put('/status/:idGalangDana/:status', function (req,res) {
  let idGalangDana = req.params.idGalangDana;
  let status = req.params.status;
  Dana.findOneAndUpdate({_id:idGalangDana},{status},function (err,response) {
    if (err) {
      res.status(400).json({status:'failed',error:err});
    } else {
      res.status(201).json({status:'success',data:response});
    }
  })
})

router.put('/setnominal/:idGalangDana/:nominal', function (req,res) {
    let idGalangDana = req.params.idGalangDana;
    let nominal = parseInt(req.params.nominal);
    Dana.findOneAndUpdate({_id:idGalangDana},{nominalSet:nominal},function (err,response) {
        if (err) {
            res.status(400).json({status:'failed',error:err});
        } else {
            res.status(201).json({status:'success',data:response});
        }
    })
})

router.put('/addnominal/:idGalangDana/:nominal', function (req,res) {
  let idGalangDana = req.params.idGalangDana;
  let nominal = parseInt(req.params.nominal);
  Dana.find({_id:idGalangDana})
  .exec(function(err,response) {
    let currentNominal = response[0].nominalProcess;
    currentNominal += nominal;
    Dana.findOneAndUpdate({_id:idGalangDana},{nominalProcess:currentNominal},function (err,response) {
      if (err) {
        res.status(400).json({status:'failed',error:err});
      } else {
        res.status(201).json({status:'success',data:response});
      }
    })
  })
})

router.delete('/panti/:idPanti', function (req,res) {
  let idPanti = req.params.idPanti;
  Dana.deleteMany({idPanti},function (err) {
    if (err) {
      res.status(400).json({status:'failed',error:err})
    } else {
      res.status(201).json({status:'success'})
    }
  })
})

router.delete('/sesama/:idBantuSesama', function (req,res) {
  let idSesama = req.params.idBantuSesama;
  Dana.deleteMany({idBantu:idSesama},function (err) {
    if (err) {
      res.status(400).json({status:'failed',error:err})
    } else {
      res.status(201).json({status:'success'})
    }
  })
})

module.exports = router;
