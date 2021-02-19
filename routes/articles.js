const express = require('express');
const router = express.Router();
const Articles = require('../models/articles');

router.get('/', (req, res) => {
    Articles.find()
        .then(article => res.json(article))
        .catch(err => res.status(400).res.json(`error: $(err)`))
});

module.exports = router;
