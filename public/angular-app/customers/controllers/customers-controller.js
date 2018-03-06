angular.module('meiApp').controller('customersController', customersController);

function customersController($scope, $translate, $translatePartialLoader, $anchorScroll, $location, $http,$stateParams) {
  //var vm = this;
  $translatePartialLoader.addPart('mei');
  $translate.refresh();
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
      var customerId = $stateParams.customerId;
      $scope.currentData = jsonData.data[customerId];
      $scope.header = customerId;
      delete $scope.currentData.HEADER;
      delete $scope.currentData.TITLE;
    //   $scope.routineTests = jsonData.data.ROUTINE_TESTS;
    //   $scope.research = jsonData.data.RESEARCH;
    //   delete $scope.routineTests.HEADER;
    //   delete $scope.routineTests.TITLE;
    //   delete $scope.routineTests.TESTS_CONDUCTED;
    //   delete $scope.research.HEADER;
    //   delete $scope.research.TITLE;
    });
  }
  init();

  function setUrl(key_spares){
    for(var key in $scope.currentData){
        $scope.currentData[key]['url'] = "images/spares/"+key_spares+"/"+key+".jpg";
    }
  }
}