/*
console.log("Hola, estoy saliendo por pantalla.")

console.info("Hola, este es un mensaje informativo.")

console.warn("Hola, este es un mensaje de advertencia.")

console.error("Hola, esto es un error.")

console.debug("Hola, esto es un mensaje de debug") 
*/


//Winston is a library that will allow us to save logs in a professional way.
//in order to install winston, we just have to go to the terminal and type "npm install winston".

const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});


logger.info("Hola, este es un mensaje informativo.")
logger.warn("Hola, este es un mensaje de advertencia.")
logger.error("Hola, esto es un error.")
logger.debug("Hola, esto es un mensaje de debug") 