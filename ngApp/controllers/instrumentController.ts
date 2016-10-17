namespace creativedrums.Controllers {
    export class InstrumentController {
        public instruments;
        private instId;
        public review = {};

        constructor(private instrumentService: creativedrums.Services.InstrumentService){
            this.getInstruments();
        }

        getInstruments(){
            this.instruments = this.instrumentService.getInstruments();
        }

        
    }
}
