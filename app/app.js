var myApp = angular.module("myApp", []);
myApp.service("Tinhtoan",function(){
	this.cong = function(a,b){	return parseInt(a) + parseInt(b); }
	this.tru = function(a,b){	return parseInt(a) - parseInt(b); }
	this.nhan = function(a,b){	return parseInt(a) * parseInt(b); }
	this.chia = function(a,b){	return parseInt(a) / parseInt(b); }
});

myApp.controller("Homepage",function($scope,$http,Tinhtoan){

	$scope.message="Đây là message";

	//============ ============  ============ ============

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

	//============ ============  ============ ============

	$scope.mysubmit = function(isValid){
		if (isValid) {
			alert('Form Validation thành công');
		}else{
			alert('Error');
		}
	}

	//============ ============  ============ ============

	$scope.items = [
		{title:"sản phẩm 1",price:100000},
		{title:"sản phẩm 2",price:150000},
	];
	$scope.splice_item = function(){
		$scope.items.splice(1,0,{title:"sản phẩm 3",price:250000});
	}

	//============ ============  ============ ============



	$scope.target_hiding_showing = "Target_hiding_showing content: "+Date();
	$scope.target_hide = true;
	$scope.do_hiding_showing = function(){
		$scope.target_hiding_showing = "Target_hiding_showing content: "+Date();
		$scope.target_hide = !$scope.target_hide;
	}

	//============ ============  ============ ============

	//<div ng-class='{error: isError, warning: isWarning}' >ng-class</div>

	$scope.do_ng_class_error = function(){
		$scope.isError = !$scope.isError;
	}
	$scope.do_ng_class_warning = function(){
		$scope.isWarning = !$scope.isWarning;
	}

	//============ ============  ============ ============

	$scope.add_sum = function(){
		$scope.discount_price = Date();
		return 1;
	}
	function add_discount(value){
		console.log(value);
	}
	$scope.$watch($scope.add_sum,add_discount);

	//============ ============  ============ ============

	$scope.get_data = function(){
		$http.get("/AgularJS_Speaking24/data.html").then(function(response) {
			console.log(response);
		});
	};

	//============ ============  ============ ============

});
