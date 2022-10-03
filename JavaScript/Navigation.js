const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions(){
    //Button click Active class
    for(let i =0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.control-1.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('control-1 active-btn', '');
            this.className += ' control-1 active-btn';
        })
    }

    //Section active
    allSections.addEventListener('click', (e) =>{
        console.log(e.target);
    })
}

PageTransitions();