const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../app');
const Panti = require('../model/pantis');

const should = chai.should();
chai.use(chaiHttp);

describe('pantis', function () {

    Panti.collection.drop();

    it('seharusnya dapat menambahkan panti baru ke dalam database', function (done) {
        chai.request(server)
        .post('/api/pantis/idUser123456')
        .send({nama:"Panti Asuhan Sejahtera",
               alamat:"UjungBerung Bandung",
               judul:"Satu Dua Tiga",
               deskripsi:"Satu Dua Tiga",
               jumlahOrang:50,
               location:"(-1.0000,113.0000)"})
        .end(function (err,res) {
            res.should.have.status(201);
            res.should.be.json;
            res.body.should.have.property('status');
            res.body.should.have.property('data');
            res.body.status.should.equal('success');
            res.body.data.idUser.should.equal('idUser123456');
            res.body.data.nama.should.equal('Panti Asuhan Sejahtera');
            res.body.data.alamat.should.equal('UjungBerung Bandung');
            res.body.data.judul.should.equal('Satu Dua Tiga');
            res.body.data.deskripsi.should.equal('Satu Dua Tiga');
            res.body.data.jumlahOrang.should.equal(50);
            res.body.data.location.should.equal('(-1.0000,113.0000)');
            res.body.data.status.should.equal('pending');
            done();
        })
    })

    it('seharusnya dapat menampilkan data panti berdasarkan idUser',function (done) {
        chai.request(server)
        .get('/api/pantis/idUser123456')
        .end(function (err,res) {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('array');
            res.body[0].should.have.property('idUser');
            res.body[0].should.have.property('nama');
            res.body[0].should.have.property('alamat');
            res.body[0].should.have.property('judul');
            res.body[0].should.have.property('deskripsi');
            res.body[0].should.have.property('jumlahOrang');
            res.body[0].should.have.property('location');
            res.body[0].should.have.property('status');
            res.body[0].idUser.should.equal('idUser123456');
            res.body[0].nama.should.equal('Panti Asuhan Sejahtera');
            res.body[0].alamat.should.equal('UjungBerung Bandung');
            res.body[0].judul.should.equal('Satu Dua Tiga');
            res.body[0].deskripsi.should.equal('Satu Dua Tiga');
            res.body[0].jumlahOrang.should.equal(50);
            res.body[0].location.should.equal('(-1.0000,113.0000)');
            res.body[0].status.should.equal('pending');
            done();
        })
    })

    it('seharusnya dapat menampilkan seluruh data panti',function (done) {
        chai.request(server)
        .get('/api/pantis/')
        .end(function (err,res) {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('array');
            res.body[0].should.have.property('idUser');
            res.body[0].should.have.property('nama');
            res.body[0].should.have.property('alamat');
            res.body[0].should.have.property('judul');
            res.body[0].should.have.property('deskripsi');
            res.body[0].should.have.property('jumlahOrang');
            res.body[0].should.have.property('location');
            res.body[0].should.have.property('status');
            res.body[0].idUser.should.equal('idUser123456');
            res.body[0].nama.should.equal('Panti Asuhan Sejahtera');
            res.body[0].alamat.should.equal('UjungBerung Bandung');
            res.body[0].judul.should.equal('Satu Dua Tiga');
            res.body[0].deskripsi.should.equal('Satu Dua Tiga');
            res.body[0].jumlahOrang.should.equal(50);
            res.body[0].location.should.equal('(-1.0000,113.0000)');
            res.body[0].status.should.equal('pending');
            done();
        })
    })

    it('seharusnya dapat mengedit data panti berdasarkan id panti', function (done) {
        chai.request(server)
        .get('/api/pantis/idUser123456')
        .end(function (err,res) {
            let idPanti = res.body[0]._id;
            chai.request(server)
            .put('/api/pantis/'+idPanti)
            .send({nama:"Panti Asuhan Sejahtera v2",
                   alamat:"UjungBerung Bandung v2",
                   judul:"Satu Dua Tiga v2",
                   deskripsi:"Satu Dua Tiga v2",
                   jumlahOrang:51,
                   foto:'images.jpg',
                   location:"(-1.0000,113.0001)"})
            .end(function (err,res) {
                res.should.have.status(201);
                res.should.be.json;
                res.body.should.have.property('status');
                res.body.should.have.property('data');
                res.body.status.should.equal('success');
                res.body.data.idUser.should.equal('idUser123456');
                res.body.data.nama.should.equal('Panti Asuhan Sejahtera');
                res.body.data.alamat.should.equal('UjungBerung Bandung');
                res.body.data.judul.should.equal('Satu Dua Tiga');
                res.body.data.deskripsi.should.equal('Satu Dua Tiga');
                res.body.data.jumlahOrang.should.equal(50);
                res.body.data.location.should.equal('(-1.0000,113.0000)');
                res.body.data.status.should.equal('pending');
                done();
            })
        })
    })

    it('seharusnya dapat mengganti status panti berdasarkan id panti', function (done) {
        chai.request(server)
        .get('/api/pantis/idUser123456')
        .end(function (err,res) {
            let idPanti = res.body[0]._id;
            chai.request(server)
            .put('/api/pantis/status/'+idPanti+'/approved')
            .end(function (err,res) {
                res.should.have.status(201);
                res.should.be.json;
                res.body.should.have.property('status');
                res.body.should.have.property('data');
                res.body.status.should.equal('success');
                res.body.data.idUser.should.equal('idUser123456');
                res.body.data.nama.should.equal('Panti Asuhan Sejahtera v2');
                res.body.data.alamat.should.equal('UjungBerung Bandung v2');
                res.body.data.judul.should.equal('Satu Dua Tiga v2');
                res.body.data.deskripsi.should.equal('Satu Dua Tiga v2');
                res.body.data.jumlahOrang.should.equal(51);
                res.body.data.foto.should.equal('images.jpg');
                res.body.data.location.should.equal('(-1.0000,113.0001)');
                res.body.data.status.should.equal('pending');
                done();
            })
        })
    })

    it('seharusnya dapat menghapus panti berdasarkan id panti', function (done) {
        chai.request(server)
        .get('/api/pantis/idUser123456')
        .end(function (err,res) {
            let idPanti = res.body[0]._id;
            chai.request(server)
            .delete('/api/pantis/'+idPanti)
            .end(function (err,res) {
                res.should.have.status(201);
                res.should.be.json;
                res.body.should.have.property('status');
                res.body.should.have.property('data');
                res.body.status.should.equal('success');
                res.body.data.idUser.should.equal('idUser123456');
                res.body.data.nama.should.equal('Panti Asuhan Sejahtera v2');
                res.body.data.alamat.should.equal('UjungBerung Bandung v2');
                res.body.data.judul.should.equal('Satu Dua Tiga v2');
                res.body.data.deskripsi.should.equal('Satu Dua Tiga v2');
                res.body.data.jumlahOrang.should.equal(51);
                res.body.data.foto.should.equal('images.jpg');
                res.body.data.location.should.equal('(-1.0000,113.0001)');
                res.body.data.status.should.equal('approved');
                done();
            })
        })
    })

})
