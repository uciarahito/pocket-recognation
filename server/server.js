const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const index = require('./routes/index');

app.use(cors())
mongoose.connect('mongodb://localhost/pocket-dictionary');

// NOTE: set
app.set('port', process.env.PORT || 3000)

app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use('/', index);

// NOTE: run
app.listen(app.get('port'), () => {
    console.log('Listening on port ' + app.get('port'));
})