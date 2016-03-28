angular.module('nnodestest')
.controller('autoCtrl', [
	'$scope'
, '$stateParams'
, 'autoFactory'
, 'auto'
, function($scope, $stateParams, autoFactory, auto){
		$scope.car = auto;

		$scope.addPieza = function(){
		  autoFactory.addPieza(auto.id, {
		    nombre: $scope.nombre,
		    cantidad: $scope.cantidad
		  }).success(function(pieza) {
		    $scope.car.piezas.push(pieza);
		  });
		  $scope.nombre = '';
		  $scope.cantidad = '';
		};

		$scope.borrarPieza = function(pieza_id){
		  autoFactory.deletePieza(auto.id, pieza_id).then(function(){
		  	autoFactory.get(auto.id).then(function(data){
		  		$scope.car = data;
		  	});
		  });
		};
	}
])