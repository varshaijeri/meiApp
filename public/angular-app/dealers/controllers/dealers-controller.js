angular.module('meiApp').controller('dealersController', dealersController);

function dealersController($scope, $translate, $translatePartialLoader, $anchorScroll, $location, $http, $stateParams) {
    //var vm = this;
    $scope.imageList = [];
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

    // function setDetails(){
    //     $scope.imageList.forEach(element => {
    //         element.title = $scope.currentData..TITLE
    //     });
    // }

    function init() {
        var request = {
            method: 'get',
            url: 'data/en/mei.json',
            dataType: 'json',
            contentType: "application/json"
        };
        $http(request)
            .then(function (jsonData) {
                $scope.currentData = jsonData.data['ALL_DEALERS'];
                delete $scope.currentData.HEADER;
                delete $scope.currentData.TITLE;
                delete $scope.currentData.ADDRESS;
                delete $scope.currentData.PHONE;
                delete $scope.currentData.FAX;
                delete $scope.currentData.EMAIL;
                $scope.regionList = [{
                        "url": "images/India.png",
                        "key": "INDIA"
                    }, {
                        "url": "images/Karnataka.png",
                        "key": "KARNATAKA"
                    }, {
                        "url": "images/AP.jpg",
                        "key": "ANDHRA_PRADESH"
                    }, {
                        "url": "images/Delhi.png",
                        "key": "DELHI"
                    },
                    {
                        "url": "images/Tamilnadu.png",
                        "key": "TAMIL_NADU"
                    },
                    {
                        "url": "images/WB.png",
                        "key": "WEST_BENGAL"
                    },
                    {
                        "url": "images/gujarat.png",
                        "key": "GUJARAT"
                    }, {
                        "url": "images/Odisa.png",
                        "key": "ODISA"
                    }, {
                        "url": "images/Goa.png",
                        "key": "GOA"
                    }
                ];
            });
    }
    init();
}