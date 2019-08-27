var mongoose = require("mongoose");

var VolunteerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    areas: [{
        type: String
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

VolunteerSchema.statics.createVolunteer = function(user, cb){
    let obj = {};
    obj.name = user.name;
    obj.cpf = user.cpf;
    obj.phone = user.phone;
    obj.areas = user.areas;
    obj.user = user._id;
    
    module.create(obj, cb);
};

var module = mongoose.model("Volunteer", VolunteerSchema);

module.exports = module;
