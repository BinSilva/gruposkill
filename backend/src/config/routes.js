const express = require('express')

module.exports = function(server) {

    const router = express.Router()
    server.use('/api', router)

    const albumService = require('../api/album/albumService')
    albumService.register(router, '/albuns')
}