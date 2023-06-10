const router=require('express').Router();
const primeController=require('../controllers/primeController');

router.get('/getprimes',primeController.getPrimeNumbers);

module.exports=router

