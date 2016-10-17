namespace creativedrums.Controllers {
    export class BrandDetailsController {
        public instrument;
        // private customDrum;
        private id = '57fccb34469fbb2768e426a3';

        constructor(private brandService: creativedrums.Services.BrandService,
                    private instrumentService: creativedrums.Services.InstrumentService,
                    public brandId,
                    private $state:ng.ui.IStateService,
                    private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance,
                    private customDrumService: creativedrums.Services.CustomDrumService){
                        // this.customDrum = this.customDrumService.getCustomdrum();
                    
                        this.getInstrument();
        }
        getBrand(){
            this.instrument = this.brandService.getBrand(this.brandId)
        }
        getInstrument(){
            this.instrument = this.instrumentService.getInstrument(this.brandId);
        }
        getInstrumentDetails(id){
            this.$state.go('instrumentDetails', {id:id});
            this.$uibModalInstance.close();
        }
        saveInstrument(){
            this.customDrumService.saveToCart(this.id, this.instrument).then(()=>{
                this.$uibModalInstance.close();
            })
        }
    }

}
