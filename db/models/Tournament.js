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


// {"2019":
//    [
//     {"Team":"Duke" ,"Seed":	1	 ,"Region":"East" ,"Round1":	0.991789442	 ,"Round2":	0.908115588	 ,"Round3":	0.717264438	 ,"Round4":	0.524229344	 ,"Round5":	0.321658475	 ,"Round6":	0.193334432	},

let tournament = mongoose.model("tournament", TournamentSchema)

module.exports = tournament
