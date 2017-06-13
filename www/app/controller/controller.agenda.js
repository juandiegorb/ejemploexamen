angular.module('ejemploexamen').controller('agendaController', ['$scope', '$location', '$sessionStorage', 'mostrarTablaService', "$timeout", function ($scope, $location, $sessionStorage, mostrartabla, $timeout) {
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


        /*Funcion Eliminar*/
        $scope.Eliminarcontacto = function (datos) {
            $('#eliminarContacto').modal('toggle');
            $scope.nombre = datos.con_nombre;
            $scope.ideliminar = datos.con_id;
        };

        $scope.submitEliminarContacto = function () {
            mostrartabla.eliminarcontacto({id: $scope.ideliminar}).then(function successCallback(response) {
                $scope.usuarioEliminado = false;
                if (response.data.code == 500) {
                } else {
                    $scope.usuarioEliminado = true;
                    $timeout(function () {
                        $('#eliminarContacto').modal('toggle');
                    }, 700);
                    $timeout(function () {
                        // $route.reload();
                        window.location.reload();
                    }, 1000);
                }
            }, function errorCallback(response) {
                console.error(response);
            });
        };
        /*Fin Funcion Eliminar*/




    }]);


