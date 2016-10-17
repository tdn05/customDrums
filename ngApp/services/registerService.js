var creativedrums;
(function (creativedrums) {
    var Services;
    (function (Services) {
        var RegisterService = (function () {
            function RegisterService($resource, $http, $q, $window) {
                this.$resource = $resource;
                this.$http = $http;
                this.$q = $q;
                this.$window = $window;
            }
            RegisterService.prototype.saveUser = function (user) {
                var _this = this;
                return this.$q(function (resolve, reject) {
                    _this.$http.post('/api/users/register', user)
                        .then(function (data) {
                        console.log(data);
                        var admin = data.data.admin;
                        var username = data.data.username;
                        var email = data.data.email;
                        _this.$window.localStorage.setItem('username', username);
                        _this.$window.localStorage.setItem('admin', admin);
                        _this.$window.localStorage.setItem('email', email);
                        resolve();
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                });
            };
            return RegisterService;
        }());
        Services.RegisterService = RegisterService;
        angular.module('creativedrums').service('registerService', RegisterService);
    })(Services = creativedrums.Services || (creativedrums.Services = {}));
})(creativedrums || (creativedrums = {}));
