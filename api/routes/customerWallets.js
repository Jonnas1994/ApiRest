const config      = require('config');

module.exports = app => {
    const controller = app.controllers.customerWallets;

    app.route( config.get('server.urlBase') + '/customer-wallets' )
        .get(controller.listCustomerWallets);
}