var express = require('express');
const router = express.Route();
module.exports = function(){

    const userroutes = require('../controllers/users.controller.js')

router.post('/authenticate', userroutes.authenticate);
router.post('/register', userroutes.register);
router.get('/', userroutes.getAll);
router.get('/current', userroutes.getCurrent);
}