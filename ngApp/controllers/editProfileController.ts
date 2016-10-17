namespace creativedrums.Controllers {
    export class EditProfileController {
        public username;
        public email;

        constructor(private loginService: creativedrums.Services.LoginService,
                    ){
            this.username = this.loginService.getUsername();
            this.email = this.loginService.getEmail();
        }

        editProfile(){
            
        }

    }
}
