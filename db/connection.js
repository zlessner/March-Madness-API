const mongoose = require('mongoose')

if (process.env.NODE_ENV == "production") {
	mongoose.connect(process.env.DB_URL)
  } else {
	mongoose.connect("mongodb://localhost/Project2")
  }

mongoose.Promise = Promise

mongoose.connect('mongodb://localhost/Project2', { useNewUrlParser: true })
.then((conn) => {
	console.log(`connected to mongodb on ${conn.connections[0].name} db`)
})
.catch(err => {
	console.error(err)
})


module.exports = mongoose