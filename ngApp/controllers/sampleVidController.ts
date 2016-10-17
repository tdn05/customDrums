namespace creativedrums.Controllers {
    export class SampleVidController {
        public instrument;

        constructor(private instrumentService: creativedrums.Services.InstrumentService,
                    public instId,
                    private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance){
                        this.getInstrument();

        }

        getInstrument(){
            this.instrument = this.instrumentService.getInstrument(this.instId)
        }
        closeModal(){
            this.$uibModalInstance.close();
        }
    }
}
