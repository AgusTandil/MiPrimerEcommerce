var createError = require("http-errors");
var express = require("express");
var path = require("path");
var logger = require("morgan");
const db = require("./db/db");

//Requires de passport
const sessions = require(`express-session`);
const passport = require(`passport`);
const cookieParser = require("cookie-parser");
const LocalStrategy = require(`passport-local`).Strategy;

// Express Route File Requires
const routes = require("./routes/index");
const { User_Profile } = require("./models");

const app = express();

//Seteo de vista de errores
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
var path = require("path");
app.use(express.static(path.join(__dirname, "public")));

//Session Secret
app.use(
  sessions({
    secret: "manfia",
    resave: true,
    saveUninitialized: true,
  })
);
//App use initializate
app.use(passport.initialize());
app.use(passport.session());

//APP ROUTES
app.use("/api", routes);
app.use("/api", (req, res) => {
  res.sendStatus(404);
});

//Passport Configuration
passport.use(
  new LocalStrategy({ usernameField: `email` }, function (
    email,
    password,
    done
  ) {
    User_Profile.findOne({ where: { email } })
      .then((user) => {
        if (!user) return done(`Incorrect Credentials`, false); //Otra forma es done(null,false, {message: `Incorrect Credentials`}) PD: recibe un campo de mensaje
        user.validPassword(password, user.salt).then((valid) => {
          valid ? done(null, user) : done(`Incorrect Credentials`, false);
        });
      })
      .catch(done);
  })
);

// How we save the user
passport.serializeUser(function (user, done) {
  done(null, user.id);
});
// How we look for the user
passport.deserializeUser(function (id, done) {
  User_Profile.findByPk(id).then((user) => done(null, user));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

db.sync({ force: false })
  .then(() => {
    app.listen(3001, () =>
      console.log("Servidor escuchando en el puerto 3001")
    );
  })
  .catch((err) => console.log(err));

module.exports = app;
