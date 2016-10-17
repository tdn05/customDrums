var creativedrums;
(function (creativedrums) {
    var Controllers;
    (function (Controllers) {
        var InstrumentDetailsController = (function () {
            function InstrumentDetailsController(instrumentService, $stateParams, $uibModal, loginService, reviewService) {
                this.instrumentService = instrumentService;
                this.$stateParams = $stateParams;
                this.$uibModal = $uibModal;
                this.loginService = loginService;
                this.reviewService = reviewService;
                this.review = {};
                var instId = this.$stateParams['id'];
                this.getInstrument(instId);
                this.getUsername();
            }
            InstrumentDetailsController.prototype.getInstrument = function (instId) {
                this.instrument = this.instrumentService.getInstrument(instId);
            };
            InstrumentDetailsController.prototype.getSampleVid = function (id) {
                this.$uibModal.open({
                    templateUrl: 'ngApp/views/sampleVid.html',
                    controller: creativedrums.Controllers.SampleVidController,
                    controllerAs: 'vm',
                    resolve: {
                        instId: function () { return id; },
                    },
                    size: 'lg'
                });
            };
            InstrumentDetailsController.prototype.getUsername = function () {
                this.username = this.loginService.getUsername();
            };
            InstrumentDetailsController.prototype.saveReview = function (instId) {
                var _this = this;
                this.instrumentService.saveReview(instId, this.review).then(function () {
                    _this.getInstrument(instId);
                    _this.review = '';
                }).catch(function () {
                    console.log('Something went wrong...');
                });
            };
            InstrumentDetailsController.prototype.deleteReview = function (id) {
                var _this = this;
                this.reviewService.deleteReview(id).then(function () {
                    _this.getInstrument(_this.instId);
                }).catch(function () {
                    console.log('Something went wrong...');
                });
            };
            return InstrumentDetailsController;
        }());
        Controllers.InstrumentDetailsController = InstrumentDetailsController;
    })(Controllers = creativedrums.Controllers || (creativedrums.Controllers = {}));
})(creativedrums || (creativedrums = {}));
