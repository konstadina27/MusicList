const express = require('express');

const router = express.Router(); // handles http trafic

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'MusicList Alpha' });
});

module.exports = router;

