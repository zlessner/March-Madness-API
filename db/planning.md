My app is a creation of APIs that form the backbone of an ideal March Madness bracket. I will create my own models based on the odds of each team advancing each particular round from odds provided by FiveThirtyEight and Yahoo. In the future, I will create a front end that pulls from these APIs in order simulate the most efficently picked bracket given the odds. 




Model 1:

const FiveThreeEightSchema = new mongoose.Schema({
  Year: Number,
  Bracket: [ 
    {Region: String, Schools: [ 
      {
        Team: {type: Schema.Types.String, ref: "teams" },
        Seed: String,
        Round1: Number,
        Round2: Number,
        Round3: Number,
        Round4: Number,
        Round5: Number,
        Round6: Number
    }
  ]}



Model 2:
const popPicksSchema = new mongoose.Schema({
  Year: Number,
  Bracket: [ 
    {Region: String, Schools: [ 
      {
        Team: {type: Schema.Types.String, ref: "teams" },
        Seed: String,
        Round1: Number,
        Round2: Number,
        Round3: Number,
        Round4: Number,
        Round5: Number,
        Round6: Number
    }
  ]}
      

    ]

  }

)


Model 3:

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

