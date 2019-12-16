var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    nama: String,
    alamat: String,
    username: String,
    password: String,
    foto: String,
    isAdmin: Boolean
})

module.exports = mongoose.model('userSchema',userSchema);
