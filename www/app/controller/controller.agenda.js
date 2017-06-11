angular.module('ejemploexamen').controller('agendaController', ['$scope', '$localStorage', '$sessionStorage', 'mostrarTablaService', function ($scope, $localStorage, $sessionStorage, mostrartabla) {
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
    }]);


