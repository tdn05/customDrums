namespace creativedrums.Services {
    export class LoginService {
        public userResource;

        constructor(private $http: ng.IHttpService,
                    private $window: ng.IWindowService,
                    private $q: ng.IQService,
                    private $resource: ng.resource.IResourceService){
                        this.userResource = $resource('/api/users/:id', null, {

                            edit: {
                                method: 'PUT',
                                url: '/api/questions'
                            }
                        });

        }

        editProfile(user){
            return this.userResource.edit(user);
        }

        isAdmin(){
            return this.$window.localStorage.getItem('admin');
        }

        getUsername(){
            return this.$window.localStorage.getItem('username');
        }

        getEmail(){
            return this.$window.localStorage.getItem('email');
        }
        
        getToken(){
            return this.$window.localStorage.getItem('token')
        }

        login(loginInfo){
            return this.$q((resolve,reject)=>{

                this.$http
                .post('/api/users/login', loginInfo)
                .then((data:any)=>{
                    let token = data.data.token;
                    let admin = data.data.admin;
                    let username = data.data.username;
                    let email = data.data.email;

                    this.$window.localStorage.setItem('token', token);
                    this.$window.localStorage.setItem('username', username);
                    this.$window.localStorage.setItem('admin', admin);
                    this.$window.localStorage.setItem('email', email);

                    resolve()

                })
                .catch((err)=>{
                    reject(err)
                })

            });
        }

        logout(){
            this.$window.localStorage.removeItem('token');
            this.$window.localStorage.removeItem('username');
            this.$window.localStorage.removeItem('admin');
            this.$window.localStorage.removeItem('email');
        }
    }
    angular.module('creativedrums').service('loginService', LoginService);
}
