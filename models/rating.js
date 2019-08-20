var mongoose = require("mongoose");

var RatingSchema = mongoose.Schema({
    value: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    entity: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Entity",
        required: true
    }
});

module.exports = mongoose.model("Entity", RatingSchema);
