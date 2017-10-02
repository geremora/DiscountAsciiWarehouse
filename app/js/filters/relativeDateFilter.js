define(['app', 'moment', 'appConfig'], (app, moment, config) => {

    const convertDate = (date, validity) => {

        let itemDateMoment = moment(new Date(date));
      
        let diff = moment().diff(itemDateMoment);

        if (moment.duration(diff).asDays() <= validity) {

            return itemDateMoment.fromNow();

        }
       return itemDateMoment.format(config.FORMAT_DATE);
    };

    app.filter('relativeDate', () => (input, validity) => {
        const validityRange = null;
        switch (validity) {
            case 'week':
            default:
                validityDaysRange = 7;
                break;
        }
        const date = convertDate(input, validityDaysRange);
        return date;
    });
});