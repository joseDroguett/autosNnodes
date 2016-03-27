angular.module('nnodestest')
.factory('autoFactory', [
	'$http'
,	function($http){
		var autos = {};
		autos.lista = [];

		autos.getAutos = function(){
			return autos.lista;
		}

		autos.getAll = function() {
	    return $http.get('/autos.json').success(function(data){
	    	angular.copy(data, autos.lista);
	    });
	  };

	  autos.addAuto = function(newAuto){
			return $http.post('/autos.json', newAuto).success(function(data){
		    autos.lista.push(data);
		  });
		}

		return autos;
	}
]);