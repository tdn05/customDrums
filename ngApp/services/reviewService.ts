namespace creativedrums.Services {
    export class ReviewService {
        public reviewResources;

        constructor(private $resource:ng.resource.IResourceService){
            this.reviewResources = $resource('api/reviews/:id')
        }

    deleteReview(id){
        return this.reviewResources.delete({id: id}).$promise;
    }
    }
    angular.module('creativedrums').service('reviewService', ReviewService);
}
