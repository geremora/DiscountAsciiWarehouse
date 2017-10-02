define([
    'app',
    'text!../templates/product.gallery.html',
    'text!../templates/product.list.html',
    'text!../templates/product.html',
    'text!../templates/order.html'
],
    (
        app,
        productGalleryTemplate,
        productListTemplate,
        productTemplate,
        orderTemplate) => {

        const productGalleryDirective = () => ({
            restrict: 'E',
            controller: 'productGalleryCtrl',
            template: productGalleryTemplate
        });
        app.directive('productGallery', productGalleryDirective);


        const productListDirective = () => ({
            restrict: 'E',
            require: '^^productGallery',
            template: productListTemplate
        });
        app.directive('productList', productListDirective);


        const productDirective = () => ({
            scope: {
                data: '='
            },

            restrict: 'E',
            template: productTemplate
        });
        app.directive('product', productDirective);

        const orderDirective = () => ({
            restrict: 'E',
            require: '^^productGallery',
            template: orderTemplate
        });

        app.directive('order', orderDirective);
    });
