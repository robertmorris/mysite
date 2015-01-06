'use strict';

var app = angular.module('MySite', [
	'ngRoute',
	'Site_Home',
	'Site_Crawl'
	]);

app.constant('URLs', {
	HOME: "/home",
	CRAWLER: "/myfirstcrawler"
});

app.config(['$routeProvider', 'URLs',
	function($routeProvider, URLs){
		$routeProvider.
		when(URLs.HOME, {
			templateUrl: 'home/home.html',
			controller: 'HomeCtrl'
		}).
		when(URLs.CRAWLER, {
			templateUrl: 'myfirstcrawler/mainForm.html',
			controller: 'CrawlCtrl'
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