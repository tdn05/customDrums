namespace creativedrums.Controllers {
    export class LoginController {
        public loginInfo;
        private userName;

        constructor(private loginService: creativedrums.Services.LoginService,
                    private $state: ng.ui.IStateService,
                    private customDrumService: creativedrums.Services.CustomDrumService){
                        this.userName = this.loginService.getUsername();
        }

        login(){
            this.loginService.login(this.loginInfo)
            .then(()=>{
                this.customDrumService.editCustomDrum(this.userName);
                this.$state.go('brand')
            })
            .catch(()=>{
                alert('login failed')
            })
        }

    }
}
