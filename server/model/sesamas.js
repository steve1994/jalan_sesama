var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sesamaSchema = new Schema({
    idUser: String,
    nama: String,
    alamat: String,
    judul: String,
    deskripsi: String,
    foto: String,
    location: String,
    status: String
})

module.exports = mongoose.model('sesamaSchema',sesamaSchema);
