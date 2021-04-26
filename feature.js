const box1 = document.querySelector('.box1')
const box = document.querySelectorAll('.box');
const picture =document.querySelectorAll('.slide-in');


function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
};

function checkslideing(){
    picture.forEach(slideImage => {
        const slide = (window.scrollY + window.innerHeight)-slideImage.height/2;
        const imageBottom = (slideImage.offsetTop + slideImage.height);
        const halfvisible = slide > slideImage.offsetTop;
        const notscrolled = window.scrollY < imageBottom ;
        if(halfvisible && notscrolled){
            slideImage.classList.add('active');
        }
        else{
            slideImage.classList.remove('active');
        }
    })
}

function addAnimation(){
    let offset = window.pageYOffset;
    // console.log("this is first "+image.style.backgroundPositionY)
    box1.style.backgroundPositionY =offset * 0.7 +"px";
    if(window.pageYOffset!=0){
        box1.style.filter="grayscale(100%)";
    }else{
        box1.style.filter="grayscale(0%)";
    }
    // console.log(image.style.backgroundPositionY)
    box.forEach((container,i)=>{
        console.log("offset value after="+offset)
        container.style.backgroundPositionY = (offset-container.offsetTop)*0.6+'px';
    })

    box1.style.opacity = 1-(offset/500);
    box1.style.top = +offset+'px';

    debounce(checkslideing())
}

window.addEventListener('scroll',addAnimation)
// window.addEventListener('scroll',debounce(checkslideing));