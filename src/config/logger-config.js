const { format } = require('path');
const { createLogger, formate, transports} = require('winston');
const { combine, timestamp, label, printf} = format;

const customFormat = printf(({lavel, message, label, timestamp}) => {
    return `${timestamp} : ${label} : ${lavel} : ${message}` ;
})

const logger = createLogger({
    format: combine(
        label({ label: 'right meow'}),
        timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
        customFormat
    ),
    transports: [
        new transports.Console(),
        new transports.File({filename: 'combine.log'}),
    ],
})

module.exports = logger;