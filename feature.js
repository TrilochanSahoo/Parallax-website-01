const image = document.querySelectorAll('.img');

window.addEventListener('scroll',()=>{
    
    let offset = window.pageYOffset;
    // console.log("this is first "+image.style.backgroundPositionY)
    // image.style.backgroundPositionY =offset * 0.7 +"px";
    // console.log(image.style.backgroundPositionY)
    image.forEach((container,i)=>{

        container.style.backgroundPositionY = (offset-container.offsetTop)*0.6+'px';
        if(window.pageYOffset!=0){
            container.style.filter="grayscale(100%)";
        }
    })
})