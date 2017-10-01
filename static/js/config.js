/**
 * RequireJS configuration.
 */
var config = {
    baseUrl: 'js/',
    paths: {
        app: 'app',
        text: 'lib/text',
        angular: 'lib/angular',
        infinitiveScroll: 'lib/ng-infinite-scroll.min',
        timeago: 'lib/angular-timeago.min',
        lodash: 'lib/lodash.min',
        dateformat: 'lib/dateformat',
        appConfig: 'common/config',
        productGallery: 'moduleProductGallery/controllers/productGallery',
        service: 'services',
        filter: 'filters',
        productGalleryDirective: 'moduleProductGallery/directives/productGallery',
        advertisementDirective:  'moduleProductGallery/directives/advertisementDirective',
        relativeDateFilter: 'filters/relativeDateFilter'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        infinitiveScroll: {
            deps: ['angular']
        },
        timeago: {
            deps: ['angular']
        }
    }
};

requirejs.config(config);

/**
 * Run application.
 */
requirejs([
    'angular',
    'appConfig',
    'text',
    'app',
    'productGallery',
    'productGalleryDirective',
    'advertisementDirective',
    'relativeDateFilter'],
    function (angular, config) {
        angular.bootstrap(document, [config.APPLICATION_NAME]);
    }
);
