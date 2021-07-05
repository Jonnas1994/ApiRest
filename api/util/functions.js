const moment = require('moment');

module.exports = {

    numberRandom: function (min, max) {
        
        return this.leftPad( Math.floor(Math.random()* max + min), 2);
    },
    
    leftPad: function (number, targetLength) {

        var output = number + '';
        while (output.length < targetLength) {
            output = '0' + output;
        }
        return output;
    },

    diffDate: function (start, end) {

        var diff = moment.duration(end.diff(start));
        return moment( 
                        this.leftPad(diff._data.hours, 2) 
                        +":"+ 
                        this.leftPad(diff._data.minutes, 2),
                        'hh:mm'
                    );
    }
}