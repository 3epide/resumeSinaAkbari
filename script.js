const menuButton =document.getElementById("menuButton");
const navLinks=document.querySelector(".nav-links");
const toggle=document.getElementById("languageToggle")

menuButton.addEventListener("click",()=>{
    navLinks.classList.toggle("active");
})

navLinks.querySelectorAll("a").forEach(link =>{
    link.addEventListener("click", () =>{
        navLinks.classList.remove("active")
    });
});

toggle.addEventListener("click",() => {
    toggle.classList.toggle("active");

    
})