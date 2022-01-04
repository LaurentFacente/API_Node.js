
const express = require('express');

const router = express.Router();

const auth = require('../middleware/auth');
const authowner = require('../middleware/auth-owner');
const multer = require('../middleware/multer-config');
const sauceCtrl = require('../controllers/sauces');





 router.post('/',auth,multer,sauceCtrl.createSauce)

 router.post('/:id/like',auth,multer,sauceCtrl.likeSauce)
 
  router.get('/:id',auth,sauceCtrl.getOneSauce)

  router.put('/:id',auth,authowner,multer,sauceCtrl.modifySauce)

  router.delete('/:id',auth,authowner, sauceCtrl.deleteSauce)
  
  router.get('/',auth,sauceCtrl.getAllSauce)

module.exports = router;