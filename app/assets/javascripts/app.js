angular.module('nnodestest', ['ui.router','templates'])
.config([
	'$stateProvider'
, '$urlRouterProvider'
, function($stateProvider, $urlRouterProvider) {
	  $stateProvider
	    .state('home', {
			  url: '/home',
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
		  controller: 'autoCtrl'
		});

	  $urlRouterProvider.otherwise('home');
	}
])
;