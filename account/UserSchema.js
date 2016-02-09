
var mongoose = require('mongoose');

var sharedSchema = require('../sharedSchemas.js');


var userSchema = new mongoose.Schema({
    meta: sharedSchema.metaSchema,
    firstName: {type:String, required:"{PATH} is required!"},
    lastName: {type:String, required:"{PATH} is required!"},
    username: sharedSchema.uniqueEmail.email,
    // {
    //     type: String,
    //     required: "{PATH} is required.",
    //     unique: true
    // },
    company: {type:mongoose.Schema.Types.ObjectId, ref:'Company'},
    //adding security fields here
    salt: {type:String, required:"{PATH} is required!"},
    hashed_pwd: {type:String, required:"{PATH} is required!"},
    roles: [{type:String, enum: ['superUser', 'admin', 'gold', 'silver', 'bronze']}]

});




module.exports = userSchema;





