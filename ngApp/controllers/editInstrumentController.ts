namespace creativedrums.Controllers {
    export class EditInstrumentController {
        public instrument;
        private instId;

        constructor (private instrumentService: creativedrums.Services.InstrumentService,
                    private $stateParams: ng.ui.IStateService,
                    private $state: ng.ui.IStateService){
                        this.instId = this.$stateParams['id'];
                        this.getInstrument();
        }

        getInstrument(){
            this.instrument = this.instrumentService.getInstrument(this.instId)
        }

        editInstrument(){
            this.instrumentService.editInstrument(this.instrument).then(()=>{
                this.getInstrument()
                this.$state.go('instrumentDetails', {id: this.instId});
            }).catch(()=>{
                console.log('Something went wrong...')
            })
        }
        cancelEdit(){
            this.$state.go('instrumentDetails', {id: this.instId});
        }
    }
}
