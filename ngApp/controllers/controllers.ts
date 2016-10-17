namespace creativedrums.Controllers {

    export class HomeController {


        removeImage(){
            let x = document.querySelector('body');
            x.setAttribute('class', '');
        }

        setImage(){
            let x = document.querySelector('body');
            x.setAttribute('class', 'mainIndex')
        }
    }


    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
