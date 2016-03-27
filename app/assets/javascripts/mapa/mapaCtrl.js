angular.module('nnodestest')
.controller('mapaCtrl', [
	'$scope'
, 'auto'
, function($scope, auto){
		$scope.map = {
			center: {
				latitude: 0, 
				longitude: 0
			}, 
			zoom: 1,
			options : {
				scrollwheel: false
			},
			control: {}
		};
		$scope.marker = {
			id: 0,
			coords: {
				latitude: auto.latitud,
				longitude: auto.longuitud
			},
			options: {
				draggable: false,
				animation: 1
			}
		};
		console.log($scope.marker);
	}
])