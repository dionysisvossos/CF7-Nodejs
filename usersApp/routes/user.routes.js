const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller.js');

router.get('/', userController.findAll);
router.get('/:username', userController.findOne);
router.post('/', userController.create);
router.patch('/:username', userController.update);
router.delete('/:username', userController.deleteByUsename);
router.delete('/"username/email/:email', userController.deleteByEmail);

module.exports = router;