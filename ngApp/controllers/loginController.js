var creativedrums;
(function (creativedrums) {
    var Controllers;
    (function (Controllers) {
        var LoginController = (function () {
            function LoginController(loginService, $state, customDrumService) {
                this.loginService = loginService;
                this.$state = $state;
                this.customDrumService = customDrumService;
                this.userName = this.loginService.getUsername();
            }
            LoginController.prototype.login = function () {
                var _this = this;
                this.loginService.login(this.loginInfo)
                    .then(function () {
                    _this.customDrumService.editCustomDrum(_this.userName);
                    _this.$state.go('brand');
                })
                    .catch(function () {
                    alert('login failed');
                });
            };
            return LoginController;
        }());
        Controllers.LoginController = LoginController;
    })(Controllers = creativedrums.Controllers || (creativedrums.Controllers = {}));
})(creativedrums || (creativedrums = {}));
