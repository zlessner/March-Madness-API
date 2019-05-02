const mongoose = require('../connection')

const Schema = mongoose.Schema

const Teams = new Schema({
    regions: [
        {
            region: String,
            Team: []
        }]
    ,
    locks: Date,
    complete: Date
})

let teams = mongoose.model("teams", Teams)

module.exports = teams


//need to create relationship between model 


// finalRegion: {
//     id: String,
//     name: String,
//     championshipName: String}
// ,
