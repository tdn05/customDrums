var creativedrums;
(function (creativedrums) {
    var Controllers;
    (function (Controllers) {
        var EditProfileController = (function () {
            function EditProfileController(loginService) {
                this.loginService = loginService;
                this.username = this.loginService.getUsername();
                this.email = this.loginService.getEmail();
            }
            EditProfileController.prototype.editProfile = function () {
            };
            return EditProfileController;
        }());
        Controllers.EditProfileController = EditProfileController;
    })(Controllers = creativedrums.Controllers || (creativedrums.Controllers = {}));
})(creativedrums || (creativedrums = {}));
