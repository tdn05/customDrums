namespace creativedrums.Controllers {
    export class RegisterController {
        public user;

        constructor(private registerService: creativedrums.Services.RegisterService,
                    private $state: ng.ui.IStateService,
                    private loginService: creativedrums.Services.LoginService){

                    }
        saveUser(){
            this.registerService.saveUser(this.user)
            .then(()=>{
                this.$state.go('home');
                this.loginService.getUsername();
            })
            .catch(()=>{
                console.log('something went wrong')
            })
        }
    }
}
