const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController')

router.get('/list', userController.list);
router.get('/print', userController.print);


module.exports = router;