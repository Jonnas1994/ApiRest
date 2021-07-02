const config      = require('config');

module.exports = app => {
    const controller = app.controllers.customerWallets;

    /**
    * @swagger
    * /api/v1/customer-wallets:
    *  get:
    *    tags:
    *       - name: Ferramentas
    *    description: listar todos os customer-wallets
    *    responses:
    *      '200':
    *        description: A successful response
    */
    app.route( config.get('server.urlBase') + '/customer-wallets' )
        .get(controller.listCustomerWallets);

}