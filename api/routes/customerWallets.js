const config      = require('config');
const auth = require('./auth');

module.exports = app => {
    const controller = app.controllers.customerWallets;

    /**
     * @swagger
     * tags:
     *   name: Ferramentas
     */

    /**
    * @swagger
    * /customer-wallets:
    *  get:
    *    summary: aqui vai o sumario
    *    tags: [Ferramentas]
    *    security:
    *       - Bearer: []
    *    description: listar todos os customer-wallets
    *    responses:
    *      '200':
    *        description: A successful response
    */
    app.route( config.get('server.urlBase') + '/customer-wallets')
        .get( auth.isAuthorized, controller.listCustomerWallets);

}