const chai = require('chai');
const chaiHttp = require('chai-http');
const fs = require('fs');

const server = require('../app');
const User = require('../model/users');

const should = chai.should();
chai.use(chaiHttp);
chai.use(require('chai-string'));

describe('users', function () {

    User.collection.drop();

    it('seharusnya dapat menambahkan user baru ke dalam database', function (done) {
        chai.request(server)
        .post('/api/users/')
        .send({nama:"Hardi Steve",
               alamat:"UjungBerung Bandung",
               username:"JalanSesama",
               password:"JalanSesama123"})
        .end(function (err,res) {
            res.should.have.status(201);
            res.should.be.json;
            res.body.should.have.property('status');
            res.body.should.have.property('data');
            res.body.status.should.equal('success');
            res.body.data.nama.should.equal('Hardi Steve');
            res.body.data.alamat.should.equal('UjungBerung Bandung');
            res.body.data.username.should.equal('JalanSesama');
            res.body.data.password.should.equal('JalanSesama123');
            done();
        })
    })

    it('seharusnya dapat melihat list user baru yang ada di database', function(done) {
        chai.request(server)
        .get('/api/users/')
        .end(function (err,res) {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('array');
            res.body[0].should.have.property('nama');
            res.body[0].should.have.property('alamat');
            res.body[0].should.have.property('username');
            res.body[0].should.have.property('password');
            res.body[0].nama.should.equal('Hardi Steve');
            res.body[0].alamat.should.equal('UjungBerung Bandung');
            res.body[0].username.should.equal('JalanSesama');
            res.body[0].password.should.equal('JalanSesama123');
            done();
        })
    })

    it('seharusnya dapat melihat detail user berdasarkan id user', function(done) {
        chai.request(server)
        .get('/api/users/')
        .end(function (err,res) {
            let idUser = res.body[0]._id;
            chai.request(server)
            .get('/api/users/'+idUser)
            .end(function (err,res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.have.property('status');
                res.body.should.have.property('data');
                res.body.status.should.equal('success');
                res.body.data[0].nama.should.equal('Hardi Steve');
                res.body.data[0].alamat.should.equal('UjungBerung Bandung');
                res.body.data[0].username.should.equal('JalanSesama');
                res.body.data[0].password.should.equal('JalanSesama123');
                done();
            })
        })
    })

    it('seharusnya dapat melihat detail user berdasarkan id user', function(done) {
        chai.request(server)
        .get('/api/users/')
        .end(function (err,res) {
            let idUser = res.body[0]._id;
            chai.request(server)
            .get('/api/users/'+idUser)
            .end(function (err,res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.have.property('status');
                res.body.should.have.property('data');
                res.body.status.should.equal('success');
                res.body.data[0].nama.should.equal('Hardi Steve');
                res.body.data[0].alamat.should.equal('UjungBerung Bandung');
                res.body.data[0].username.should.equal('JalanSesama');
                res.body.data[0].password.should.equal('JalanSesama123');
                done();
            })
        })
    })

    it('seharusnya dapat mengupload file photo berdasarkan id user', function (done) {
        chai.request(server)
        .get('/api/users/')
        .end(function (err,res) {
            let idUser = res.body[0]._id;
            chai.request(server)
            .put('/api/users/uploadphoto/'+idUser)
            .attach('files',fs.readFileSync('./test/test_image/c41.png'),'c41.png')
            .end(function (err,res) {
                res.should.have.status(201);
                res.should.be.json;
                res.body.should.have.property('status');
                res.body.should.have.property('data');
                res.body.status.should.equal('success');
                res.body.data.nama.should.equal('Hardi Steve');
                res.body.data.alamat.should.equal('UjungBerung Bandung');
                res.body.data.username.should.equal('JalanSesama');
                res.body.data.password.should.equal('JalanSesama123');
                done();
            })
        })
    })

})
