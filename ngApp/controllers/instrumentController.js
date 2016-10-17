var creativedrums;
(function (creativedrums) {
    var Controllers;
    (function (Controllers) {
        var InstrumentController = (function () {
            function InstrumentController(instrumentService) {
                this.instrumentService = instrumentService;
                this.review = {};
                this.getInstruments();
            }
            InstrumentController.prototype.getInstruments = function () {
                this.instruments = this.instrumentService.getInstruments();
            };
            return InstrumentController;
        }());
        Controllers.InstrumentController = InstrumentController;
    })(Controllers = creativedrums.Controllers || (creativedrums.Controllers = {}));
})(creativedrums || (creativedrums = {}));
