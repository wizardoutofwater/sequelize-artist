const db = require('./models');

db.artist.findAll({ include: [db.album]}).then((artists) => {
  artists.forEach((artist) => {
    console.log(artist.toJSON());
  });
})