var express = require('express');
var router = express.Router();

var Controller = require("../controllers/index.controller")

router.get('/', Controller);

module.exports = router;