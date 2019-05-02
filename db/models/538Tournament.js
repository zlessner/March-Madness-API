const mongoose = require('../connection')

const Schema= mongoose.Schema

const FiveThreeEightSchema = new mongoose.Schema({
  Year: Number, Bracket: [  
      {
        Team: {type: Schema.Types.String, ref: "teams" },
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
