const box1 = document.querySelector('.box1')
const box = document.querySelectorAll('.box');

window.addEventListener('scroll',()=>{
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
})