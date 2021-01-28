const _ = require('lodash')

const { validateValue, resMessage, getProp } = require('../utils/validate-utils')

exports.validateRule = async(req, res, next) => {
    const { rule, data } = req.body
    if (rule === undefined || data === undefined){
        let error = rule === undefined ? 'rule' : 'data'
        return resMessage(res, `${error} is required.`, 400, 'error', null)
    }
    if (typeof rule !== 'object'){
        return resMessage(res, 'rule should be a object.', 400, 'error', null)
    }
    if (!(typeof data === 'string' || typeof data === 'object')){
        return resMessage(res, 'Data should be a type Array, String or Object.', 400, 'error', null)
    }

    const keys = []
    for (let key in req.body){
        keys.push(key)
    }
    let isEqual = _.isEqual(keys, ['rule', 'data']) || _.isEqual(keys, ['data', 'rule'])
    if (!isEqual){
        return resMessage(res, 'Invalid JSON payload passed.', 400, 'error', null)
    }

    const { field, condition, condition_value } = rule
    const value = getProp(data, field)
    if (value === undefined){
        return resMessage(res, `field ${field} is missing from data.`, 400, 'error', null)
    }

    const validationResult = validateValue(value, condition, condition_value)
    const resData = {
        validation: {
            error: validationResult === true ? false : true,
            field,
            field_value: value,
            condition,
            condition_value
        }
    }
    if (validationResult) {
        return resMessage(res, `field ${field} successfully validated.`, 200, 'success', resData)
    }
    return resMessage(res, `field ${field} failed validation`, 400, 'error', resData)
}