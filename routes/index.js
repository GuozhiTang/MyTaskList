var express = require('express');
// we want to use express router
var router = express.Router();

// set up our router to the home page
router.get('/', function(req, res, next) {
    res.render('index.html');
})

// export this then we can access this from other files
module.exports = router;