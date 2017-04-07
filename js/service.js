var serviceModule = angular.module('serviceModule',[]);

serviceModule.service('userService',function($http, $cookies, $q) {
	function getPromise (url) {
		var deferred = $q.defer();
		$http.get(url).then(function  (response) {
			deferred.resolve(response.data);
		},function  (error) {
			deferred.reject(error);
		});

		return deferred.promise;
	}


	return {
		login : function  (user) {
			return getPromise('/data/users.json').then(function  (users) {
				for(var i in users){
					if(users[i].username == user.username && users[i].password == user.password){
						if(user.remember){
							var date = new Date();
							date.setDate(date.getDate() + 7);
							$cookies.put('loginUser',user.username,{expires:date, path:'/'});
						}else{
							$cookies.remove('loginUser',{path:'/'});
						}
						return true;
					}
				}
				return false;
			})
		}
	}
})