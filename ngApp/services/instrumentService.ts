namespace creativedrums.Services {
    export class InstrumentService {
        public instrumentResources;

        constructor(private $resource: ng.resource.IResourceService){
            this.instrumentResources = $resource('api/instruments/:id', null, {
                edit: {
                    method: 'PUT',
                    url: '/api/instruments'
                },
                saveReview: {
                    method: 'POST',
                    url: '/api/instruments/reviews/:instId'
                }
            })
        }

        getInstruments(){
            return this.instrumentResources.query();
        }

        getInstrument(id){
            return this.instrumentResources.get({id: id})
        }

        saveReview(instId, review){
            return this.instrumentResources.saveReview({instId: instId}, review).$promise;
        }

        editInstrument(instrument){
            return this.instrumentResources.edit(instrument).$promise;
        }
    }
    angular.module('creativedrums').service('instrumentService', InstrumentService);
}
