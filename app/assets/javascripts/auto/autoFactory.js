angular.module('nnodestest')
.factory('autoFactory', [function(){
	var autos = {};
	autos.lista = [];

	autos.addAuto = function(newAuto){
		autos.lista.push(newAuto);
	}

	autos.getAutos = function(){
		return autos.lista;
	}

	return autos;
}]);