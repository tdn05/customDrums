var creativedrums;
(function (creativedrums) {
    var Controllers;
    (function (Controllers) {
        var SampleVidController = (function () {
            function SampleVidController(instrumentService, instId, $uibModalInstance) {
                this.instrumentService = instrumentService;
                this.instId = instId;
                this.$uibModalInstance = $uibModalInstance;
                this.getInstrument();
            }
            SampleVidController.prototype.getInstrument = function () {
                this.instrument = this.instrumentService.getInstrument(this.instId);
            };
            SampleVidController.prototype.closeModal = function () {
                this.$uibModalInstance.close();
            };
            return SampleVidController;
        }());
        Controllers.SampleVidController = SampleVidController;
    })(Controllers = creativedrums.Controllers || (creativedrums.Controllers = {}));
})(creativedrums || (creativedrums = {}));
