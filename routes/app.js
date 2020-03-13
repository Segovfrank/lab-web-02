let router = require('express').Router();
let dashboardController = require('../controllers/DashboardController');
let userController = require('../controllers/UserController');

router.get('/dashboard', dashboardController.index);
router.get('/users', userController.index);

module.exports = router;
