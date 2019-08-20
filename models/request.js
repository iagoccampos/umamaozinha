var mongoose = require("mongoose");

var RequestSchema = mongoose.Schema({
    amount: {
        type: Number
    },
    area: {
        type: String,
        required: true
    },
    note: {
        type: String,
        requi: true
    },
    entity: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Entity",
        required: true
    },
    volunteer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Volunteer",
        required: true
    }
});

module.exports = mongoose.model("Request", RequestSchema);
