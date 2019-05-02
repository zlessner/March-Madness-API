const mongoose = require('../connection')

const Schema= mongoose.Schema

const FiveThreeEightSchema = new mongoose.Schema({
    2019: [ 
      {
        Team: 
        String
        // {type: Schema.Types.ObjectId,
        // ref: "teams"  }
        ,
        Seed: String,
        Region: String,
        Round1: Number,
        Round2: Number,
        Round3: Number,
        Round4: Number,
        Round5: Number,
        Round6: Number
    }]

})

let tournament = mongoose.model("tournament", FiveThreeEightSchema)

module.exports = tournament

// type: Schema.Types.ObjectId,
// ref: 'Cookbook'

//API items coming back in differnet order
//making reference work
//seeing if deploying heroku/github work
//adding frontend 