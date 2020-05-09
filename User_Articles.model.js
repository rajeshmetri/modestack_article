const mongoose = require('mongoose');
var dateFormat = require('dateformat');
var now = new Date();

const fileSchema = mongoose.Schema({
    uploadDate:          { type: String, default: dateFormat(now, "isoDate")},
    articleId:           { type: Number, required: true },
    articleName:         { type: String, required: true },
    articleFileName:     { type: String, required: true },
    articleSize:         { type: Number, required: true },
});

module.exports = mongoose.model('User_Articles',fileSchema);


