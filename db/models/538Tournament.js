const mongoose = require('../connection')

const TournamentSchema = new mongoose.Schema({
    2019: [ 
      {
        Team: String,
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

let tournament = mongoose.model("tournament", TournamentSchema)

module.exports = tournament

