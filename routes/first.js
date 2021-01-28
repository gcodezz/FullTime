const express = require('express')

const firstController = require('../controllers/first')

const router = express.Router()

router.get('/', firstController.getDetails)

module.exports = router