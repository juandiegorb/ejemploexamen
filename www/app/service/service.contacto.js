angular.module('ejemploexamen').service('contactoService', ['$http', function ($http) {

        this.guardar = function (data) {
            return $http.post('http://localhost/ejemploexamen/www/server.php/contacto', $.param(data));
        };
        this.editar = function (data) {
            return $http.post('http://localhost/ejemploexamen/www/server.php/contacto', $.param(data));
        };
        this.eliminar = function (data) {
            return $http.post('http://localhost/ejemploexamen/www/server.php/contacto', $.param(data));
        };

        // this.getUser = $http.get('http://localhost/cras/www/server.php/obtener_usuarios');

    }]);


