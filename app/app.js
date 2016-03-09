var myApp = angular.module("myApp", []);
myApp.service("Tinhtoan",function(){
	this.cong = function(a,b){	return parseInt(a) + parseInt(b); }
	this.tru = function(a,b){	return parseInt(a) - parseInt(b); }
	this.nhan = function(a,b){	return parseInt(a) * parseInt(b); }
	this.chia = function(a,b){	return parseInt(a) / parseInt(b); }
});

myApp.controller("Homepage",function($scope,Tinhtoan){
	$scope.message="Đây là message";

	$scope.cong = function(){
		$scope.result = Tinhtoan.cong($scope.a,$scope.b);
	};
	$scope.tru = function(){
		$scope.result = Tinhtoan.tru($scope.a,$scope.b);
	};
	$scope.nhan = function(){
		$scope.result = Tinhtoan.nhan($scope.a,$scope.b);
	};
	$scope.chia = function(){
		$scope.result = Tinhtoan.chia($scope.a,$scope.b);
	};

})

