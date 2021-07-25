const express     = require('express');
const config      = require('config');
const consign     = require('consign');

const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

module.exports = () => {
  const app = express();

  const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: 'API Pública',
        version: '1.0.0',
        description: 'Minha API para uso Diverso 😄 ',
      },
      securityDefinitions: {
          Bearer: {
              type: "apiKey",
              name: "Authorization",
              in: "header",
              description:  'Cabeçalho de autorização JWT usando o esquema Bearer.' + 
                            '\n Digite sua senha',
              scheme: "bearer",
              bearerFormat: "JWT"
          }
      },
      basePath: '/api/v1',
    },
    apis: ["./api/routes/*.js"],
    
  };

  const swaggerDocs = swaggerJsDoc(swaggerOptions);

  app.use(
    '/swagger',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocs)
  );

  app.set('port', process.env.PORT || config.get('server.port'));

  app.use(express.json())
  app.use(express.urlencoded({ extended: true}))

  consign({cwd: 'api'})
        .then('data')
        .then('controllers')
        .then('routes')
        .into(app);

  return app;
};