angular.module('ejemploexamen').service('contactoService', ['$http', function ($http) {

        this.guardar = function (data) {
            return $http.post('http://localhost/ejemploexamen/www/server.php/agregarcontacto', $.param(data));
        };

    }]);


