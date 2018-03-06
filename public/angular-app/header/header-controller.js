angular.module('meiApp').controller('headerController',headerController);

function headerController($translate, $translatePartialLoader){
    var vm = this;
    // $translatePartialLoader.addPart('mei');
    // $translate.refresh();
    vm.languages = [{value:"English",lang:'en'},{value:"ಕನ್ನಡ",lang:'kn'}];
    //vm.lang = vm.languages[0].value;

    vm.changeLang = function(){
        $translate.use(vm.lang);
    }
    window.addEventListener("scroll", function() {
        if (window.scrollY > 500) {
            angular.element('.navbar').fadeOut();
        }
        else {
            angular.element('.navbar').fadeIn();
        }
    },false);
}