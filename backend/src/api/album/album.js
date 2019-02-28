const restful = require('node-restful')
const mongoose = restful.mongoose

const albumSchema = new mongoose.Schema({
    userId: { type: Number, required: true },
    title: { type: String, required: true }
})

module.exports = restful.model('Album', albumSchema)