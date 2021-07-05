const moment = require('moment');
const func = require('../util/functions');

module.exports = app => {
    
    const nodePackageDB = app.data.nodePackage_data;
    const controller = {};
  
    controller.listConfigPackage = (req, res) => {
        res.status(200).json( nodePackageDB );
    };

    controller.listHourLoad = (req, res) => {

        var hrEntrada =  moment('09:' + func.numberRandom(1, 20), 'HH:mm');
        var hrAlmoco = moment('12:' + func.numberRandom(1, 10), 'HH:mm');
        var hrVolta = moment('13:' + func.numberRandom(1, 10), 'HH:mm');
        var hrSaida = moment('18:00', 'HH:mm');
        
        var cargaHoraria = moment('08:00', 'HH:mm');

        var periodoManha = func.diffDate(hrEntrada, hrAlmoco);
        var periodoTarde = func.diffDate(hrVolta, hrSaida);

        var cargaHorariaTotal = moment(periodoManha)
                                    .add( periodoTarde.format('HH'), 'hours' )
                                    .add( periodoTarde.format('mm'), 'minutes' );

        var tmpDiff;
        if( parseInt(cargaHorariaTotal.format('HH')) >= 8 ){

            tmpDiff = func.diffDate( cargaHoraria, cargaHorariaTotal );
            hrSaida = moment(hrSaida).subtract( tmpDiff.format('mm') , 'minutes' );
        }else{

            tmpDiff = func.diffDate( cargaHorariaTotal, cargaHoraria );
            hrSaida = moment(hrSaida).add( tmpDiff.format('mm') , 'minutes' );
        }

        let hrOut = {
            entrada: moment(hrEntrada).format('HH:mm'),
            almoco: moment(hrAlmoco).format('HH:mm'),
            volta: moment(hrVolta).format('HH:mm'),
            saida: moment(hrSaida).format('HH:mm')
        }

        res.status(200).json( hrOut );
    };
  
    return controller;
  }