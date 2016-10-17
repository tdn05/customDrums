var creativedrums;
(function (creativedrums) {
    var Services;
    (function (Services) {
        var LoginService = (function () {
            function LoginService($http, $window, $q, $resource) {
                this.$http = $http;
                this.$window = $window;
                this.$q = $q;
                this.$resource = $resource;
                this.userResource = $resource('/api/users/:id', null, {
                    edit: {
                        method: 'PUT',
                        url: '/api/questions'
                    }
                });
            }
            LoginService.prototype.editProfile = function (user) {
                return this.userResource.edit(user);
            };
            LoginService.prototype.isAdmin = function () {
                return this.$window.localStorage.getItem('admin');
            };
            LoginService.prototype.getUsername = function () {
                return this.$window.localStorage.getItem('username');
            };
            LoginService.prototype.getEmail = function () {
                return this.$window.localStorage.getItem('email');
            };
            LoginService.prototype.getToken = function () {
                return this.$window.localStorage.getItem('token');
            };
            LoginService.prototype.login = function (loginInfo) {
                var _this = this;
                return this.$q(function (resolve, reject) {
                    _this.$http
                        .post('/api/users/login', loginInfo)
                        .then(function (data) {
                        var token = data.data.token;
                        var admin = data.data.admin;
                        var username = data.data.username;
                        var email = data.data.email;
                        _this.$window.localStorage.setItem('token', token);
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
            LoginService.prototype.logout = function () {
                this.$window.localStorage.removeItem('token');
                this.$window.localStorage.removeItem('username');
                this.$window.localStorage.removeItem('admin');
                this.$window.localStorage.removeItem('email');
            };
            return LoginService;
        }());
        Services.LoginService = LoginService;
        angular.module('creativedrums').service('loginService', LoginService);
    })(Services = creativedrums.Services || (creativedrums.Services = {}));
})(creativedrums || (creativedrums = {}));
