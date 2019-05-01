const mongoose = require('../connection')

const TeamsSchema = new mongoose.Schema({
    regions: [ 
     
        {id:String,
        name: String,
        fullname: String
    }]
    ,
    teams: [
        {
       id: []
    }
] 
    ,

    // order: [{seed:Number
    // }],
    
    locks: Date,
    complete: Date
})

let teams = mongoose.model("teams", TeamsSchema)

module.exports = teams





// finalRegion: {
//     id: String,
//     name: String,
//     championshipName: String}
// ,