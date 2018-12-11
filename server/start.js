import mongoose from 'mongoose';

//import environment variables
require('dotenv').config({
    path: 'variables.env'
});

mongoose.connect(process.env.MONGODB_URL_LOCAL);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', err => {
 console.error(`Oops! Looks like an error occured ${err.message}`);
});

//import models
require('./models/post');
require('./models/author');


//start our main app
const app = require('./index');
app.set('port', process.env.PORT || 5000);
const server = app.listen(app.get('port'), () => {
    console.log(`App is running with 🔥 on port ${server.address().port}`);
});