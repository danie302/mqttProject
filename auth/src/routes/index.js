// Dependencies
const express = require("express");

const router = express.Router();

// Model
const model = require("../model/index");

const doLogin = require("../utils/auth");

// Routes
router.post("/register", (req, res) => {
    const { username, email, password } = req.body;
    let errors = {};
    model.User.findOrCreate({
        where: { username },
        defaults: { email, password }
    }).then(([user, created]) => {
        if (created) {
            return res.sendStatus(200);
        } else {
            errors.user = "User already exist";
            return res.status(400).json(errors);
        }
    });
});

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    let errors = {};
    doLogin(email, password, model)
        .then(token => {
            return res.json({
                success: true,
                token: token
            });
        })
        .catch(err => {
            errors.user = "Invalid login";
            return res.status(400).json(errors);
        });
});

module.exports = router;
