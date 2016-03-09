angular.module('app', [
	'ngRoute',
	'app.controllers'
]).config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'views/post.html',
		controller: 'PostController'
	}).when('/post/:id', {
		templateUrl: 'views/singlepost.html',
		controller: 'SinglePostController'
	}).when('/page/:id', {
		templateUrl: 'views/page.html',
		controller: 'PageController'
	}).when('/archive/:id', {
		templateUrl: 'views/archive.html',
		controller: 'ArchiveController'
	}).otherwise({
		redirectTo: '/'
	});
});