angular.module('ejemploexamen').controller('agregarcontactoController', ['$scope', '$location', 'contactoService', '$sessionStorage', function ($scope, $location, contactoService, $sessionStorage) {

        $scope.datos = {};

        $scope.registrar = function () {
            $scope.datos.accion = 'guardar';
            contactoService.guardar($scope.datos).then(function succesCallback(response) {
                if (response.data.code == 200) {
                    $scope.datos = {};
                    $location.path('/agenda');
                } else if (response.data.code == 500) {
                    console.log(response.data);
                }
            }, function errorCallback(response) {
                console.log(response);
            });
        };
    }]);


