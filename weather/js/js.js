function toggleMenu() {
    document.getElementsByClassName("navbar")[0].classList.toggle("responsive");
}

const date = new Date(document.lastModified);
document.getElementById("lastMod").innerHTML = date;