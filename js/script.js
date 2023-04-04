const menuOpen = document.querySelector("#open-menu");
const menuClose = document.querySelector("#close-menu");
const menu = document.querySelector(".menu");
const outerModal = document.querySelector(".outer-modal");
const featureDiv = document.querySelectorAll(".feature");
const companyDiv = document.querySelectorAll(".company");
const featureChildren = document.querySelector("#feature-children");
const companyChildren = document.querySelector("#company-children");
const featureArrow = document.querySelector(".arrows.feature");
const companyArrow = document.querySelector(".arrows.company");
const menuLinks = document.querySelectorAll(".content a");
const learnMoreButton = document.querySelector("#learn-more");

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
    if (e.type === "mouseover" || e.key === "Enter") {
        featureChildren.classList.add("open");
        featureArrow.innerHTML = `<img src="./images/icon-arrow-up.svg">`;
    } else if (e.type === "mouseout" || e.key === "Escape") {
        featureChildren.classList.remove("open");
        featureArrow.innerHTML = `<img src="./images/icon-arrow-down.svg">`;
    }
};
featureDiv.forEach((feature) => feature.addEventListener("mouseover", featureChildDisplay));
featureDiv.forEach((feature) => feature.addEventListener("mouseout", featureChildDisplay));
featureDiv.forEach((feature) => feature.addEventListener("keyup", featureChildDisplay));

function companyChildDisplay (e) {
    if (e.type === "mouseover" || e.key === "Enter") {
        companyChildren.classList.add("open");
        companyArrow.innerHTML = `<img src="./images/icon-arrow-up.svg">`;
    } else if (e.type === "mouseout" || e.key === "Escape") {
        companyChildren.classList.remove("open");
        companyArrow.innerHTML = `<img src="./images/icon-arrow-down.svg">`;
    }
};
companyDiv.forEach((company) => company.addEventListener("mouseover", companyChildDisplay));
companyDiv.forEach((company) => company.addEventListener("mouseout", companyChildDisplay));
companyDiv.forEach((company) => company.addEventListener("keyup", companyChildDisplay));

menuLinks.forEach((link) => link.addEventListener("mouseover", () => link.style.color = "hsl(0, 0%, 8%)"));
menuLinks.forEach((link) => link.addEventListener("mouseout", () => link.style.color = "hsl(0, 0%, 41%)"));

learnMoreButton.addEventListener("mouseover", function() {
    learnMoreButton.style.color = "hsl(0, 0%, 8%)";
    learnMoreButton.style.background = "hsl(0, 0%, 98%)";
    learnMoreButton.style.border = "2px solid hsl(0, 0%, 8%)";
});
learnMoreButton.addEventListener("mouseout", function() {
    learnMoreButton.style.color = "hsl(0, 0%, 98%)";
    learnMoreButton.style.background = "hsl(0, 0%, 8%)";
    learnMoreButton.style.border = "none";
});



