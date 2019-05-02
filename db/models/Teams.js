const mongoose = require('../connection')

const Schema = mongoose.Schema

const Teams = new Schema({
    regions: [
        {
            region: String,
            Team: Array
        }]
    ,
    locks: Date,
    complete: Date,
    scoring: {
        standard: Array
    },
    order: Array,


})

let teams = mongoose.model("teams", Teams)

module.exports = teams

//objects coming back in weird order because objects have no orders, just arrays