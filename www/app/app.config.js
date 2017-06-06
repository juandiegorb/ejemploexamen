angular.module('ejemploexamen').constant('rolAdmin', 1);



angular.module('ejemploexamen').config(['$middlewareProvider',
    function middlewareProviderConfig($middlewareProvider) {
        $middlewareProvider.map({
            'comprobarSession': ['$localStorage', '$sessionStorage', function comprobarSession($localStorage, $sessionStorage) {
                    middlewareComprobarSession(this, $localStorage, $sessionStorage);
                }],
            'comprobarNoTenerSession': ['$localStorage', '$sessionStorage', 'rolAdmin', function comprobarNoTenerSession($localStorage, $sessionStorage, rolAdmin) {
                    middlewareComprobarNoTenerSession(this, $localStorage, $sessionStorage, rolAdmin);
                }]
        });
    }]);



angular.module('ejemploexamen').config(['$routeProvider', '$httpProvider', function config($routeProvider, $httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        $routeProvider.
                when('/', {
                    controller: 'loginController',
                    templateUrl: 'app/template/login.html',
                    middleware: ['comprobarNoTenerSession']
                }).
                when('/agenda', {
                    controller: 'agendaController',
                    templateUrl: 'app/template/agenda.html',
                    middleware: ['comprobarSession']
                }).
                when('/logout', {
                    controller: 'logoutController',
                    template: '<p>Cerrando sesión...</p>',
                    middleware: ['comprobarSession']
                }).
                otherwise('/');
    }]);


