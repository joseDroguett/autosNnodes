angular.module('nnodestest', ['ui.router','templates','uiGmapgoogle-maps'])
.config([
	'$stateProvider'
, '$urlRouterProvider'
, function($stateProvider, $urlRouterProvider) {
	  $stateProvider
	    .state('autos', {
			  url: '/autos',
			  templateUrl: 'home/_home.html',
			  controller: 'homeCtrl',
			  resolve: {
				  postPromise: ['autoFactory', function(autoFactory){
				    return autoFactory.getAll();
				  }]
				}
			})
			.state('auto', {
			  url: '/auto/{id}',
			  templateUrl: 'auto/_auto.html',
			  controller: 'autoCtrl',
			  resolve: {
				  auto: ['$stateParams', 'autoFactory', function($stateParams, autoFactory) {
				    return autoFactory.get($stateParams.id);
				  }]
				}
			})
			.state('autoEdit', {
			  url: '/auto/{id}/edit',
			  templateUrl: 'auto/_autoEdit.html',
			  controller: 'autoEditCtrl',
			  resolve: {
				  auto: ['$stateParams', 'autoFactory', function($stateParams, autoFactory) {
				    return autoFactory.get($stateParams.id);
				  }]
				}
			})
			.state('pieza', {
			  url: '/auto/{id_auto}/pieza/{id_pieza}',
			  templateUrl: 'pieza/_pieza.html',
			  controller: 'piezaCtrl',
			  resolve: {
				  pieza: ['$stateParams', 'autoFactory', function($stateParams, autoFactory) {
				    return autoFactory.getPieza($stateParams.id_auto,$stateParams.id_pieza);
				  }]
				}
			})
			;
		$stateProvider
	    .state('mapa', {
			  url: '/mapa/{id}',
			  templateUrl: 'mapa/_mapa.html',
			  controller: 'mapaCtrl',
			  resolve: {
				  auto: ['$stateParams', 'autoFactory', function($stateParams, autoFactory) {
				    return autoFactory.get($stateParams.id);
				  }]
				}
			})
	  ;
	  $urlRouterProvider.otherwise('autos');
	}
])
;