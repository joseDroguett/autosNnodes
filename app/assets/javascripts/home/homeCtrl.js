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
		    latitud: (Math.random() * 180) - 85,
		    longuitud: (Math.random() * 360) - 180
		  });
		  $scope.cars = autoFactory.getAutos();
		  $scope.marca = '';
		  $scope.modelo = '';
		};

		$scope.deleteCar = function(id_auto,piezas){
			autoFactory.borrarPiezasAutos(piezas,function(){
				autoFactory.deleteAuto(id_auto).then(function(){
					autoFactory.getAll();
					$scope.cars = autoFactory.getAutos();
				})
			});
		}
	}
])