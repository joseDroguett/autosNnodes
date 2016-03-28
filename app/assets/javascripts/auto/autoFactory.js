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

		autos.get = function(id) {
		  return $http.get('/autos/' + id + '.json').then(function(res){
		    return res.data;
		  });
		};

		autos.addPieza = function(id, pieza) {
		  return $http.post('/autos/' + id + '/piezas.json', pieza);
		};

		autos.deletePieza = function(auto_id, pieza_id) {
			return $http.delete('/autos/'+auto_id+'/piezas/'+pieza_id+'.json');
		};

		return autos;
	}
]);