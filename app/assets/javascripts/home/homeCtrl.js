angular.module('nnodestest')
.controller('homeCtrl', [
	'$scope'
, 'autoFactory'
, function($scope,autoFactory){
		$scope.cars = autoFactory.getAutos();
		
		$scope.addCar = function(){
		  autoFactory.addAuto({
		    marca: $scope.marca,
		    modelo: $scope.modelo,
		    piezas: []
		  });
		  $scope.cars = autoFactory.getAutos();
		  $scope.marca = '';
		  $scope.modelo = '';
		};
	}
])