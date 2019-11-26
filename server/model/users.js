var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    nama: String,
    alamat: String
})

module.exports = mongoose.model('userSchema',userSchema);
