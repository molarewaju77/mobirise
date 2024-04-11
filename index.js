function changeBg() {
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY || window.pageYoffset; 
    if(scrollValue < 20){
        navbar.classList.remove('bgColor'); 
    } else{
        navbar.classList.add('bgColor')
    }
}
window.addEventListener('scroll' , changeBg);
window.addEventListener('touchmove' , changeBg);