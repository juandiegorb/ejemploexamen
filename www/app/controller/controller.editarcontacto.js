angular.module('ejemploexamen').controller('editarcontactoController', ['$scope', 'editarcontactoService', '$sessionStorage', '$location', '$timeout', function ($scope, editarContacto, $sessionStorage, $location, $timeout) {

        $scope.editar = {};

        //console.log($sessionStorage.infocon);

        $scope.editar.id = $sessionStorage.datospersona.con_id;
        $scope.editar.foto = $sessionStorage.datospersona.con_foto;
        $scope.editar.nombre = $sessionStorage.datospersona.con_nombre;
        $scope.editar.apellido = $sessionStorage.datospersona.con_apellido;
        $scope.editar.telefono = $sessionStorage.datospersona.con_telefono;
        $scope.editar.correo = $sessionStorage.datospersona.con_correo;


        $scope.editarcontacto = function () {
            editarContacto.editar($scope.editar).then(function successCallback(response) {
                $scope.mostrarmensajeeditar = false;
                $scope.editar = {};
                if (response.data.code == 500) {
                } else {
                    $scope.mostrarmensajeeditar = true;
                    $scope.editar = '';
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
    }]);


