const Teams = require('./models/Teams')
const FiveThreeTournament = require('./models/538Tournament')
const PopPicksTournament = require('./models/Pop-Picks')
const ncaam2019 = require('../node_modules/bracket-data/data/ncaam/2019')
const tourney2019 = require('./5382019')
const popPicks2019 = require('./PopPicks2019')

// clear the database of records using all models

Teams.deleteMany({}).then(() => {
    //console.log('deleted all teams')
})

FiveThreeTournament.deleteMany({}).then(() => {
    //console.log('deleted all 538') 
})

PopPicksTournament.deleteMany({}).then(() => {
    //console.log('deleted all popPicks') 
})

//create databases

    Teams.create(ncaam2019).then((createTeams) => {
        console.log(createTeams)
    })

    FiveThreeTournament.create(tourney2019).then((createTournament) => {
        console.log(createTournament)
    })

    PopPicksTournament.create(popPicks2019).then((createPop) => {
        console.log(createPop)
    })
