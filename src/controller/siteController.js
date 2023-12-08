const shoeModel = require('../models/shoeModel');
const path = require('path');
const fs = require('fs')

// load shoes data
let shoesData
fs.readFile('./src/public/data/shoes.json', 'utf-8', function (err, data) {
    if (err) throw err;
    shoesData = JSON.parse(data);
});

class siteController {
    //GET /
    index(req, res, next) {
        res.render('home', { shoesData });
    }
}

module.exports = new siteController();
