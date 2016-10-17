var creativedrums;
(function (creativedrums) {
    angular.module('creativedrums', ['ui.router', 'ngResource', 'ui.bootstrap', 'youtube-embed', 'yaru22.angular-timeago']).config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: '/ngApp/views/home.html',
            controller: creativedrums.Controllers.HomeController,
            controllerAs: 'vm'
        })
            .state('about', {
            url: '/about',
            templateUrl: '/ngApp/views/about.html',
            controller: creativedrums.Controllers.AboutController,
            controllerAs: 'vm'
        })
            .state('instrument', {
            url: '/instrument',
            templateUrl: '/ngApp/views/instrument.html',
            controller: creativedrums.Controllers.InstrumentController,
            controllerAs: 'vm'
        })
            .state('login', {
            url: '/login',
            templateUrl: '/ngApp/views/login.html',
            controller: creativedrums.Controllers.LoginController,
            controllerAs: 'vm'
        })
            .state('register', {
            url: '/register',
            templateUrl: '/ngApp/views/register.html',
            controller: creativedrums.Controllers.RegisterController,
            controllerAs: 'vm'
        })
            .state('brand', {
            url: '/brand',
            templateUrl: '/ngApp/views/drumBrand.html',
            controller: creativedrums.Controllers.BrandController,
            controllerAs: 'vm'
        })
            .state('instrumentDetails', {
            url: '/instrumentDetails/:id',
            templateUrl: '/ngApp/views/instrumentDetails.html',
            controller: creativedrums.Controllers.InstrumentDetailsController,
            controllerAs: 'vm'
        })
            .state('account', {
            url: '/account',
            templateUrl: '/ngApp/views/account.html',
            controller: creativedrums.Controllers.UserController,
            controllerAs: 'vm'
        })
            .state('editInstrument', {
            url: '/editInstrument/:id',
            templateUrl: '/ngApp/views/editInstrument.html',
            controller: creativedrums.Controllers.EditInstrumentController,
            controllerAs: 'vm'
        })
            .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
        });
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
        $httpProvider.interceptors.push("BearerAuthInterceptor");
    });
    angular.module('creativedrums').factory('BearerAuthInterceptor', function ($window, $q) {
        return {
            request: function (config) {
                config.headers = config.headers || {};
                if ($window.localStorage.getItem('token')) {
                    config.headers.Authorization = 'Bearer ' + $window.localStorage.getItem('token');
                }
                return config || $q.when(config);
            },
            response: function (response) {
                if (response.status === 401) {
                }
                return response || $q.when(response);
            }
        };
    });
})(creativedrums || (creativedrums = {}));
