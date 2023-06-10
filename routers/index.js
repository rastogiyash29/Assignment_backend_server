const router=require('express').Router();
const formRouter=require('./formRouter');
const primeRouter=require('./primeRouter')

router.use('/form',formRouter);
router.use('/prime',primeRouter);

module.exports=router