const Schema = require('mongoose').Schema;
const { create } = require('handlebars');
const mongoose = require('mongoose');

const Couser = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Couser);
