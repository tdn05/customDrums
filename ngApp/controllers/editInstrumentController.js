var creativedrums;
(function (creativedrums) {
    var Controllers;
    (function (Controllers) {
        var EditInstrumentController = (function () {
            function EditInstrumentController(instrumentService, $stateParams, $state) {
                this.instrumentService = instrumentService;
                this.$stateParams = $stateParams;
                this.$state = $state;
                this.instId = this.$stateParams['id'];
                this.getInstrument();
            }
            EditInstrumentController.prototype.getInstrument = function () {
                this.instrument = this.instrumentService.getInstrument(this.instId);
            };
            EditInstrumentController.prototype.editInstrument = function () {
                var _this = this;
                this.instrumentService.editInstrument(this.instrument).then(function () {
                    _this.getInstrument();
                    _this.$state.go('instrumentDetails', { id: _this.instId });
                }).catch(function () {
                    console.log('Something went wrong...');
                });
            };
            EditInstrumentController.prototype.cancelEdit = function () {
                this.$state.go('instrumentDetails', { id: this.instId });
            };
            return EditInstrumentController;
        }());
        Controllers.EditInstrumentController = EditInstrumentController;
    })(Controllers = creativedrums.Controllers || (creativedrums.Controllers = {}));
})(creativedrums || (creativedrums = {}));
