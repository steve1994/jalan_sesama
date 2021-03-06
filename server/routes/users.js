var express = require('express');
var router = express.Router();
const Users = require('../model/users');
var path = require('path');
var localStorage = require('localStorage');

router.get('/', function (req, res) {
    Users.find()
        .exec(function (err, response) {
            if (err) {
                res.status(400).json({ status: 'failed', error: err })
            } else {
                res.status(200).json(response)
            }
        })
});

router.get('/:idUser', function (req, res) {
    let idUser = req.params.idUser;
    Users.find({ _id: idUser })
        .exec(function (err, response) {
            if (err) {
                res.status(400).json({ status: 'failed', error: err })
            } else {
                res.status(200).json({ status: 'success', data: response })
            }
        })
})

//processlogin
router.get('/login/:username/:password', function (req, res) {

    let username = req.params.username;
    Users.find({ username: username })
        .exec(function (error, response) {

            if (response.length == 0) {

                res.status(200).json({ status: 'username not found', data: response })

            } else {

                let password = req.params.password;
                if (response[0].password == password) {
                    res.status(200).json({ status: 'success', data: response })

                } else {
                    res.status(400).json({ status: 'password wrong', data: error })

                }
            }

        })
})

//processlogin admin page
router.post('/login_admin/', function (req,res) {
    let username = req.body.username;
    let password = req.body.password;
    
    Users.find({username})
    .exec(function (err,response) {
        if (err) {
            res.status(400).json({status:'failed',error:err})
        } else {
            if (response.length == 0) {
                res.status(400).json({status:'failed',error:'wrong username and/or password'});
            } else {
                if (response[0].isAdmin) {
                    if (response[0].password == password) {
                        res.status(201).json({status:'success',data:response})
                        console.log("login SUCCESS", response);
                        
                    } else {
                        res.status(400).json({status:'failed',error:'wrong username and/or password'});
                    }
                } else {
                    res.status(400).json({status:'failed',error:'user do not have admin privilege'});
                }
            }
        }
    })
})

router.post('/', function (req, res) {
    console.log('data body ', req.body);

    let nama = req.body.nama;
    let alamat = req.body.alamat;
    let username = req.body.username;
    let password = req.body.password;
    try {
        const newUsers = new Users({ nama, alamat, username, password });
        newUsers.save().then(dataCreated => {
            res.status(201).json({ status: 'success', data: dataCreated })
        })
    } catch (error) {
        res.status(400).json({ status: 'failed', error });
    }
})

router.post('/admin', function (req,res) {
    let nama = req.body.nama;
    let alamat = req.body.alamat;
    let username = req.body.username;
    let password = req.body.password;
    let isAdmin = true;
    try {
        const newUsers = new Users({nama, alamat, username, password, isAdmin});
        newUsers.save().then(dataCreated => {
            res.status(201).json({status:'success', data:dataCreated});
        })
    } catch (error) {
        res.status(400).json({status:'failed', error});
    }
})

function randomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

router.put('/uploadphoto/:idUser', function (req, res) {

    console.log('data files', req.files);

    let idUser = req.params.idUser;
    let uploadedFile = req.files ? req.files.files : null;
    let fileName = req.files ? (randomString(10) + "_" + req.files.files.name + ".jpg") : null;
    if (uploadedFile) {
        uploadedFile.mv(path.join(__dirname, `../public/images/uploaded_image/user/${fileName}`), function (err) {
            if (err) {
                res.status(400).json({ status: 'failed', error: err })
            } else {
                Users.findOneAndUpdate({ _id: idUser }, { foto: fileName }, function (err, response) {
                    if (err) {
                        res.status(400).json({ status: 'failed', error: err });
                    } else {
                        res.status(201).json({ status: 'success', data: response });
                    }
                })
            }
        })
    } else {
        res.status(400).json({ status: 'failed', error: 'file uploaded is empty' });
    }
})

module.exports = router;
