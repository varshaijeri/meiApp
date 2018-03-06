var app = angular.module('meiApp',['ui.router','pascalprecht.translate','ngAnimate','angular-scroll-animate','ngMaterial','ngAria','ngMap']);

app.config(['$stateProvider', '$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('app', {
            url: '/',
            views: {
                'header': {
                    templateUrl: 'angular-app/header/header.html',
                    controller: 'homeController',
                    controllerAs: 'vm'
                },
                'content': {
                    templateUrl: 'angular-app/home/home.html',
                    controller: 'homeController',
                    controllerAs: 'vm'
                },
                'footer': {
                    templateUrl: 'angular-app/footer/footer.html',
                    controller: 'homeController',
                    controllerAs: 'vm'
                }
            }
        })
        .state('app.companyProfile', {
            url: 'company-profile',
            views : {
                'content@' : {
                    templateUrl : 'angular-app/companyProfile/views/companyProfile.html',
                    controller: 'companyController'
                }
            }
        })
        .state('app.vision', {
            url: 'vision',
            views : {
                'content@' : {
                    templateUrl : 'angular-app/vision/views/vision.html',
                    controller: 'visionController'
                }
            }
        })
        .state('app.bod', {
            url: 'board-of-directors',
            views : {
                'content@' : {
                    templateUrl : 'angular-app/bod/views/bod.html',
                    controller: 'bodController'
                }
            }
        })
        .state('app.mng', {
            url: 'management-profile',
            views : {
                'content@' : {
                    templateUrl : 'angular-app/mng/views/mng.html',
                    controller: 'mngController'
                }
            }
        })
        .state('app.org', {
            url: 'organisation-chart',
            views : {
                'content@' : {
                    templateUrl : 'angular-app/org/views/org.html',
                    controller: 'orgController'
                }
            }
        })
        .state('app.manufacturing', {
            url: 'manufacturing-process',
            views : {
                'content@' : {
                    templateUrl : 'angular-app/manufacturing/views/manufacturing.html',
                    controller: 'manufacturingController'
                }
            }
        })
        .state('app.rtia', {
            url: 'rtia',
            views : {
                'content@' : {
                    templateUrl : 'angular-app/rtia/views/rtia.html',
                    controller: 'rtiaController'
                }
            }
        })
        .state('app.budget', {
            url: 'budget',
            views : {
                'content@' : {
                    templateUrl : 'angular-app/budget/views/budget.html',
                    controller: 'budgetController'
                }
            }
        })
        .state('app.products', {
            url: 'product',
            views : {
                'content@' : {
                    templateUrl : 'angular-app/products/views/products.html',
                    controller: 'productsController'
                }
            }
        })
        .state('app.products.product', {
            url: '/:productId',
            views : {
                'rightPanel@app.products' : {
                    templateUrl : 'angular-app/products/views/product.html',
                    controller: 'productsController'
                }
            }
        })
        .state('app.services', {
            url: 'services/retrofitting',
            views : {
                'content@' : {
                    templateUrl : 'angular-app/services/views/services.html',
                    controller: 'servicesController'
                }
            }
        })
        .state('app.spares', {
            url: 'spares/:sparesId',
            views : {
                'content@' : {
                    templateUrl : 'angular-app/spares/views/spares.html',
                    controller: 'sparesController'
                }
            }
        })
        .state('app.quality', {
            url: 'quality/:qualityId',
            views : {
                'content@' : {
                    templateUrl : 'angular-app/quality/views/quality.html',
                    controller: 'qualityController'
                }
            }
        })
        .state('app.customers', {
            url: 'customers/:customerId',
            views : {
                'content@' : {
                    templateUrl : 'angular-app/customers/views/customers.html',
                    controller: 'customersController'
                }
            }
        })
        .state('app.dealers', {
            url: 'dealers',
            views : {
                'content@' : {
                    templateUrl : 'angular-app/dealers/views/dealers.html',
                    controller: 'dealersController'
                }
            }
        })
        .state('app.contact', {
            url: 'contact',
            views : {
                'content@' : {
                    templateUrl : 'angular-app/contact/views/contact.html',
                    controller: 'contactController'
                }
            }
        });
}]);

app.config(['$translateProvider','$translatePartialLoaderProvider', '$windowProvider',function($translateProvider,$translatePartialLoaderProvider,$windowProvider){
    $translateProvider.preferredLanguage('en');
    $translateProvider.useLoader('$translatePartialLoader', {
		urlTemplate: 'data/{lang}/{part}.json'
	});
}]);

// app.config( ['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {
//     GoogleMapApiProviders.configure({
//         china: true
//     });
// }]
// );