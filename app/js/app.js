define(['angular', 'service/plainTextToJson', 'appConfig', 'infinitiveScroll'], (angular, plainTextToJson, config) => {

    const app = angular.module(config.APPLICATION_NAME, ['infinite-scroll']);

    app.config(['$httpProvider', $httpProvider => {
        $httpProvider.defaults.transformResponse = plainTextToJson;
    }]);

    return app;
});