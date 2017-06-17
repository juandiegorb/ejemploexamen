angular.module('ejemploexamen').controller('mainController', ['$scope', '$sessionStorage', '$location', function ($scope, $sessionStorage, $location) {
        $scope.dato;
        $scope.session = $sessionStorage;
        $scope.buscar = function () {
            $location.path('/buscarcontacto');
        };
    }]);



