'use strict';

var app = angular.module('MySite', [
	'ngRoute',
	'Site_Home'
	]);

app.constant('URLs', {
	HOME: "/home",
	ABOUT: "/about"
});

app.config(['$routeProvider', 'URLs',
	function($routeProvider, URLs){
		$routeProvider.
		when(URLs.HOME, {
			templateUrl: 'home/home.html',
			controller: 'HomeCtrl'
		}).
		otherwise({
			redirectTo: URLs.HOME
		});
	}]);

app.factory('routing', ['$location', function($location) {
	var routing = {};
	routing.change_view = function(url) {

	};

	return routing;
}]);

app.controller('MainCtrl', function($scope, $http) {

});