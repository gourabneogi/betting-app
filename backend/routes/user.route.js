var express = require('express');
var router = express.Router();

// var auth = require("../controllers/auth.controller/auth.controller")

var userController = require('../controllers/user.controllers/user.controller')
var commissionController = require('../controllers/user.controllers/commission.controller')
var paymentController = require('../controllers/user.controllers/payment.controller')
var blockLoggingController = require('../controllers/user.controllers/blockLogging.controller')

// router.post('/create', auth.verifyToken, userController.create);
// router.post('/update', auth.verifyToken, userController.update);
// router.post('/read', auth.verifyToken, userController.read);
// router.post('/delete', auth.verifyToken, userController.delete);

router.post('/create', userController.createUser, userController.viewAllUser);
router.post('/update', userController.update, userController.viewAllUser);
router.post('/read', userController.viewAllUser);
router.post('/delete', userController.delete, userController.viewAllUser);

router.post('/commission/update', commissionController.update, commissionController.read);
router.post('/commission/read', commissionController.read);

router.post('/payment/update', paymentController.update, paymentController.read);
router.post('/payment/read', paymentController.read);

router.post('/log/block/create', blockLoggingController.create, blockLoggingController.read);
router.post('/log/block/update', blockLoggingController.update, blockLoggingController.read);
router.post('/log/block/read', blockLoggingController.read);

module.exports = router;