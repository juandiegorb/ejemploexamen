angular.module('ejemploexamen').service('editarService', ['$http', function ($http) {

        this.editar = function (data) {
            return $http.post('http://localhost/ejemploexamen/www/server.php/contacto', $.param(data));
        };

    }]);


