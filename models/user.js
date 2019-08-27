var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var Volunteer = require("./volunteer");

var UserSchema = mongoose.Schema({
    username: {
        type: String,
        minlength: [4, "Conta deve conter no mínimo 4 caracteres."],
        maxlength: [20, "Conta deve conter no máximo 20 caracteres."]
    },
    password: String,
    token: {
        type: String
    },
    email: {
        type: String,
        required: true
    }
});

UserSchema.statics.createrUser = function(user, cb){
    module.register(new module({
        username: user.username,
        name: user.name,
        email: user.email
    }), user.password, function(err, createdUser){
        if(err)
            return cb(err);
        
        if(user.type == "volunteer")
            Volunteer.createVolunteer(createdUser, cb);
    });
};

UserSchema.plugin(passportLocalMongoose);

var module = mongoose.model("User", UserSchema);

module.exports = module;
