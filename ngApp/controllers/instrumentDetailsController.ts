namespace creativedrums.Controllers {
    export class InstrumentDetailsController {
        public instrument;
        private instId;
        public review = {};
        public username;

        constructor(private instrumentService: creativedrums.Services.InstrumentService,
                    private $stateParams:ng.ui.IStateParamsService,
                    private $uibModal:ng.ui.bootstrap.IModalService,
                    private loginService: creativedrums.Services.LoginService,
                    private reviewService: creativedrums.Services.ReviewService){
                        let instId = this.$stateParams['id'];
                        this.getInstrument(instId);
                        this.getUsername();
        }

        getInstrument(instId){
            this.instrument = this.instrumentService.getInstrument(instId)
        }

        getSampleVid(id){
            this.$uibModal.open({
                templateUrl: 'ngApp/views/sampleVid.html',
                controller: creativedrums.Controllers.SampleVidController,
                controllerAs: 'vm',
                resolve: {
                    instId: ()=>id,
                },
                size: 'lg'
            });
        }

        getUsername(){
            this.username = this.loginService.getUsername();
        }

        saveReview(instId){
            this.instrumentService.saveReview(instId, this.review).then(()=>{
                this.getInstrument(instId);
                this.review ='';
            }).catch(()=>{
                console.log('Something went wrong...')
            });
        }

        deleteReview(id){
            this.reviewService.deleteReview(id).then(()=>{
                this.getInstrument(this.instId);
            }).catch(()=>{
                console.log('Something went wrong...')
            })
        }

    }
}
