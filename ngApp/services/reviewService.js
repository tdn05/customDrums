var creativedrums;
(function (creativedrums) {
    var Services;
    (function (Services) {
        var ReviewService = (function () {
            function ReviewService($resource) {
                this.$resource = $resource;
                this.reviewResources = $resource('api/reviews/:id');
            }
            ReviewService.prototype.deleteReview = function (id) {
                return this.reviewResources.delete({ id: id }).$promise;
            };
            return ReviewService;
        }());
        Services.ReviewService = ReviewService;
        angular.module('creativedrums').service('reviewService', ReviewService);
    })(Services = creativedrums.Services || (creativedrums.Services = {}));
})(creativedrums || (creativedrums = {}));
