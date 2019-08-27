var mongoose = require("mongoose");

var EntitySchema = mongoose.Schema({
    company_name: {
        type: String,
        required: true
    },
    cpf_cnpj: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

EntitySchema.statics.createEntity = function(user, cb){
    let obj = {};
    obj.company_name = user.company_name;
    obj.cpf_cnpj = user.cpf_cnpj;
    obj.phone = user.phone;
    obj.user = user._id;
    
    module.create(obj, cb);
};

var module = mongoose.model("Entity", EntitySchema);

module.exports = module;
