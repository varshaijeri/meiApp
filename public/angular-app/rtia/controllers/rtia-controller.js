angular.module('meiApp').controller('rtiaController', rtiaController);

function rtiaController($scope, $translate, $translatePartialLoader, $http) {
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

    $scope.filesMaintained = [];
    $scope.fileList=[];

    var request = {
        method: 'get',
        url: 'data/en/mei.json',
        dataType: 'json',
        contentType: "application/json"
    };

    function getIndexAndRemove(ele,arr) {
        var index = arr.indexOf(ele);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    }

    $http(request)
        .then(function (jsonData) {
            $scope.filesMaintained = jsonData.data['RIA18-3'];
            $scope.mktg = jsonData.data['RIA2']['MARKETING'];
            $scope.materialDiv = jsonData.data['RIA3'];
            $scope.accountDept = jsonData.data['RIA4'];
            $scope.prod = jsonData.data['RIA5'];
            $scope.planDept = jsonData.data['RIA6'];
            $scope.adminDept = jsonData.data['RIA7'];
            $scope.devDept = jsonData.data['RIA8'];
            $scope.enggDept = jsonData.data['RIA9'];
            $scope.qaDept = jsonData.data['RIA10'];
            $scope.disFunc = jsonData.data['RIA11'];
            $scope.RIA12 = jsonData.data['RIA12'];
            $scope.RIA14 = jsonData.data['RIA14'];
            $scope.RIA15 = jsonData.data['RIA15'];
            delete $scope.RIA15.TITLE;
            delete $scope.RIA14.TITLE;
            delete $scope.RIA12.TITLE;
            delete $scope.disFunc.TITLE;
            delete $scope.qaDept.TITLE;
            delete $scope.enggDept.TITLE;
            delete $scope.devDept.TITLE;
            delete $scope.adminDept.TITLE;
            delete $scope.planDept.TITLE;
            delete $scope.prod.TITLE;
            delete $scope.accountDept.TITLE;
            delete $scope.materialDiv.TITLE;
            $scope.filesMaintained = Object.values($scope.filesMaintained);
            $scope.filesMaintained=getIndexAndRemove("RTIA-41(a)",$scope.filesMaintained);
            $scope.filesMaintained=getIndexAndRemove("THE MYSORE ELECTRICAL INDUSTRIES LIMITED., BANGALORE",$scope.filesMaintained);
            $scope.filesMaintained=getIndexAndRemove("LIST OF FILES OF MAINTAINED IN ADMINISTRATION DEPARTMENT AS PER RTI ACT UNDER SEC 4(1)(A)",$scope.filesMaintained);
            $scope.filesMaintained=getIndexAndRemove("Sl.no",$scope.filesMaintained);
            $scope.filesMaintained=getIndexAndRemove("SUBJECT",$scope.filesMaintained);
            $scope.filesMaintained=getIndexAndRemove("FILE NO.& VOL. NO.",$scope.filesMaintained);
            
              for(var i=0;i<$scope.filesMaintained.length;i++){
                var obj = {
                  "SL":$scope.filesMaintained[i].SL?'RIA18-3.'+(i+1)+'.SL':'',
                  "SUBJECT":$scope.filesMaintained[i].SUBJECT?'RIA18-3.'+(i+1)+'.SUBJECT':'',
                  "FILE":$scope.filesMaintained[i].FILE?'RIA18-3.'+(i+1)+'.FILE':'',
                  "YEAR":$scope.filesMaintained[i].YEAR?'RIA18-3.'+(i+1)+'.YEAR':''
                }
                $scope.fileList.push(obj);
              }
        });
}