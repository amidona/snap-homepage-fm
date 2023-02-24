const menuOpen = document.querySelector("#open-menu");
const menuClose = document.querySelector("#close-menu");
const menu = document.querySelector(".menu");
const outerModal = document.querySelector(".outer-modal");
const featureParent = document.querySelector(".parent.feature");
const companyParent = document.querySelector(".parent.company");
const featureChildren = document.querySelector("#feature-children");
const companyChildren = document.querySelector("#company-children");

// Deal with Opening and Closing Menu
function openMenu(e) {
    if (e.type === "click" || e.key === "Enter") {
        menu.classList.add("open");
    }
};

function closeMenu(e) {
    if (e.type === "click" || e.key === "Enter") {
        menu.classList.remove("open");
    }
}

menuOpen.onclick = openMenu;
menuOpen.onkeyup = openMenu;
menuClose.onclick = closeMenu;
menuClose.onkeyup = closeMenu;
outerModal.addEventListener("click", (e) => {
    const isOutside = !e.target.closest(".inner-modal");
    if (isOutside) {
        menu.classList.remove("open");
    }
});
window.addEventListener("keyup", (e) => {
    if (e.key === "Escape" && menu.classList.contains("open")) {
        menu.classList.remove("open");
    }
});

// Deal with Menu
function featureChildDisplay (e) {
    if (e.type === "click" || e.key === "Enter") {
        if (featureChildren.classList.contains("open")) {
            featureChildren.classList.remove("open");
        } else {
            featureChildren.classList.add("open");     
        }
    }
};
featureParent.addEventListener("click", featureChildDisplay);
featureParent.addEventListener("keyup", featureChildDisplay);

function companyChildDisplay (e) {
    if (e.type === "click" || e.key === "Enter") {
        if (companyChildren.classList.contains("open")) {
            companyChildren.classList.remove("open");
        } else {
            companyChildren.classList.add("open");     
        }
    }
};
companyParent.addEventListener("click", companyChildDisplay);
companyParent.addEventListener("keyup", companyChildDisplay);



