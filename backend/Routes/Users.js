const router = require('express').Router();
const {Login}=require('../controllers/userControllers')
router.post('/login', Login)

module.exports = router;


