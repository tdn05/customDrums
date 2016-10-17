var creativedrums;
(function (creativedrums) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController() {
            }
            HomeController.prototype.removeImage = function () {
                var x = document.querySelector('body');
                x.setAttribute('class', '');
            };
            HomeController.prototype.setImage = function () {
                var x = document.querySelector('body');
                x.setAttribute('class', 'mainIndex');
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AboutController = (function () {
            function AboutController() {
                this.message = 'Hello from the about page!';
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
    })(Controllers = creativedrums.Controllers || (creativedrums.Controllers = {}));
})(creativedrums || (creativedrums = {}));
