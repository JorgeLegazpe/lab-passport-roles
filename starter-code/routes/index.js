const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// Role Check functions

function checkRoles(role) {
  return function(req, res, next) {
    if (req.isAuthenticated() && req.user.role === role) {
      return next();
    } else {
      res.redirect("/login");
    }
  };
}

const checkBoss = checkRoles("BOSS");

router.get("/add-users", checkRoles, (req, res) => {
  res.render("add-users", { user: req.user });
});

module.exports = router;
