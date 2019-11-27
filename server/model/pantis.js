var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pantiSchema = new Schema({
    idUser: String,
    nama: String,
    alamat: String,
    judul: String,
    deskripsi: String,
    jumlahOrang: Number,
    foto: String,
    location: String,
    status: String
})

module.exports = mongoose.model('pantiSchema',pantiSchema);
