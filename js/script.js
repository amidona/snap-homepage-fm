const menuOpen = document.querySelector("#open-menu");
const menuClose = document.querySelector("#close-menu");
const menu = document.querySelector(".menu");
const outerModal = document.querySelector(".outer-modal");
const featureParent = document.querySelector(".parent.feature");
const companyParent = document.querySelector(".parent.company");
const featureChildren = document.querySelector("#feature-children");
const companyChildren = document.querySelector("#company-children");
const featureArrow = document.querySelector(".arrows.feature");
const companyArrow = document.querySelector(".arrows.company");

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
            featureArrow.innerHTML = `<img src="./images/icon-arrow-down.svg">`
        } else {
            featureChildren.classList.add("open");
            featureArrow.innerHTML = `<img src="./images/icon-arrow-up.svg">`
        }
    }
};
featureParent.addEventListener("click", featureChildDisplay);
featureParent.addEventListener("keyup", featureChildDisplay);

function companyChildDisplay (e) {
    if (e.type === "click" || e.key === "Enter") {
        if (companyChildren.classList.contains("open")) {
            companyChildren.classList.remove("open");
            companyArrow.innerHTML = `<img src="./images/icon-arrow-down.svg">`
        } else {
            companyChildren.classList.add("open");   
            companyArrow.innerHTML = `<img src="./images/icon-arrow-up.svg">`  
        }
    }
};
companyParent.addEventListener("click", companyChildDisplay);
companyParent.addEventListener("keyup", companyChildDisplay);



