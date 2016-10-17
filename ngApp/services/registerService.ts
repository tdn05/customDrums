namespace creativedrums.Services {
    export class RegisterService {
        private userResource;

        constructor(private $resource: ng.resource.IResourceService,
                    private $http: ng.IHttpService,
                    private $q: ng.IQService,
                    private $window: ng.IWindowService){
        }
        // saveUser(user){
        //     console.log(user);
        //     return this.userResource.save(user).$promise;
        //
        // }
        saveUser(user){
            return this.$q((resolve,reject)=>{
                this.$http.post('/api/users/register', user)
                .then((data:any)=>{
                    console.log(data);
                    let admin = data.data.admin;
                    let username = data.data.username;
                    let email = data.data.email;

                    this.$window.localStorage.setItem('username', username);
                    this.$window.localStorage.setItem('admin', admin);
                    this.$window.localStorage.setItem('email', email);

                    resolve()
                })
                .catch((err)=>{
                    reject(err)
                })
            })
        }
    }
    angular.module('creativedrums').service('registerService', RegisterService);
}
