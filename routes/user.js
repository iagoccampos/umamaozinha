var express = require("express");
var router = express.Router();
var passport = require("passport");

var User = require("../models/user");

router.post("/cadastrar", function(req, res) {
    User.createrUser(req.body.user, function(err, user){
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
