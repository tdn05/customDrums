var creativedrums;
(function (creativedrums) {
    var Services;
    (function (Services) {
        var InstrumentService = (function () {
            function InstrumentService($resource) {
                this.$resource = $resource;
                this.instrumentResources = $resource('api/instruments/:id', null, {
                    edit: {
                        method: 'PUT',
                        url: '/api/instruments'
                    },
                    saveReview: {
                        method: 'POST',
                        url: '/api/instruments/reviews/:instId'
                    }
                });
            }
            InstrumentService.prototype.getInstruments = function () {
                return this.instrumentResources.query();
            };
            InstrumentService.prototype.getInstrument = function (id) {
                return this.instrumentResources.get({ id: id });
            };
            InstrumentService.prototype.saveReview = function (instId, review) {
                return this.instrumentResources.saveReview({ instId: instId }, review).$promise;
            };
            InstrumentService.prototype.editInstrument = function (instrument) {
                return this.instrumentResources.edit(instrument).$promise;
            };
            return InstrumentService;
        }());
        Services.InstrumentService = InstrumentService;
        angular.module('creativedrums').service('instrumentService', InstrumentService);
    })(Services = creativedrums.Services || (creativedrums.Services = {}));
})(creativedrums || (creativedrums = {}));
