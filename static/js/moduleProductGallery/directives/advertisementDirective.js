define([
    'app',
    'text!../templates/order2.html',
],
    function (app, advertisementTemplate, productTemplate) {

        var advertisementDirective = function () {
            return {
                scope: {
                    data: '='
                },
                restrict: 'E',
                template: advertisementTemplate
            };
        };
        app.directive('advertisement', advertisementDirective);
    });
