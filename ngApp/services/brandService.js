var creativedrums;
(function (creativedrums) {
    var Services;
    (function (Services) {
        var BrandService = (function () {
            function BrandService($resource) {
                this.$resource = $resource;
                this.brandResources = $resource('/api/brands/:id');
            }
            BrandService.prototype.getBrands = function () {
                return this.brandResources.query();
            };
            BrandService.prototype.getBrand = function (id) {
                return this.brandResources.get({ id: id });
            };
            return BrandService;
        }());
        Services.BrandService = BrandService;
        angular.module('creativedrums').service('brandService', BrandService);
    })(Services = creativedrums.Services || (creativedrums.Services = {}));
})(creativedrums || (creativedrums = {}));
