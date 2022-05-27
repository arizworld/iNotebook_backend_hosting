const express = require('express')
const createUser = require('../controllers/createUser');
const login = require('../controllers/login');
const loggedin = require('../controllers/loggedin');
const getUser = require('../middleware/getUser');
const showUser = require('../controllers/showUser')
const {validateSignup,validateLogin} = require('../validateUser');
const router = express.Router();


// Creating a user ; "/api/authentication/createuser" : No login required
router.post('/createuser',validateSignup,createUser)
// Logging in a user ; "/api/authentication/login" 
router.post('/login',validateLogin,login)
// Getting user data after login : Login required
router.post('/getuser',getUser,loggedin)
// Getting user information : login required
router.post('/showUser',getUser,showUser)

module.exports = router;