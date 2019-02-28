const Album = require('./album')

Album.methods(['get', 'post', 'put', 'delete'])
Album.updateOptions({new: true, runValidators: true})

module.exports = Album