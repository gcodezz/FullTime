const express = require('express')
const bodyParser = require('body-parser')

const firstRoute = require('./routes/first')
const validateRuleRoute = require('./routes/validate-rule')

const app = express()

const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(firstRoute)
app.use(validateRuleRoute)

app.listen(port)