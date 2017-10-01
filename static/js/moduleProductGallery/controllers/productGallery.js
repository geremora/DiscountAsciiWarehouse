define(
    [
        'app',
        'appConfig',
        'service/productRepository',
        'service/advertisementService'
    ], function (app, config) {

        var controller = function ($scope, productRepository, advertisementService) {

            function init() {

                $scope.galleryItems = [];
                $scope.isEndOfCatalogue = false;
                $scope.fistTime = true;
              
            }
            $scope.sortBy = '';
            $scope.mainAd = advertisementService.getRandomAdvertisement();

            $scope.loadMore = function () {

                var advertisement = advertisementService.getRandomAdvertisement();
                var products = productRepository.getProducts(config.LOAD_ITEMS, $scope.sortBy);

                function success(data) {
                    if (data.isEndOfCatalogue) {
                        $scope.isEndOfCatalogue = data.isEndOfCatalogue;
                    }
                    else {
                        if ($scope.fistTime){
                            $scope.fistTime = false;
                        }else{
                            $scope.galleryItems.push(advertisement);
                        }
                        Array.prototype.push.apply($scope.galleryItems, data.products);
                    }
                }

                function error() {
                    $scope.isEndOfCatalogue = true;
                }

                if (products)
                    products.then(success, error);
            };

    
            $scope.sortChange = function () {
                init();
                productRepository.clearCache();
                $scope.loadMore();
            }

            init();
        };

        controller.$inject = ['$scope', 'productRepository', 'advertisementService'];
        app.controller('productGalleryCtrl', controller);
    });
