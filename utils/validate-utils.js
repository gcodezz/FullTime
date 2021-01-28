exports.validateValue = (value, condition, condition_value) => {
    switch (condition) {
        case 'eq':
            return value === condition_value
    
        case 'neq':
            return value !== condition_value
    
        case 'gt':
            return value > condition_value
    
        case 'gte':
            return value >= condition_value
    
        case 'contains':
            return value.includes(condition_value)
    
        default:
            break
    }
}

exports.resMessage = (res, message, code, status, data) => {
    return res.status(code).json({
        message: message,
        status: status,
        data: data
    })
}

exports.getProp = (object, key) => {
    if (key.includes('.')) {
        const [first, second] = key.split('.')
        return object[first][second]
    }
    return object[key]
}