var express = require('express');
var router = express.Router();

// var auth = require("../controllers/auth.controller/auth.controller")

var roleController = require('../controllers/user.controllers/role.controller')

// router.post('/read', auth.verifyToken, roleController.read);

router.post('/read', roleController.read);

module.exports = router;