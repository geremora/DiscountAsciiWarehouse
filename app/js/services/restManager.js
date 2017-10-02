define(['app'], app => {

    const restManager = () => ({
        PRODUCTS: '/api/products',
        ADVERTISEMENT: '/ad/?r=',

        getProductsUrl(limit, sort, skip) {
            let url = this.PRODUCTS;

            if (limit) {
                url += `?limit=${limit}`;
            }
            if (sort) {
                url += `&sort=${sort}`;
            }
            if (skip) {
                url += `&skip=${skip}`;
            }
            return url;
        }
    });

    app.factory('restManager', restManager);
});
