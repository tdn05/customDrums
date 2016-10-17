var creativedrums;
(function (creativedrums) {
    var Controllers;
    (function (Controllers) {
        var BrandController = (function () {
            function BrandController(brandService, $uibModal) {
                this.brandService = brandService;
                this.$uibModal = $uibModal;
                this.getBrands();
                this.newBrand = "DW";
            }
            BrandController.prototype.getBrands = function () {
                this.brands = this.brandService.getBrands();
            };
            BrandController.prototype.getBrandDetails = function (id) {
                this.$uibModal.open({
                    templateUrl: 'ngApp/views/brandDetails.html',
                    controller: creativedrums.Controllers.BrandDetailsController,
                    controllerAs: 'vm',
                    resolve: {
                        brandId: function () { return id; },
                    },
                    size: 'lg'
                });
            };
            BrandController.prototype.getTab = function (brand) {
                this.newBrand = brand;
                var elms = document.querySelectorAll('.active');
                for (var _i = 0, elms_1 = elms; _i < elms_1.length; _i++) {
                    var e = elms_1[_i];
                    e.setAttribute('class', '');
                }
                document.querySelector('#drum' + brand).setAttribute('class', 'active');
            };
            return BrandController;
        }());
        Controllers.BrandController = BrandController;
    })(Controllers = creativedrums.Controllers || (creativedrums.Controllers = {}));
})(creativedrums || (creativedrums = {}));
