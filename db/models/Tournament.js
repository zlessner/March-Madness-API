const mongoose = require('../connection')

const TournamentSchema = new mongoose.Schema({
    regions: [ 
     
        {_id:String,
        name: String,
        fullname: String
    }]
    ,
    teams: {
        "regions.id": [String]
    ,

    finalRegion: {
        _id: String,
        name: String,
        championshipName: String}
    ,
    order: [{seed:Number
    }]
}})

let tournament = mongoose.model("tournament", TournamentSchema)

module.exports = tournament
