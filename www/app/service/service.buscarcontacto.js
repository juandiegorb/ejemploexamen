angular.module('ejemploexamen').service('buscarcontactoService', ['$http', function ($http) {

        this.buscarCon = function (data) {
            return $http.post('http://localhost/ejemploexamen/www/server.php/buscarcontacto', $.param(data));
        };

        this.eliminarCon = function (data) {
            return $http.post('http://localhost/ejemploexamen/www/server.php/eliminarContacto', $.param(data));
        };
    }]);


