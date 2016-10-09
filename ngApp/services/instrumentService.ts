namespace creativedrums.Services {
    export class InstrumentService {
        public instrumentResources;

        constructor(private $resource: ng.resource.IResourceService){
            this.instrumentResources = $resource('api/instruments/:id')
        }

        getInstruments(){
            return this.instrumentResources.query();
        }

        getInstrument(id){
            return this.instrumentResources.get({id: id})
        }
    }
    angular.module('creativedrums').service('instrumentService', InstrumentService);
}
