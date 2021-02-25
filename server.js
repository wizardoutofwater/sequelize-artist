const express = require("express");
const morgan = require("morgan");
const app = express();
const db = require('./models');
const crypto = require('crypto');
const pbkdf2 = require('pbkdf2');
const session = require('express-session')

app.use(session({
  secret: 'tacocat',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 60 * 60 * 1000 } 
}))

// -------import routers-----------
const indexRouter = require('./routes/index');
const artistRouter = require('./routes/artist');
const albumRouter = require('./routes/album');
const songRouter = require('./routes/song');
const usersRouter = require('./routes/users');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan("tiny"));


// ---------password encryption-------
// function encryptPassword(password, pass_salt) {
//   var salt = pass_salt ? pass_salt : crypto.randomBytes(20).toString('hex');
//   var key = pbkdf2.pbkdf2Sync(
//     password, salt, 36000, 256, 'sha256'
//   );

//   var hash = key.toString('hex');

//   return `$${salt}$${hash}`;
// }

// ------------api routes------------
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/artist', artistRouter);
app.use('/album', albumRouter);
app.use('/artist', songRouter);

// app.get("/artist", function (req, response) {
//   // add code to get all artists
// });

// app.get("/artist/:id", function (req, response) {
//   // add code to get specific artist
// });

// app.put("/artist/:id", function (req, response) {
//   // add code to modify an specific artist
// });

// app.post("/artist", function (req, response) {
//   console.log('creating artist');
//   // add code to create artist
// });

// Add code to get all albums. GET /album

// Add code to get a specific albums. GET /album/:id

// Add code to create an album. POST /album

// Add Code to get all songs from an album. GET /album/song

// Add code to create a song for an album. POST /album/song


//--------- MORE ROUTES + QUERY IDEAS --------

// Get all Albums by a specific Artist by ID

// Get all Albums by a specific Artist by Name

// Get All songs by Specific Artist, sorted by album

// get all albums released in a specific year GET /albums/YEAR=:year <-- is this how you would do that? how best to implement?

// get all songs released in a specific year (through the album release year)

// Update Album Info PUT (/album/:id)

// Update Song Info PUT (/song/:id)

// -------------**************----------------


// ------------ ERROR HANDLER MIDDLEWARE----------
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  console.log(error.stack);
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || "Internal Server Error",
    },
  });
});


app.listen(3000, function(){
  console.log('server listening on port 3000');
})