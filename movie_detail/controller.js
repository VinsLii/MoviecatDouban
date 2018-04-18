(function  (angular) {
	'use strict';
	var module = angular.module(
		'moviecat.movie_detail', [
		'ngRoute',
		'moviecat.services.http'
		]);
	//配置模块的路由
	module.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/detail/:id', {
			templateUrl: 'movie_detail/view.html',
			controller: 'MovieDetailController'
		});
	}]);

	module.controller('MovieDetailController', [
		'$scope',
		'$route',
		'$routeParams',
		'HttpService',
		'AppConfig',
		function($scope,$route,$routeParams,HttpService,AppConfig) {
			$scope.movie = {};
			var id = $routeParams.id;
			$scope.loading = true;
			var apiAddress = AppConfig.detailApiAddress + id;
			//跨域的方式
			HttpService.jsonp(apiAddress,{},function  (data) {
				$scope.movie = data;
				$scope.loading = false;
				$scope.$apply();
			})
		}
	]);

})(angular)
