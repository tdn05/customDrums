var creativedrums;
(function (creativedrums) {
    var Controllers;
    (function (Controllers) {
        var BrandDetailsController = (function () {
            function BrandDetailsController(brandService, instrumentService, brandId, $state, $uibModalInstance, customDrumService) {
                this.brandService = brandService;
                this.instrumentService = instrumentService;
                this.brandId = brandId;
                this.$state = $state;
                this.$uibModalInstance = $uibModalInstance;
                this.customDrumService = customDrumService;
                this.id = '57fccb34469fbb2768e426a3';
                this.getInstrument();
            }
            BrandDetailsController.prototype.getBrand = function () {
                this.instrument = this.brandService.getBrand(this.brandId);
            };
            BrandDetailsController.prototype.getInstrument = function () {
                this.instrument = this.instrumentService.getInstrument(this.brandId);
            };
            BrandDetailsController.prototype.getInstrumentDetails = function (id) {
                this.$state.go('instrumentDetails', { id: id });
                this.$uibModalInstance.close();
            };
            BrandDetailsController.prototype.saveInstrument = function () {
                var _this = this;
                this.customDrumService.saveToCart(this.id, this.instrument).then(function () {
                    _this.$uibModalInstance.close();
                });
            };
            return BrandDetailsController;
        }());
        Controllers.BrandDetailsController = BrandDetailsController;
    })(Controllers = creativedrums.Controllers || (creativedrums.Controllers = {}));
})(creativedrums || (creativedrums = {}));
