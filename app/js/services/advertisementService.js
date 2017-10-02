define(['app', 'lodash', 'appConfig'], (app, _, config) => {

    const advertisementService = restManager => {
        const advertisements = [];

        const __getAdvertisementNumber = numbers => {
            let adRandom = _.random(1, 16);
            if (!numbers.length)
                return adRandom;
            
            while (_.last(numbers) === adRandom) {
                adRandom = _.random(1, 16);
            }
            return adRandom;
        };

        const getRandomAdvertisement = () => {
            const adRandom = __getAdvertisementNumber(advertisements);
            advertisements.push(adRandom);
            return advertisement = {
                type: config.TYPE.ADVERTISEMENT,
                src: restManager.ADVERTISEMENT + advertisements[advertisements.length - 1]
            };
        };
        return {
            getRandomAdvertisement
        };
    };

    advertisementService.$inject = ['restManager'];
    app.factory('advertisementService', advertisementService);
});
