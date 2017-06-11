angular.module('ejemploexamen').service('mostrarTablaService', ['$http', function($http){
    
    this.obtenercontacto = $http.get('http://localhost/ejemploexamen/www/server.php/obtenerContacto');
    
    this.eliminarCon = function (data) {
      return $http.post('http://localhost/ejemploexamen/www/server.php/eliminarContacto', $.param(data));
    };
}]);