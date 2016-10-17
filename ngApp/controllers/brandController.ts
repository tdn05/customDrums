namespace creativedrums.Controllers {
    export class BrandController {
        public brands;
        public newBrand;

        constructor(private brandService: creativedrums.Services.BrandService,
                    private $uibModal:ng.ui.bootstrap.IModalService){
            this.getBrands();
            // this.getTab();
            this.newBrand = "DW";

        }

        getBrands(){
            this.brands = this.brandService.getBrands();
        }
        getBrandDetails(id){
            this.$uibModal.open({
                templateUrl: 'ngApp/views/brandDetails.html',
                controller: creativedrums.Controllers.BrandDetailsController,
                controllerAs: 'vm',
                resolve: {
                    brandId: ()=>id,
                },
                size: 'lg'
            });
        }
        getTab(brand){
            this.newBrand = brand;
            // document.querySelector('.drum' + brand).setAttribute('class', 'active')
            // let classes = document.querySelector('#drum' + brand).getAttribute('class');
            // classes += ' active';
            let elms = document.querySelectorAll('.active');
            for(let e of elms){
                e.setAttribute('class', '');
            }
            document.querySelector('#drum' + brand).setAttribute('class', 'active');

        }
    }
}
