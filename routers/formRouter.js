const router=require('express').Router();
const formController=require('../controllers/formController');

router.post('/save',formController.saveFormData)
router.get('/all',formController.getAllFormData);

module.exports=router

