const menuOpen = document.querySelector("#open-menu");
const menuClose = document.querySelector("#close-menu");
const menu = document.querySelector(".menu");
const outerModal = document.querySelector(".outer-modal");
const featureParent = document.querySelector(".parent.feature");
const companyParent = document.querySelector(".parent.company");
const featureChildren = document.querySelectorAll(".child.feature");
const companyChildren = document.querySelectorAll(".child.company");

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

// Deal with Operating Menu
function featureChildDisplay (e) {
    if (e.type === "click" || e.key === "Enter") {
        featureChildren.forEach(featureChild => {
            if (featureChild.style.display = "none") {
                featureChild.style.display = "block";
                console.log("open");
            } else if (featureChild.style.display = "block") {
                featureChild.style.display = "none";
                console.log("close");
            }
        });
    }
};
featureParent.addEventListener("click", featureChildDisplay);
featureParent.addEventListener("keyup", featureChildDisplay);

function companyChildDisplay (e) {
    if (e.type === "click" || e.key === "Enter") {
        companyChildren.forEach(companyChild => {
            if (companyChild.style.display = "none") {
                companyChild.style.display = "block";
                console.log("open");
            } else if (companyChild.style.display = "block") {
                companyChild.style.display = "none";
                console.log("close");
            }
        });
    }
};
companyParent.addEventListener("click", companyChildDisplay);
companyParent.addEventListener("keyup", companyChildDisplay);



