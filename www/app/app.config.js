angular.module('ejemploexamen').constant('rolAdmin', 1);



angular.module('ejemploexamen').config(['$middlewareProvider',
    function middlewareProviderConfig($middlewareProvider) {
        $middlewareProvider.map({
            'comprobarSession': ['$sessionStorage', function comprobarSession($sessionStorage) {
                    middlewareComprobarSession(this, $sessionStorage);
                }],
            'comprobarNoTenerSession': ['$sessionStorage', 'rolAdmin', function comprobarNoTenerSession($sessionStorage, rolAdmin) {
                    middlewareComprobarNoTenerSession(this, $sessionStorage, rolAdmin);
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
                when('/agregarcontacto', {
                    controller: 'agregarcontactoController',
                    templateUrl: 'app/template/agregarcontacto.html',
                    middleware: ['comprobarSession']
                }).
                when('/editarcontacto', {
                    controller: 'editarcontactoController',
                    templateUrl: 'app/template/editarcontacto.html',
                    middleware: ['comprobarSession']
                }).
                when('/buscarcontacto', {
                    controller: 'buscarcontactoController',
                    templateUrl: 'app/template/buscarcontacto.html',
                    middleware: ['comprobarSession']
                }).
                when('/logout', {
                    controller: 'logoutController',
                    template: '<p>Cerrando sesión...</p>',
                    middleware: ['comprobarSession']
                }).
                otherwise('/');
    }]);


