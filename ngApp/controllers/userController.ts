namespace creativedrums.Controllers {
    export class UserController {
        public username;
        public email;
        public customDrum;

        constructor(private loginService: creativedrums.Services.LoginService,
                    private customDrumService: creativedrums.Services.CustomDrumService,
                    private $uibModal:ng.ui.bootstrap.IModalService){

            this.getUsername();
            this.getEmail();
            // this.getCustomDrum();

        }

        getUsername(){
            this.username = this.loginService.getUsername();
        }

        getEmail(){
            this.email = this.loginService.getEmail();
        }

        // getCustomDrum(){
        //     this.customDrum =  this.customDrumService.getCustomdrum();
        // }
        editProfile(id){
            this.$uibModal.open({
                templateUrl:'ngApp/views/editProfile.html',
                controller: creativedrums.Controllers.EditProfileController,
                controllerAs:'vm',
                resolve: {
                    userId: ()=>id
                },
                size: 'lg'
            })
        }
    }
}
