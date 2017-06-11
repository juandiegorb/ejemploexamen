angular.module('ejemploexamen').controller('agregarcontactoController', ['$scope', '$location', 'contactoService', '$sessionStorage', '$timeout', '$route', function ($scope, $location, contactoService, $sessionStorage, $timeout, $route) {

        $scope.registro = {
            foto: '',
            nombre: '',
            apellido: '',
            telefono: '',
            correo: ''
        };

        $scope.mostrarmensaje = false;

        $scope.insertar = function () {
            contactoService.guardar($scope.registro).then(function succesCallback(response) {
                $scope.mostrarmensaje = false;
                $scope.registro = {};
                if (response.data.code == 200) {

                    $scope.mostrarmensaje = true;
                    $scope.registro = '';

                    $timeout(function () {
                        $route.reload();
                        window.location.reload();
                        $location.path('/agenda');
                    }, 1000);
                } else if (response.data.code == 500) {
                    console.log(response.data);
                }
            }, function errorCallback(response) {
                console.log(response);
            });
        };
    }]);


