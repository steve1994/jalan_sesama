const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../app');
const Dana = require('../model/danas');

const should = chai.should();
chai.use(chaiHttp);

describe('danas', function () {

    Dana.collection.drop();

    it('seharusnya dapat menambahkan dana panti baru ke dalam database', function (done) {
        chai.request(server)
        .post('/api/danas/panti/idPanti123456')
        .send({nama:"Anggaran Panti",
               alamat:"UjungBerung Bandung",
               judul:"Satu Dua Tiga",
               deskripsi:"Satu Dua Tiga",
               nominalSet:400000})
        .end(function (err,res) {
            res.should.have.status(201);
            res.should.be.json;
            res.body.should.have.property('status');
            res.body.should.have.property('data');
            res.body.status.should.equal('success');
            res.body.data.idPanti.should.equal('idPanti123456');
            res.body.data.nama.should.equal("Anggaran Panti");
            res.body.data.alamat.should.equal("UjungBerung Bandung");
            res.body.data.judul.should.equal("Satu Dua Tiga");
            res.body.data.deskripsi.should.equal("Satu Dua Tiga");
            res.body.data.status.should.equal("pending");
            res.body.data.nominalSet.should.equal(400000);
            res.body.data.nominalProcess.should.equal(0);
            done();
        })
    })

    it('seharusnya dapat menambahkan dana sesama baru ke dalam database', function (done) {
        chai.request(server)
        .post('/api/danas/sesama/idSesama123456')
        .send({nama:"Anggaran Sesama",
               alamat:"UjungBerung Bandung",
               judul:"Satu Dua Tiga",
               deskripsi:"Satu Dua Tiga",
               nominalSet:400000})
        .end(function (err,res) {
            res.should.have.status(201);
            res.should.be.json;
            res.body.should.have.property('status');
            res.body.should.have.property('data');
            res.body.status.should.equal('success');
            res.body.data.idBantu.should.equal("idSesama123456");
            res.body.data.nama.should.equal("Anggaran Sesama");
            res.body.data.alamat.should.equal("UjungBerung Bandung");
            res.body.data.judul.should.equal("Satu Dua Tiga");
            res.body.data.deskripsi.should.equal("Satu Dua Tiga");
            res.body.data.status.should.equal("pending");
            res.body.data.nominalSet.should.equal(400000);
            res.body.data.nominalProcess.should.equal(0);
            done();
        })
    })

    it('seharusnya dapat menampilkan anggaran panti dengan id panti tertentu', function (done) {
        chai.request(server)
        .get('/api/danas/panti/idPanti123456')
        .end(function (err,res) {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('array');
            res.body[0].should.have.property('_id');
            res.body[0].should.have.property('idPanti');
            res.body[0].should.have.property('idBantu');
            res.body[0].should.have.property('nama');
            res.body[0].should.have.property('alamat');
            res.body[0].should.have.property('judul');
            res.body[0].should.have.property('deskripsi');
            res.body[0].should.have.property('status');
            res.body[0].should.have.property('nominalSet');
            res.body[0].should.have.property('nominalProcess');
            res.body[0].idPanti.should.equal('idPanti123456');
            res.body[0].nama.should.equal('Anggaran Panti');
            res.body[0].alamat.should.equal('UjungBerung Bandung');
            res.body[0].judul.should.equal('Satu Dua Tiga');
            res.body[0].deskripsi.should.equal('Satu Dua Tiga');
            res.body[0].status.should.equal('pending');
            res.body[0].nominalSet.should.equal(400000);
            res.body[0].nominalProcess.should.equal(0);
            done();
        })
    })

    it('seharusnya dapat menampilkan anggaran sesama dengan id sesama tertentu', function (done) {
        chai.request(server)
        .get('/api/danas/sesama/idSesama123456')
        .end(function (err,res) {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('array');
            res.body[0].should.have.property('_id');
            res.body[0].should.have.property('idPanti');
            res.body[0].should.have.property('idBantu');
            res.body[0].should.have.property('nama');
            res.body[0].should.have.property('alamat');
            res.body[0].should.have.property('judul');
            res.body[0].should.have.property('deskripsi');
            res.body[0].should.have.property('status');
            res.body[0].should.have.property('nominalSet');
            res.body[0].should.have.property('nominalProcess');
            res.body[0].idBantu.should.equal('idSesama123456');
            res.body[0].nama.should.equal('Anggaran Sesama');
            res.body[0].alamat.should.equal('UjungBerung Bandung');
            res.body[0].judul.should.equal('Satu Dua Tiga');
            res.body[0].deskripsi.should.equal('Satu Dua Tiga');
            res.body[0].status.should.equal('pending');
            res.body[0].nominalSet.should.equal(400000);
            res.body[0].nominalProcess.should.equal(0);
            done();
        })
    })

    it('seharusnya dapat menampilkan semua data anggaran dengan benar', function (done) {
        chai.request(server)
        .get('/api/danas')
        .end(function (err,res) {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.be.a('array');
            res.body[0].should.have.property('_id');
            res.body[0].should.have.property('idPanti');
            res.body[0].should.have.property('idBantu');
            res.body[0].should.have.property('nama');
            res.body[0].should.have.property('alamat');
            res.body[0].should.have.property('judul');
            res.body[0].should.have.property('deskripsi');
            res.body[0].should.have.property('status');
            res.body[0].should.have.property('nominalSet');
            res.body[0].should.have.property('nominalProcess');
            res.body[1].should.have.property('_id');
            res.body[1].should.have.property('idPanti');
            res.body[1].should.have.property('idBantu');
            res.body[1].should.have.property('nama');
            res.body[1].should.have.property('alamat');
            res.body[1].should.have.property('judul');
            res.body[1].should.have.property('deskripsi');
            res.body[1].should.have.property('status');
            res.body[1].should.have.property('nominalSet');
            res.body[1].should.have.property('nominalProcess');
            res.body[0].idPanti.should.equal('idPanti123456');
            res.body[0].nama.should.equal('Anggaran Panti');
            res.body[0].alamat.should.equal('UjungBerung Bandung');
            res.body[0].judul.should.equal('Satu Dua Tiga');
            res.body[0].deskripsi.should.equal('Satu Dua Tiga');
            res.body[0].status.should.equal('pending');
            res.body[0].nominalSet.should.equal(400000);
            res.body[0].nominalProcess.should.equal(0);
            res.body[1].idBantu.should.equal('idSesama123456');
            res.body[1].nama.should.equal('Anggaran Sesama');
            res.body[1].alamat.should.equal('UjungBerung Bandung');
            res.body[1].judul.should.equal('Satu Dua Tiga');
            res.body[1].deskripsi.should.equal('Satu Dua Tiga');
            res.body[1].status.should.equal('pending');
            res.body[1].nominalSet.should.equal(400000);
            res.body[1].nominalProcess.should.equal(0);
            done();
        })
    })

    it('seharusnya dapat mengganti status anggaran panti dari pending menjadi approved',function (done) {
        chai.request(server)
        .get('/api/danas/panti/idPanti123456')
        .end(function (err,res) {
            let idAnggaranPanti = res.body[0]._id;
            chai.request(server)
            .put('/api/danas/status/'+idAnggaranPanti+'/approved')
            .end(function (err,res) {
                res.should.have.status(201);
                res.should.be.json;
                res.body.should.have.property('status');
                res.body.should.have.property('data');
                res.body.status.should.equal('success');
                res.body.data.idPanti.should.equal('idPanti123456');
                res.body.data.nama.should.equal("Anggaran Panti");
                res.body.data.alamat.should.equal("UjungBerung Bandung");
                res.body.data.judul.should.equal("Satu Dua Tiga");
                res.body.data.deskripsi.should.equal("Satu Dua Tiga");
                res.body.data.status.should.equal("pending");
                res.body.data.nominalSet.should.equal(400000);
                res.body.data.nominalProcess.should.equal(0);
                done();
            })
        })
    })

    it('seharusnya dapat mengganti status anggaran sesama dari pending menjadi approved',function (done) {
        chai.request(server)
        .get('/api/danas/sesama/idSesama123456')
        .end(function (err,res) {
            let idAnggaranSesama = res.body[0]._id;
            chai.request(server)
            .put('/api/danas/status/'+idAnggaranSesama+'/approved')
            .end(function (err,res) {
                res.should.have.status(201);
                res.should.be.json;
                res.body.should.have.property('status');
                res.body.should.have.property('data');
                res.body.status.should.equal('success');
                res.body.data.idBantu.should.equal("idSesama123456");
                res.body.data.nama.should.equal("Anggaran Sesama");
                res.body.data.alamat.should.equal("UjungBerung Bandung");
                res.body.data.judul.should.equal("Satu Dua Tiga");
                res.body.data.deskripsi.should.equal("Satu Dua Tiga");
                res.body.data.status.should.equal("pending");
                res.body.data.nominalSet.should.equal(400000);
                res.body.data.nominalProcess.should.equal(0);
                done();
            })
        })
    })

    it('seharusnya dapat mengganti nominal set dari suatu anggaran panti',function (done) {
        chai.request(server)
        .get('/api/danas/panti/idPanti123456')
        .end(function (err,res) {
            let idAnggaranPanti = res.body[0]._id;
            chai.request(server)
            .put('/api/danas/setnominal/'+idAnggaranPanti+'/500000')
            .end(function (err,res) {
                res.should.have.status(201);
                res.should.be.json;
                res.body.should.have.property('status');
                res.body.should.have.property('data');
                res.body.status.should.equal('success');
                res.body.data.idPanti.should.equal('idPanti123456');
                res.body.data.nama.should.equal("Anggaran Panti");
                res.body.data.alamat.should.equal("UjungBerung Bandung");
                res.body.data.judul.should.equal("Satu Dua Tiga");
                res.body.data.deskripsi.should.equal("Satu Dua Tiga");
                res.body.data.status.should.equal("approved");
                res.body.data.nominalSet.should.equal(400000);
                res.body.data.nominalProcess.should.equal(0);
                done();
            })
        })
    })

    it('seharusnya dapat mengganti nominal set dari suatu anggaran sesama',function (done) {
        chai.request(server)
        .get('/api/danas/sesama/idSesama123456')
        .end(function (err,res) {
            let idAnggaranSesama = res.body[0]._id;
            chai.request(server)
            .put('/api/danas/setnominal/'+idAnggaranSesama+'/500000')
            .end(function (err,res) {
                res.should.have.status(201);
                res.should.be.json;
                res.body.should.have.property('status');
                res.body.should.have.property('data');
                res.body.status.should.equal('success');
                res.body.data.idBantu.should.equal("idSesama123456");
                res.body.data.nama.should.equal("Anggaran Sesama");
                res.body.data.alamat.should.equal("UjungBerung Bandung");
                res.body.data.judul.should.equal("Satu Dua Tiga");
                res.body.data.deskripsi.should.equal("Satu Dua Tiga");
                res.body.data.status.should.equal("approved");
                res.body.data.nominalSet.should.equal(400000);
                res.body.data.nominalProcess.should.equal(0);
                done();
            })
        })
    })

    it('seharusnya dapat menambah anggaran yang dikumpulkan dari suatu anggaran panti',function (done) {
        chai.request(server)
        .get('/api/danas/panti/idPanti123456')
        .end(function (err,res) {
            let idAnggaranPanti = res.body[0]._id;
            chai.request(server)
            .put('/api/danas/addnominal/'+idAnggaranPanti+'/100000')
            .end(function (err,res) {
                res.should.have.status(201);
                res.should.be.json;
                res.body.should.have.property('status');
                res.body.should.have.property('data');
                res.body.status.should.equal('success');
                res.body.data.idPanti.should.equal('idPanti123456');
                res.body.data.nama.should.equal("Anggaran Panti");
                res.body.data.alamat.should.equal("UjungBerung Bandung");
                res.body.data.judul.should.equal("Satu Dua Tiga");
                res.body.data.deskripsi.should.equal("Satu Dua Tiga");
                res.body.data.status.should.equal("approved");
                res.body.data.nominalSet.should.equal(500000);
                res.body.data.nominalProcess.should.equal(0);
                done();
            })
        })
    })

    it('seharusnya dapat menambah anggaran yang dikumpulkan dari suatu anggaran sesama',function (done) {
        chai.request(server)
        .get('/api/danas/sesama/idSesama123456')
        .end(function (err,res) {
            let idAnggaranSesama = res.body[0]._id;
            chai.request(server)
            .put('/api/danas/addnominal/'+idAnggaranSesama+'/100000')
            .end(function (err,res) {
                res.should.have.status(201);
                res.should.be.json;
                res.body.should.have.property('status');
                res.body.should.have.property('data');
                res.body.status.should.equal('success');
                res.body.data.idBantu.should.equal("idSesama123456");
                res.body.data.nama.should.equal("Anggaran Sesama");
                res.body.data.alamat.should.equal("UjungBerung Bandung");
                res.body.data.judul.should.equal("Satu Dua Tiga");
                res.body.data.deskripsi.should.equal("Satu Dua Tiga");
                res.body.data.status.should.equal("approved");
                res.body.data.nominalSet.should.equal(500000);
                res.body.data.nominalProcess.should.equal(0);
                done();
            })
        })
    })

    it('seharusnya dapat menghapus anggaran panti berdasarkan id panti',function (done) {
        chai.request(server)
        .delete('/api/danas/panti/idPanti123456')
        .end(function (err,res) {
            res.should.have.status(201);
            res.should.be.json;
            res.body.should.have.property('status');
            res.body.status.should.equal('success');
            done();
        })
    })

    it('seharusnya dapat menghapus anggaran sesama berdasarkan id sesama',function (done) {
        chai.request(server)
        .delete('/api/danas/sesama/idSesama123456')
        .end(function (err,res) {
            res.should.have.status(201);
            res.should.be.json;
            res.body.should.have.property('status');
            res.body.status.should.equal('success');
            done();
        })
    })

})
