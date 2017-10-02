define(['app', 'appConfig'], (app, config) => {

    const productCache = $cacheFactory => $cacheFactory('productsCache');

    productCache.$inject = ['$cacheFactory'];
    app.factory('productCache', productCache);
});