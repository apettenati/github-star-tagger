// web server with express
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

// create app
const app = express()
const PORT = process.env.PORT

// Middleware
app.use(cors())
// increase json size limit due to being over default max
app.use(express.json({ limit: '50mb' }))

// MongoDB connection
const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })
const connection = mongoose.connection
connection.once('open', () => {
  console.log('MongoDB database connection established successfully')
})

// route locations
const userRoute = require('./routes/user')
app.use('/github-star-tagger/user', userRoute)

// check if there's an environment variable
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))