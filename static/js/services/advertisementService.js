define(['app', 'lodash', 'appConfig'], function (app, _, config) {

    var advertisementService = function (restManager) {
        var advertisements = [];

        var __getAdvertisementNumber = function (numbers) {
            var adRandom = _.random(1, 16);
            if (!numbers.length)
                return adRandom;
            
            while (_.last(numbers) === adRandom) {
                adRandom = _.random(1, 16);
            }
            return adRandom;
        };

        var getRandomAdvertisement = function () {
            var adRandom = __getAdvertisementNumber(advertisements);
            advertisements.push(adRandom);
            return advertisement = {
                type: config.TYPE.ADVERTISEMENT,
                src: restManager.ADVERTISEMENT + advertisements[advertisements.length - 1]
            };
        };
        return {
            getRandomAdvertisement: getRandomAdvertisement
        };
    };

    advertisementService.$inject = ['restManager'];
    app.factory('advertisementService', advertisementService);
});
