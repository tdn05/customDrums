namespace creativedrums.Services {
    export class CustomDrumService {
        public customDrumResource;

        constructor($resource:ng.resource.IResourceService){
            this.customDrumResource = $resource('/api/customDrums/:id', null, {
                edit: {
                    method: 'PUT',
                    url: '/api/customDrums'
                },
                saveToCart: {
                    method: 'POST',
                    url: '/api/customDrums/instrument/:drId'
                },

            });
        };

        getCustomdrums(){
            return this.customDrumResource.query()
        };
        // getCustomDrum(){
        //     return this.customDrumResource.get()
        // }

        saveToCart(drId, instrument){
            return this.customDrumResource.saveToCart({drId: drId}, instrument).$promise;
        }
        getId(id){
            return this.customDrumResource.getId();
        }
        editCustomDrum(customDrum){
            return this.customDrumResource.edit(customDrum);
        }
    }
    angular.module('creativedrums').service('customDrumService', CustomDrumService);
}
