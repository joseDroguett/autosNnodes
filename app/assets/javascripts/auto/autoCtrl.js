angular.module('nnodestest')
.controller('autoCtrl', [
	'$scope'
, '$stateParams'
, 'autoFactory'
, function($scope, $stateParams, autoFactory){
		$scope.car = autoFactory.getAutos()[$stateParams.id];

		$scope.addPieza = function(){
		  $scope.car.piezas.push({
		    nombre: $scope.nombre,
		    cantidad: $scope.cantidad
		  });
		  $scope.nombre = '';
		  $scope.cantidad = '';
		};
	}
])