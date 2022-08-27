const express =  require ('express');
const router = express.Router();
const {getLoginController,createLoginController}
= require('../controller/logincontroller');

router.post('/posted',createLoginController);
router.get('/',getLoginController);
module.exports = router;