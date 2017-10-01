define([
    'app',
    'text!../templates/imageSponsor.html' /* I don't using ad.html name for adBlocker extension */
],
    function (app, advertisementTemplate) {

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
