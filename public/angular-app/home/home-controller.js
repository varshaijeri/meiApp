angular.module('meiApp').controller('homeController',homeController);

function homeController($scope,$translate, $translatePartialLoader,$anchorScroll,$location,$sessionStorage,$rootScope){
    var vm = this;
    vm.lang = 'en'
    $sessionStorage.lang = 'en';
    $translatePartialLoader.addPart('mei');
    $translate.refresh();
    vm.languages = [{value:"English",lang:'en'},{value:"ಕನ್ನಡ",lang:'kn'}];
    //vm.lang = vm.languages[0].value;

    vm.changeLang = function(){
        $translate.use(vm.lang);
        $sessionStorage.lang = vm.lang;
    }
    window.addEventListener("scroll", function() {
        if (window.scrollY > 500) {
            angular.element('.navbar').fadeOut();
        }
        else {
            angular.element('.navbar').fadeIn();
        }
    },false);

    vm.imageList = [{
        "url":"images/mei-3311.jpg",
        "title":"ABOUT.WHO_WE_ARE_TITLE",
        "desc":'ABOUT.WHO_WE_ARE_DESCRIPTION'
    },{
        "url":"images/mei-3321.jpg",
        "title":'ABOUT.WHAT_WE_DO_TITLE',
        "desc":'ABOUT.WHAT_WE_DO_DESCRIPTION'
    },{
        "url":"images/mei-333.jpg",
        "title":'ABOUT.HOW_WE_DO_TITLE',
        "desc":'ABOUT.HOW_WE_DO_DESCRIPTION'
    },{
        "url":"images/mei-334.jpg",
        "title":'ABOUT.WHAT\'S_NEW_TITLE',
        "desc":'ABOUT.WHAT\'S_NEW_DESCRIPTION'
    }];
    
    vm.aboutMEI = [{
        "url":"images/image2881.jpg",
        "title":'MEI.OFFICE',
        "desc":null
    },{
        "url":"images/image355.jpg",
        "title":'MEI.WHY_MEI_TITLE',
        "desc":'MEI.WHY_MEI_DESCRIPTION'
    },{
        "url":"images/image233222.jpg",
        "title":'MEI.CERTIFICATES',
        "desc":null
    },
    {
        "url":null,
        "title":'MAKE.TITLE',
        "desc":'MAKE.DESCRIPTION'
    }];
}