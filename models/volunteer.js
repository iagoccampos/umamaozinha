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

module.exports = mongoose.model("Volunteer", VolunteerSchema);
