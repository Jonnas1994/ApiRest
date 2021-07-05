const config      = require('config');
const auth = require('./auth');

module.exports = app => {
    const controller = app.controllers.ferramentas_controller;

    /**
     * @swagger
     * tags:
     *   name: Ferramentas
     */

    /**
    * @swagger
    * /node-package:
    *  get:
    *    summary: Exibe as configurações do Node.js
    *    tags: [Ferramentas]
    *    security:
    *       - Bearer: []
    *    description: Exibe todas as configurações referente ap arquivo "package.json" do projeto
    *    responses:
    *      '200':
    *        description: A successful response
    */
    app.route( config.get('server.urlBase') + '/node-package')
        .get( auth.isAuthorized, controller.listConfigPackage);

    /**
    * @swagger
    * /hour-load-generator:
    *  get:
    *    summary: Gera uma carga horária válida com 8 horas
    *    tags: [Ferramentas]
    *    security:
    *       - Bearer: []
    *    description: Gera uma carga horária com 8 horas diárias, sendo as marcações dinâmicas
    *    responses:
    *      '200':
    *        description: A successful response
    */
     app.route( config.get('server.urlBase') + '/hour-load-generator')
     .get( auth.isAuthorized, controller.listHourLoad);

}