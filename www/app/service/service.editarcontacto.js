angular.module('ejemploexamen').service('editarcontactoService', ['$http', function ($http) {

        this.editar = function (data) {
            return $http.post('http://localhost/ejemploexamen/www/server.php/editarcontacto', $.param(data));
        };

    }]);


