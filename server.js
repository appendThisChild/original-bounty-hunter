const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const path = require('path')
const PORT = process.env.PORT || 6250

app.use(express.json())
app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, "client", "build")))

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/first-db', {useNewUrlParser: true}, () => {
    console.log('[o] Connected to the DB')
})

app.use('/bounty', require('./routes/bountyRoute.js'))

app.use((err, req, res, next) => {
    console.error(err)
    return res.send({errMsg: err.message})
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

app.listen(PORT, () => {
    console.log(`[+] Server is running on Port ${PORT}`)
})