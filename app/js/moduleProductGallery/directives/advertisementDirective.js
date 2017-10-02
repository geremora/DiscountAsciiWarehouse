define([
    'app',
    'text!../templates/imageSponsor.html' /* I don't using ad.html name for adBlocker extension */
],
    (app, advertisementTemplate) => {

        const advertisementDirective = () => ({
            scope: {
                data: '='
            },

            restrict: 'E',
            template: advertisementTemplate
        });
        app.directive('advertisement', advertisementDirective);
    });
