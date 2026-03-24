const router = require('express').Router();
const {register, login , getUserData} = require ('../controllers/UserController');
const auth = require('../middleware/auth');


router.post('/register' , register)
router.post('/login', login)
router.get("/me", auth, getUserData);
module.exports = router