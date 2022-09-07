const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router
  .route('/')
  .post(userController.createUser)
  .get(auth('GET_USERS'), validate(userValidation.getUsers), userController.getUsers);

router
  .route('/:userId')
  .get(auth('GET_USERS'), validate(userValidation.getUser), userController.getUser)
  .patch(auth('MANAGE_USERS'), validate(userValidation.updateUser), userController.updateUser)
  .delete(auth('MANAGE_USERS'), validate(userValidation.deleteUser), userController.deleteUser);

module.exports = router;

