// const { format } = require('path');
const { createLogger, format, transports} = require('winston');
const { combine, timestamp, label, printf} = format;

const customFormat = printf(({lavel, message, timestamp}) => {
    return `${timestamp} : ${lavel} : ${message}` ;
})

const logger = createLogger({
    format: combine(
        timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
        customFormat,
        // format.simple()
    ),
    transports: [
        new transports.Console(),
        new transports.File({filename: 'combine.log'}),
    ],
})

module.exports = logger;