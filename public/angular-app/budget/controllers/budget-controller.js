angular.module('meiApp').controller('budgetController', budgetController);

function budgetController($scope, $translate, $translatePartialLoader, $anchorScroll, $location, $http) {
  //var vm = this;
  $scope.budget = [];
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
      $scope.budget = jsonData.data.BUDGET;
      delete $scope.budget.HEADER;
      delete $scope.budget.BUDGET_2014_15_TITLE;
      delete $scope.budget.THE_MYSORE_ELECTRICAL_INDUSTRIES_LTD;
      delete $scope.budget.M_E_I_LTD;
      delete $scope.budget.DATE;
      delete $scope.budget.PERFORMANCE_HEAEDER;
    });
}