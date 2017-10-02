define(['app', 'moment', 'appConfig'], function (app, moment, config) {

    var convertDate = function (date, validity) {

        let itemDateMoment = moment(new Date(date));
      
        let diff = moment().diff(itemDateMoment);

        if (moment.duration(diff).asDays() <= validity) {

            return itemDateMoment.fromNow();

        }
       return itemDateMoment.format(config.FORMAT_DATE);
    };

    app.filter('relativeDate', function () {
        return function (input, validity) {
            var validityRange = null;
            switch (validity) {
                case 'week':
                default:
                    validityDaysRange = 7;
                    break;
            }
            var date = convertDate(input, validityDaysRange);
            return date;
        };
    });
});