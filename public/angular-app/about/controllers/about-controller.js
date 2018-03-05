angular.module('meiApp').controller('aboutController', aboutController);

function aboutController($scope, $translate, $translatePartialLoader,NgMap) {
    var vm = this;
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
    NgMap.getMap().then(function(map) {
        vm.showCustomMarker= function(evt) {
          map.customMarkers.foo.setVisible(true);
          map.customMarkers.foo.setPosition(this.getPosition());
        };
        vm.closeCustomMarker= function(evt) {
          this.style.display = 'none';
        };
      });
}