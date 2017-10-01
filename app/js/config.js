
var config = {
    baseUrl: 'js/',
    paths: {
        app: 'app',
        text: '../bower_components/text/text',
        angular: '../bower_components/angular/angular',
        infinitiveScroll: '../bower_components/ngInfiniteScroll/build/ng-infinite-scroll.min',
        lodash: '../bower_components/lodash/dist/lodash.min',
        dateformat: '../bower_components/date.format/date.format',
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
        }
    }
};

requirejs.config(config);


requirejs([
    'angular',
    'appConfig',
    'text',
    'app',
    'productGallery',
    'productGalleryDirective',
    'advertisementDirective',
    'relativeDateFilter'
    ],
    function (angular, config) {
        angular.bootstrap(document, [config.APPLICATION_NAME]);
    }
);
