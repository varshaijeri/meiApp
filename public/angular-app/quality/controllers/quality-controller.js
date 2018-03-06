angular.module('meiApp').controller('qualityController', qualityController);

function qualityController($scope, $translate, $translatePartialLoader, $anchorScroll, $location, $http,$stateParams) {
  //var vm = this;
  $scope.profiles = [];
  // $translatePartialLoader.addPart('mei');
  // $translate.refresh();
  $scope.page = "angular-app/quality/views/"+$stateParams.qualityId+".html";
  $scope.animateElementIn = function ($el) {
    $el.removeClass('not-visible');
    $el.addClass('animated fadeInLeft'); // this example leverages animate.css classes
  };

  $scope.animateElementOut = function ($el) {
    $el.addClass('not-visible');
    $el.removeClass('animated fadeInLeft'); // this example leverages animate.css classes
  };

  function init(){
    var request = {
        method: 'get',
        url: 'data/en/mei.json',
        dataType: 'json',
        contentType: "application/json"
      };
      $http(request)
    .then(function (jsonData) {
      $scope.routineTests = jsonData.data.ROUTINE_TESTS;
      $scope.research = jsonData.data.RESEARCH;
      delete $scope.routineTests.HEADER;
      delete $scope.routineTests.TITLE;
      delete $scope.routineTests.TESTS_CONDUCTED;
      delete $scope.research.HEADER;
      delete $scope.research.TITLE;
    });
  }
  init();
}