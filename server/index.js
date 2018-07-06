const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive')
require('dotenv').config();

const controller = require('./controller');


var app = express();
app.use(bodyParser.json());
// app.use( express.static( `${__dirname}./../build`) );

let {
    SERVER_PORT,
    CONNECTION_STRING,
    SESSION_SECRET
  } = process.env;

app.use(
session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
})
);

massive( CONNECTION_STRING )
    .then( db => {
    app.set('db', db)
    console.log('DB Connected')
}).catch( () => console.log('error') );



app.post( '/api/auth/register', controller.register );
app.post( '/api/auth/login', controller.login );
app.get( '/api/posts', controller.readPosts );


const port = SERVER_PORT || 4000;

app.listen( port, () => {console.log(`Server listening on ${port}.`);});