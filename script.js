let nav = document.querySelector(".nav")

function changeBackground() {
    if (window.scrollY > 20){
        nav.classList.add("scroll-nav")
    }
    else{
        nav.classList.remove("scroll-nav")
    }

    
   
}
window.addEventListener("scroll",changeBackground)
