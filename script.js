const menuButton =document.getElementById("menuButton");
const navLinks=document.querySelector(".nav-links");

menuButton.addEventListener("click",()=>{
    navLinks.classList.toggle("active");
})

navLinks.querySelectorAll("a").forEach(link =>{
    link.addEventListener("click", () =>{
        navLinks.classList.remove("active")
    });
});