angular.module('meiApp').controller('productsController', productsController);

function productsController($scope, $translate, $translatePartialLoader, $anchorScroll, $location, $http, $timeout, $mdSidenav, $log,$state) {
    //var vm = this;
    $scope.profiles = [];
    // $translatePartialLoader.addPart('mei');
    // $translate.refresh();
    $scope.animateElementIn = function ($el) {
        $el.removeClass('not-visible');
        $el.addClass('animated fadeInLeft'); // this example leverages animate.css classes
    };

    $scope.animateElementOut = function ($el) {
        $el.addClass('not-visible');
        $el.removeClass('animated fadeInLeft'); // this example leverages animate.css classes
    };

    

    $scope.getProduct = function (key) {
        $scope.currentData = $scope.allData[key];
        $scope.currentData.url = 'images/' + key + '.jpg';
        $scope.currentData.key = key;
    }

    $scope.initialization = function(){
        var request = {
            method: 'get',
            url: 'data/en/mei.json',
            dataType: 'json',
            contentType: "application/json"
        };
        $http(request)
        .then(function (jsonData) {
            $scope.products = jsonData.data['PRODUCTS'];
            $scope.allData = jsonData.data;
            $scope.getProduct('PCVCB');
        });
    }

    $scope.toggleLeft = buildDelayedToggler('left');

    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
        var timer;

        return function debounced() {
            var context = $scope,
                args = Array.prototype.slice.call(arguments);
            $timeout.cancel(timer);
            timer = $timeout(function () {
                timer = undefined;
                func.apply(context, args);
            }, wait || 10);
        };
    }

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
        return debounce(function () {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav(navID)
                .toggle()
                .then(function () {
                    $log.debug("toggle " + navID + " is done");
                });
        }, 200);
    }

    function buildToggler(navID) {
        return function () {
            // Component lookup should always be available since we are not using `ng-if`
            $mdSidenav(navID)
                .toggle()
                .then(function () {
                    $log.debug("toggle " + navID + " is done");
                });
        };
    }
}