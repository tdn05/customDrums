var creativedrums;
(function (creativedrums) {
    var Controllers;
    (function (Controllers) {
        var RegisterController = (function () {
            function RegisterController(registerService, $state, loginService) {
                this.registerService = registerService;
                this.$state = $state;
                this.loginService = loginService;
            }
            RegisterController.prototype.saveUser = function () {
                var _this = this;
                this.registerService.saveUser(this.user)
                    .then(function () {
                    _this.$state.go('home');
                    _this.loginService.getUsername();
                })
                    .catch(function () {
                    console.log('something went wrong');
                });
            };
            return RegisterController;
        }());
        Controllers.RegisterController = RegisterController;
    })(Controllers = creativedrums.Controllers || (creativedrums.Controllers = {}));
})(creativedrums || (creativedrums = {}));
