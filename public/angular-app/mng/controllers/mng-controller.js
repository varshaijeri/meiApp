angular.module('meiApp').controller('mngController', mngController);

function mngController($scope, $translate, $translatePartialLoader, $http) {
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
            var profileList = jsonData.data.MANAGEMENT_PROFILE;
            var mngProfiles = Object.values(profileList);
            var index = mngProfiles.indexOf("Management Profile");
            if (index > -1) {
                mngProfiles.splice(index, 1);
            }
            for (var i = 0; i < mngProfiles.length; i++) {
                var obj = {
                    "NAME": mngProfiles[i].NAME ? 'MANAGEMENT_PROFILE.' + (i + 1) + '.NAME' : '',
                    "A": mngProfiles[i].DESIGNATION ? 'MANAGEMENT_PROFILE.' + (i + 1) + '.DESIGNATION' : '',
                    "B": mngProfiles[i].MOBILE ? 'MANAGEMENT_PROFILE.' + (i + 1) + '.MOBILE' : '',
                    "C": mngProfiles[i].OFFICE ? 'MANAGEMENT_PROFILE.' + (i + 1) + '.OFFICE' : '',
                    "D": mngProfiles[i].EMAIL ? 'MANAGEMENT_PROFILE.' + (i + 1) + '.EMAIL' : ''
                }
                $scope.profiles.push(obj);
            }
        });
}