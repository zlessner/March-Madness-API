const mongoose = require('../connection')

const Schema = mongoose.Schema

const Teams= new Schema ({
    regions: [ 
     
        {id:String,
        name: String,
        fullname: String
    }]
    ,
    teams: [
        {
       id: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Tournament'
        }
       ]
    }
] 
    ,

    // order: [{seed:Number
    // }],
    
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
