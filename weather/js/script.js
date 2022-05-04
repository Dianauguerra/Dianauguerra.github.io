//Hamburger//
function toggleMenu() {
    document.getElementsByClassName("navbar")[0].classList.toggle("responsive");
}

//Last Mod//
const date = new Date(document.lastModified);
document.getElementById("lastMod").innerHTML = date;

//Banner//
const banner = document.querySelector("#prestonbanner");
const bannerdate = new Date();
const day = bannerdate.getDay();
if (day == 5) {
  banner.style.display = "block";
    
} else {
  banner.style.display = "none";
}
