// First example: Simple logger
// 
// const winston = require('winston');
// const logger = winston.createLogger (
//     {
//         format: winston.format.json(),
//         transports: [
//         new winston.transports.Console ()
//         ]
//     }
// )


// Second example: Logger with file transport
// const {createLogger, format, transports} = require('winston');
// const {combine, timestamp, label, printf} = format;
// const Category = 'Products app logs';

// const customFormat = printf(({ message, label, timestamp}) => {
//     return `${timestamp} [${label}] ${message}`;
// }
// );
// const logger = createLogger({
//     // level: 'info',
//     format: combine(
//         label({label: Category}),
//         timestamp(),
//         customFormat
//     ),
//     transports: [
//         new transports.Console(),
//         ]
// });

// Third example: Logger with file transport and rotation
require('winston-daily-rotate-file');
const {createLogger, format, transports} = require('winston');
const {combine, timestamp, label, printf} = format;
const Category = 'Products app logs';

const fileRotateTransport = new transports.DailyRotateFile({
    filename: 'logs/rotate-%DATE%.log',
    datePattern: 'DDD-MM-YYYY',
    maxFiles: '14d',
});

const logger = createLogger({
    format: combine(
        label({label: 'My Label for products app'}),
        timestamp({format: 'DD-MM-YYYY HH:mm:ss'}),
        format.json()
    ),
    transports: [
        new transports.Console(),
        fileRotateTransport,
        new transports.File(
            {
                filename: 'logs/example.log'
            }
        ),
    ]
})
    

module.exports = logger;
// logger.info('Hello, this is an info message!')