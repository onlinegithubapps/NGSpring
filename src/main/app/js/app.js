(function () {
    var myModule = angular.module('NGSpring', [
        'ngRoute',
        'ngAnimate'/*,
        'ngMessages'*/
    ]);

    myModule.config(function($routeProvider) {
        $routeProvider
            .when('/', {
            templateUrl: 'src/main/app/views/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'login'
        })
            .otherwise({redirectTo: '/'});
    });
})();