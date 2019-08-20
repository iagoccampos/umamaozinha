var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = mongoose.Schema({
    username: {
        type: String,
        minlength: [4, "Conta deve conter no mínimo 4 caracteres."],
        maxlength: [20, "Conta deve conter no máximo 20 caracteres."]
    },
    password: String,
    name: {
        type: String,
        required: true,
        maxlength: [20, "Nome deve conter no máximo 20 caracteres."]
    },
    token: {
        type: String
    },
    email: {
        type: String,
        required: true
    }
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
