angular.module('ejemploexamen').controller('loginController', ['$scope', 'securityService', '$sessionStorage', '$location', 'rolAdmin', function ($scope, security, $sessionStorage, $location, rolAdmin) {
        $scope.datos = {};
        $scope.usuarioErroneo = false;

        $scope.submit = function () {
            security.validateUserAndPassword($scope.datos).then(function successCallback(response) {
                // console.log(response);
                $scope.usuarioErroneo = false;
                if (response.data.code == 500) {
                    $scope.usuarioErroneo = true;
                    $scope.datos = {};
                } else {
                    $location.path('/agenda');
                    $sessionStorage.usuario = response.data.datos[0];
                    ($sessionStorage.usuario == rolAdmin)
                    
                    {
                        
                    }
                }
            }, function errorCallback(response) {
                console.error(response);
            });

        };
    }]);