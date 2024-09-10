let menuList = document.getElementById("menu-list");
menuList.style.height = "0px";

function toggleMenu() {
    if (menuList.style.height  === "0px") {
        menuList.style.height  = "250px"; // Include 'px' for the unit
    } else {
        menuList.style.height  = "0px";
    }
}
let bar = document.getElementById("bar");
let image= ducument.getElementById("image");
bar.addEventListener("click", ()=>{
    image.style.display="none"
})

