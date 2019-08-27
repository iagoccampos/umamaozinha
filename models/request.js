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
        required: true
    },
    entity: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Entity",
        required: true
    },
    volunteer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Volunteer"
    }
});

RequestSchema.statics.createRequest = function(request, entity, cb){
    request.entity = entity._id;
    //parei aqui
};

var module = mongoose.model("Request", RequestSchema);

module.exports = module;
