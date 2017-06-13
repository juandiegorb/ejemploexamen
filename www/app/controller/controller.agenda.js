angular.module('ejemploexamen').controller('agendaController', ['$scope', '$location', '$sessionStorage', 'mostrarTablaService', function ($scope, $location, $sessionStorage, mostrartabla) {
        $scope.contacto = [];

        /*Funcion mostrar Tabla*/
        $scope.pintarTablaCon = function () {

            mostrartabla.obtenercontacto.then(function successCallback(response) {
                switch (response.data.code) {
                    case 200:
                        $scope.contacto = response.data.datos;
                        break;
                    case 500:
                        $scope.contacto = [];
                }
            });
        };

        $scope.pintarTablaCon();
        /*Fin Funcion mostrar Tabla*/

        /* funcion de editar contacto*/
        $scope.editarcontacto = function (contacto) {
            $sessionStorage.datospersona = contacto;
            $location.path('/editarcontacto');
        };




    }]);


