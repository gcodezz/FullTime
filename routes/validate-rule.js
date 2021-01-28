const express = require('express')

const validateRuleController = require('../controllers/validate-rule')

const router = express.Router()

router.post('/validate-rule', validateRuleController.validateRule)

module.exports = router