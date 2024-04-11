function changeBg() {
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY || window.pageYOffset; 
    if(scrollValue < 20){
        navbar.classList.remove('bgColor'); 
    } else{
        navbar.classList.add('bgColor')
    }
    function animate() {
        requestAnimationFrame(changeBg);
    }
}
window.addEventListener('scroll' , changeBg);
window.addEventListener('touchmove' , changeBg);