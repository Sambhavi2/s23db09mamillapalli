var express = require('express');
const icecream_controlers= require('../controllers/icecream');
var router = express.Router();

router.get('/', icecream_controlers.icecream_view_all_Page);
// GET request for one icecream.
router.get('/icecream/:id', icecream_controlers.icecream_detail);
/* GET detail icecream page */
router.get('/detail', icecream_controlers.icecream_view_one_Page);
/* GET create icecream page */
router.get('/create', icecream_controlers.icecream_create_Page);

module.exports = router;