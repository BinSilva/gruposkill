const mongoose  = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1/album');

const request = require('request');
request('https://jsonplaceholder.typicode.com/albums', function (error, response, body) {
  console.log('error:', error)
  console.log('statusCode:', response && response.statusCode)
  //console.log('body:', body);
    var schema = new mongoose.Schema({
        userId : mongoose.Schema.Types.Number,
        title : mongoose.Schema.Types.String
    });

    var Album = mongoose.model('Albums', schema);
    Album.deleteMany({}).then((docs) => { 
        console.log(docs.length);
    }).catch((err) => {
        console.log(err);
    });

    Album.insertMany(JSON.parse(body)).then((docs) => { 
        console.log(docs.length);
    }).catch((err) => {
        console.log(err);
    });
});


