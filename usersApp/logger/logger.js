const winston = require('winston');

const logger = winston.createLogger (
    {
        format: winston.format.json(),
        transports: [
        new winston.transports.Console ()
        ]
    }
)

module.exports = logger;
// logger.info('Hello, this is an info message!');