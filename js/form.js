var userInfoModule = angular.module('userInfoModule',[]);
userInfoModule.controller('userInfoCtrl',['$scope',function  ($scope) {
	$scope.userInfo = {
		email:'dcooxx@sina.com',
		password:'123',
		autoLogin:true
	}

	$scope.getFormData = function () {
		console.log($scope.userInfo);
	}

	$scope.setFormData = function  () {
		$scope.userInfo = {
			email:'youdouzhao@163.com',
			password:'1234',
			autoLogin:false
		}
	}

	$scope.resetForm = function  () {
		$scope.userInfo = {
			email:'dcooxx@sina.com',
			password:'123',
			autoLogin:true
		}
	}
}])
