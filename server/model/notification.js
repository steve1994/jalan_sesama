var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var notificationSchema = new Schema({
    created_at : Date,
    notification_name : String,
    type : String,
    origin_id : String
})

module.exports = mongoose.model('notificationSchema',notificationSchema);
