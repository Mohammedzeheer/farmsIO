const express = require('express');
const router = express.Router();
const CountryController = require('../controllers/countryController')

router.get('/api/:tableName',CountryController.getDynamicData) 
// router.get('/', CountryController.getMetadata)

module.exports = router;