angular.module('meiApp').controller('sparesController', sparesController);

function sparesController($scope, $translate, $translatePartialLoader, $anchorScroll, $location, $http,$stateParams) {
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

  function init(){
    var request = {
        method: 'get',
        url: 'data/en/mei.json',
        dataType: 'json',
        contentType: "application/json"
      };
      $http(request)
    .then(function (jsonData) {
      var sparesId = $stateParams.sparesId;
      $scope.currentData = jsonData.data[sparesId];
      $scope.header = $scope.currentData.HEADER;
      delete $scope.currentData.HEADER;
      delete $scope.currentData.TITLE;
      setUrl(sparesId);
    });
  }
  init();

  function setUrl(key_spares){
    for(var key in $scope.currentData){
        $scope.currentData[key]['url'] = "images/spares/"+key_spares+"/"+key+".jpg";
    }
  }
}