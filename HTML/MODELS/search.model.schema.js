const mongoose = require('mongoose');

let trainSearchSchema = new mongoose.Schema({
    source: {
        type: String,
        require: true
    },

    destination: {
        type: String,
        require: true
    },

    train_name: {
        type: String,
        require: true
    },

    train_number: {
        type: Number,
        require: true
    },

    start_date: {
        type: String,
        require: true
    },

    start_time: {
        type: String,
        require: true
    },

    reach_date: {
        type: String,
        require: true
    },

    reach_time: {
        type: String,
        require: true
    },

    start_station: {
        type: String,
        require: true
    },

    reach_station: {
        type: String,
        require: true
    },
});


let trainSearchModel = mongoose.model("trains",trainSearchSchema);

module.exports = mongoose.model("trains",trainSearchModel);