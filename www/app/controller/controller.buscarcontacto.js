angular.module('ejemploexamen').controller('buscarcontactoController', ['$scope', 'buscarcontactoService', '$sessionStorage', '$location', '$timeout', function ($scope, buscarContacto, $sessionStorage, $location, $timeout) {
//        $scope.urlUploads = urlUploads;
        $scope.contactos = [];
//        $scope.buscar = {};
        $scope.buscarp = {};
        $scope.buscarp.persona = $sessionStorage.persona;
        $scope.busquedadFallida = false;


        $scope.buscar = function () {
            //$sessionStorage.buscarPersona = $scope.dato;
            $location.path('/buscarcontacto');
            location.reload(true);
        };
        
        
        $scope.buscarContacto = function () {

            console.log($scope.buscarp);

            buscarContacto.buscarCon($scope.buscarp).then(function successCallback(response) {
                delete $sessionStorage.persona;
                if (response.data.code == 500) {
                    $scope.busquedadFallida = true;
                } else {
                    $scope.contactos = response.data.datos;
                    console.log(response.data);
//                    $timeout(function () {
//                        
//                        window.location.reload();
//                    }, 1000);



                }
            }, function errorCallback(response) {
                console.error(response);
            });
        };

        $scope.buscarContacto();




        $scope.eliminar2 = function (dato) {
            $('#eliminarContacto').modal('toggle');
            $scope.nombre = dato.con_nombre;
            $scope.apellido = dato.con_apellido;
            $scope.ideliminar = dato.con_id;
        };

        $scope.submitEliminarContacto = function () {
            buscarContacto.eliminarCon({id: $scope.ideliminar}).then(function successCallback(response) {
                $scope.contactoEliminado = false;
                if (response.data.code == 500) {
                } else {
                    $scope.contactoEliminado = true;
                    $timeout(function () {
                        $('#eliminarContacto').modal('toggle');
                    }, 700);
                    $timeout(function () {
                        // $route.reload();
                        window.location.reload();
                        $location.path('/agenda');
                    }, 1000);
                }
            }, function errorCallback(response) {
                console.error(response);
            });
        };


        $scope.editar = function (contacto) {
            $sessionStorage.datosPersona = contacto;
            $location.path('/editarcontacto');
        };

    }]);