const router = require("express").Router();

// Get Current User
router.get("/", (req, res) => res.send(req.session.user));

// Log In
app.post("/login", (req, res) => {
  if (req.body.username && req.body.password) {
    db.user
      .findOne({
        where: {
          username: req.body.username,
        },
      })
      .then((user) => {
        if (user) {
          var pass_parts = user.password.split("$");

          // encrypt req.body.password using pass_parts[1]
          let encryptedPass = encryptPassword(req.body.password, pass_parts[1]);

          // compared hashed password with user password
          if (encryptedPass == user.password) {
            req.session.user = user;
            res.send("welcome user: " + user.username);
          } else {
            res.send("wrong password");
          }
        } else {
          res.send("we could not find any users");
        }
      })
      .catch(() => {
        res.send("There was an error");
      });
  } else {
    res.send("please send a username and password");
  }
});

// Log Out
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.send("successfult logout");
});

//  Sign Up
app.post("/sign-up", (req, res) => {
  if (req.body.username && req.body.password) {
    db.user
      .create({
        username: req.body.username,
        password: encryptPassword(req.body.password),
      })
      .then((user) => {
        res.send(user);
      });
  } else {
    res.send(" please send username and password.");
  }
});

// Respond to a DELETE request to the /api/users route:
router.delete("/", (req, res) =>
  res.send("Got a DELETE request at /api/users")
);

module.exports = router;
