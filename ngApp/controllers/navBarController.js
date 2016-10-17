var creativedrums;
(function (creativedrums) {
    var Controllers;
    (function (Controllers) {
        var NavBarController = (function () {
            function NavBarController(loginService, $state) {
                this.loginService = loginService;
                this.$state = $state;
            }
            NavBarController.prototype.getUsername = function () {
                return this.loginService.getUsername();
            };
            NavBarController.prototype.isAdmin = function () {
                return this.loginService.isAdmin();
            };
            NavBarController.prototype.logout = function () {
                this.loginService.logout();
                this.$state.go('login');
            };
            return NavBarController;
        }());
        angular.module('creativedrums').controller('navBarController', NavBarController);
    })(Controllers = creativedrums.Controllers || (creativedrums.Controllers = {}));
})(creativedrums || (creativedrums = {}));
