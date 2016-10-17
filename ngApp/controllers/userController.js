var creativedrums;
(function (creativedrums) {
    var Controllers;
    (function (Controllers) {
        var UserController = (function () {
            function UserController(loginService, customDrumService, $uibModal) {
                this.loginService = loginService;
                this.customDrumService = customDrumService;
                this.$uibModal = $uibModal;
                this.getUsername();
                this.getEmail();
            }
            UserController.prototype.getUsername = function () {
                this.username = this.loginService.getUsername();
            };
            UserController.prototype.getEmail = function () {
                this.email = this.loginService.getEmail();
            };
            UserController.prototype.editProfile = function (id) {
                this.$uibModal.open({
                    templateUrl: 'ngApp/views/editProfile.html',
                    controller: creativedrums.Controllers.EditProfileController,
                    controllerAs: 'vm',
                    resolve: {
                        userId: function () { return id; }
                    },
                    size: 'lg'
                });
            };
            return UserController;
        }());
        Controllers.UserController = UserController;
    })(Controllers = creativedrums.Controllers || (creativedrums.Controllers = {}));
})(creativedrums || (creativedrums = {}));
