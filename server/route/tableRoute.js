const express =  require ('express');
const router = express.Router();
const {getTableController, createTableController
} = require('../controller/tablecontroller');

router.post('/post',createTableController);
router.get('/',getTableController);
module.exports = router;