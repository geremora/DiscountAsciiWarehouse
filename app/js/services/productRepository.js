define(
    [
        'app',
        'lodash',
        'appConfig',
        'service/productService',
        'service/productCache'
    ],
    (app, _, config) => {

        const productRepository = ($http, $q, productService, productCacheService) => {

            let isLoading = false;

            function clearCache() {
                productCacheService.removeAll();
            }

            function getProducts(limit, sortBy) {
                const productsCache = productCacheService.get(config.CACHE_ID_PRODUCTS) || [];

                if (productsCache.length) {
                    const deffered = $q.defer();
                    const data = {
                        products: productsCache.splice(0, limit),
                        isEndOfCatalogue: false
                    };
                    productCacheService.put(config.CACHE_ID_PRODUCTS, productsCache);
                    deffered.resolve(data);
                    return deffered.promise;

                } else if (!productsCache.length && !isLoading) {
                    isLoading = true;
                    return productService
                        .downloadProducts(config.CACHE_PRODUCTS, sortBy)
                        .then(function downloaded(data) {
                            products = data.products;

                            const display = products.slice(0, limit);
                            const cache = products.slice(limit);

                            Array.prototype.push.apply(productsCache, cache);
                            productCacheService.put(config.CACHE_ID_PRODUCTS, productsCache);

                            isLoading = false;
                            return {
                                products: display,
                                isEndOfCatalogue: data.isEndOfCatalogue
                            };
                        });
                }
                return null;
            };

            return serviceAPI = {
                getProducts,
                clearCache
            };
        };

        productRepository.$inject = ['$http', '$q', 'productService', 'productCache'];
        app.factory('productRepository', productRepository);
    });