angular.module('app.controllers', [
	'app.directives'
])
	.controller('PostController', ['$scope', '$http', function($scope, $http){
		$http.get('data/posts.json').success(function(data){
			$scope.posts = data;
		});
	}])
	.controller('PageController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
		$http.get('data/pages.php').success(function(data){
			$scope.page = data[$routeParams.id];
		});
	}])
	.controller('SinglePostController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
		$http.get('data/posts.json').success(function(data){
			$scope.post = data[$routeParams.id];
		});
	}])
	.controller('ArchiveController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
		$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
		$http.post('data/pages.php',{par:"aa",par2:"a3a"}).success(function(data){
			$scope.post = data[$routeParams.id];
		});
	}])
	;