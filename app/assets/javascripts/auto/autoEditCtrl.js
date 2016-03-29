angular.module('nnodestest')
.controller('autoEditCtrl', [
	'$scope'
, 'auto'
, 'autoFactory'
, '$window'
, function($scope,auto,autoFactory,$window){
		$scope.auto_id = auto.id;
		$scope.marca = auto.marca;
		$scope.modelo = auto.modelo;

		$scope.updateAuto = function(){
		  autoFactory.updateAuto(auto.id, {
		    marca: $scope.marca,
		    modelo: $scope.modelo,
		    latitud: auto.latitud,
		    longuitud: auto.longuitud
		  }).then(function(data){
		  	$window.location.href = '#';
		  });
		};
	}
])