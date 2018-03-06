angular.module('meiApp').controller('servicesController', servicesController);

function servicesController($scope, $translate, $translatePartialLoader,$http) {
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

    var request = {
        method: 'get',
        url: 'data/en/mei.json',
        dataType: 'json',
        contentType: "application/json"
      };
    
      $http(request)
        .then(function (jsonData) {
          $scope.retrofitting = jsonData.data.RETROFITTING;
          delete $scope.retrofitting.HEADER;
          delete $scope.retrofitting.TITLE;
          delete $scope.retrofitting.DESCRIPTION;
        });
}