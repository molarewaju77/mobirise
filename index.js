function changeBg(){
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY || windows.pageYOffset; 
    if(scrollValue < 20){
        navbar.classList.remove('bgColor'); 
    } else{
        navbar.classList.add('bgColor')
    }
}
window.addEventListener('scroll' , changeBg);
windows.addEventListener('touchmove' , changeBg);
