var mongoose = require("mongoose");

var EntitySchema = mongoose.Schema({
    name_company: {
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

module.exports = mongoose.model("Entity", EntitySchema);
