var creativedrums;
(function (creativedrums) {
    var Services;
    (function (Services) {
        var CustomDrumService = (function () {
            function CustomDrumService($resource) {
                this.customDrumResource = $resource('/api/customDrums/:id', null, {
                    edit: {
                        method: 'PUT',
                        url: '/api/customDrums'
                    },
                    saveToCart: {
                        method: 'POST',
                        url: '/api/customDrums/instrument/:drId'
                    },
                });
            }
            ;
            CustomDrumService.prototype.getCustomdrums = function () {
                return this.customDrumResource.query();
            };
            ;
            CustomDrumService.prototype.saveToCart = function (drId, instrument) {
                return this.customDrumResource.saveToCart({ drId: drId }, instrument).$promise;
            };
            CustomDrumService.prototype.getId = function (id) {
                return this.customDrumResource.getId();
            };
            CustomDrumService.prototype.editCustomDrum = function (customDrum) {
                return this.customDrumResource.edit(customDrum);
            };
            return CustomDrumService;
        }());
        Services.CustomDrumService = CustomDrumService;
        angular.module('creativedrums').service('customDrumService', CustomDrumService);
    })(Services = creativedrums.Services || (creativedrums.Services = {}));
})(creativedrums || (creativedrums = {}));
