var express = require("express");
var router = express.Router();
var passport = require("passport");

var User = require("../models/user");

router.get("/", function(req, res) {
    res.send('oi');
});

router.post("/cadastrar", function(req, res) {
    let user = req.body.user;

    User.register(new User({
        username: user.username,
        name: user.name,
        email: user.email
    }), user.password, function(err, user) {
        if (err) {
            res.send(err);
        }
        else {
            res.send('conta criada');
        }
    });
});

router.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login", //A definir
    failureFlash: "Conta ou senha inválida."
}), function(req, res) {});

router.get("/logout", function(req, res) {
    req.logout();
    req.flash("success", "Saiu da conta com sucesso.");
    res.redirect("/login");
});

module.exports = router;
