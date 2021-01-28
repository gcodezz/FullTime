exports.getDetails = async(req, res, next) => {
    res.status(200).json({
        message: 'My Rule-Validation API',
        status: 'success',
        data: {
            name: 'Ayodeji Afolabi',
            github: '@gcodezz',
            email: 'ayodejigreatest@gmail.com',
            mobile: '09069756025',
            twitter: '@dahstormz'
        }
    })
}