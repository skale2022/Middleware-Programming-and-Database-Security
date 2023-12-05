const express = require('express');
const router = express.Router();

const authController = require('./../controllers/authController');
router.get('/signup', authController.signup);
router.get('/login', authController.login);
router.get('/logout', authController.logout );
router.get('/confirmLogout', authController.confirmLogout);
router.get('/about', authController.about);

router.post('/signup', authController.signup);
router.post('/login', authController.login);

module.exports = router;
