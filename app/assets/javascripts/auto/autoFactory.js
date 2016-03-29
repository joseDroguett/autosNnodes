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

		autos.updateAuto = function(id_auto, auto) {
		  return $http.put('/autos/'+id_auto+'.json', auto).then(function(res){
		  	return res.status;
		  });
		};

		autos.get = function(id) {
		  return $http.get('/autos/' + id + '.json').then(function(res){
		    return res.data;
		  });
		};

		autos.getPieza = function(id_auto,id_pieza) {
		  return $http.get('/autos/'+id_auto+'/piezas/'+id_pieza+'.json').then(function(res){
		    return res.data;
		  });
		};

		autos.addPieza = function(id, pieza) {
		  return $http.post('/autos/' + id + '/piezas.json', pieza);
		};

		autos.updatePieza = function(id_auto, id_pieza, pieza) {
		  return $http.put('/autos/'+id_auto+'/piezas/'+id_pieza+'.json', pieza).then(function(res){
		  	return res.status;
		  });
		};

		autos.borrarPiezasAutos = function (piezas,callback){
			for (indice in piezas) {
				autos.deletePieza(piezas[indice].id_auto,piezas[indice].id);
			}
			callback();
		}

		autos.deletePieza = function(auto_id, pieza_id) {
			return $http.delete('/autos/'+auto_id+'/piezas/'+pieza_id+'.json');
		};

		autos.deleteAuto = function(auto_id) {
			return $http.delete('/autos/'+auto_id+'.json');
		};

		return autos;
	}
]);