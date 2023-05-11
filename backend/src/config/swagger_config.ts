module.exports = {
    info: {
      version: '1.0.0',
      title: 'E-Commerce Webcars',
      description: 'Documentação da API da growdev',
    },
    host: 'localhost:3000',
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    securityDefinitions: {
      JWT: {
        description: 'JWT token',
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
      },
    },
    definitions: {
    },
  };