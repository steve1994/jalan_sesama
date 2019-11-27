var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var danaSchema = new Schema({
    idPanti: String,
    idBantu: String,
    nama: String,
    alamat: String,
    judul: String,
    deskripsi: String,
    foto: String,
    status: String,
    nominalSet: Number,
    nominalProcess: Number
})

module.exports = mongoose.model('danaSchema',danaSchema);
