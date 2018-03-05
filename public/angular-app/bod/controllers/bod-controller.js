angular.module('meiApp').controller('bodController', bodController);

function bodController($scope, $translate, $translatePartialLoader, $anchorScroll, $location, $http) {
  //var vm = this;
  $scope.profiles = [];
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

  var request = {
    method: 'get',
    url: 'data/en/mei.json',
    dataType: 'json',
    contentType: "application/json"
  };

  $http(request)
    .then(function (jsonData) {
      var profileList = jsonData.data.BOARD_OF_DIRECTORS;
      var bod = Object.values(profileList);
      for(var i=0;i<bod.length;i++){
        var obj = {
          "NAME":bod[i].NAME?'BOARD_OF_DIRECTORS.'+(i+1)+'.NAME':'',
          "A":bod[i].A?'BOARD_OF_DIRECTORS.'+(i+1)+'.A':'',
          "B":bod[i].B?'BOARD_OF_DIRECTORS.'+(i+1)+'.B':'',
          "C":bod[i].C?'BOARD_OF_DIRECTORS.'+(i+1)+'.C':'',
          "D":bod[i].D?'BOARD_OF_DIRECTORS.'+(i+1)+'.D':'',
          "E":bod[i].E?'BOARD_OF_DIRECTORS.'+(i+1)+'.E':'',
          "F":bod[i].F?'BOARD_OF_DIRECTORS.'+(i+1)+'.F':''
        }
        $scope.profiles.push(obj);
      }
    });
}