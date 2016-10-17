namespace creativedrums.Services {
    export class BrandService {
        public brandResources;

        constructor(private $resource:ng.resource.IResourceService){
            this.brandResources = $resource('/api/brands/:id')
        }

        getBrands(){
            return this.brandResources.query();
        }

        getBrand(id){
            return this.brandResources.get({id: id})
        }

    }
    angular.module('creativedrums').service('brandService', BrandService);
}
