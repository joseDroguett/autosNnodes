angular.module('nnodestest')
.controller('piezaCtrl', [
	'$scope'
, 'pieza'
, 'autoFactory'
, '$location'
, '$window'
, function($scope,pieza,autoFactory,$location,$window){
		$scope.auto_id = pieza.auto_id;
		$scope.nombre = pieza.nombre;
		$scope.cantidad = pieza.cantidad;

		$scope.updatePieza = function(){
		  autoFactory.updatePieza(pieza.auto_id,pieza.id, {
		    nombre: $scope.nombre,
		    cantidad: $scope.cantidad
		  }).then(function(data){
		  	$window.location.href = '#/auto/'+pieza.auto_id;
		  });
		};
	}
])