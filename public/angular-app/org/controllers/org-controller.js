angular.module('meiApp').controller('orgController', orgController);

function orgController($scope, $translate, $translatePartialLoader) {
    //var vm = this;
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
}