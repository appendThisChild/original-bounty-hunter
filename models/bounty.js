const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    living: {
        type: Boolean,
        default: true
    },
    bountyAmount: {
        type: Number,
        default: Math.floor(Math.random() * (100 - 50)) + 50
    },
    side: {
        type: String,
        enum: ["Sith", "Jedi"],
        default: "Jedi"
    }
})

module.exports = mongoose.model("Bounty", bountySchema)