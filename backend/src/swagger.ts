const swaggerAutogen = require('swagger-autogen')();
const doc = require('./config/swagger_config.ts');

const outputFile = './src/swagger_documentation.json';
const endpoints = ['./src/app.ts'];

swaggerAutogen(outputFile, endpoints, doc);