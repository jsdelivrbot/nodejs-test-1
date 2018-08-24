var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/fccapi/timestamp', function (req, res, next) {
    res.render('fccapi/timestamp');
});

router.get("/api/timestamp/:date_string", (req, res) => {
    let date = new Date(req.params.date_string.toString());
    res.json({
        unix: date.getTime(),
        utc: date.toUTCString()
    })
})

module.exports = router;
