var express = require("express"),
    mongoose = require("mongoose"),
    bodyparser = require("body-parser"),
    methodeOverride = require("method-override"),
    flash = require("connect-flash"),
    app = express(),
    passport = require("passport"),
    LocalStrategy = require("passport-local");

var User = require("./models/user");

mongoose.connect(process.env.DATABASEURL, { useNewUrlParser: true });

app.use(express.static(__dirname + "/public"));
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(methodeOverride("_method"));
app.use(flash());

//PASSPORT CONFIG
app.use(require("express-session")({
    secret: "umamaozinha",
    resave: false,
    saveUninitialized: false,
    cookie: { _expires: 5000000 }
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.enable('trust proxy');
app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");

    if (req.secure)
        next();
    else
        res.redirect('https://' + req.headers.host + req.url);
});

var port = process.env.PORT || 8080;

app.get("/", function(req, res) {
    res.send("Olar!");
});

app.listen(port, process.env.IP, function() {
    console.log("Server started.");
});
