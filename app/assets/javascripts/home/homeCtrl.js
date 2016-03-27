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
		    latitud: (Math.random() * 180) - 90,
		    longuitud: (Math.random() * 360) - 180
		  });
		  $scope.cars = autoFactory.getAutos();
		  $scope.marca = '';
		  $scope.modelo = '';
		};
	}
])