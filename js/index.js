const btnMobile = document.getElementById("btn-mobile");
const navMobile = document.getElementById("navegacao-mobile");
const linksMobile = document.querySelectorAll("#navegacao-mobile a");
btnMobile.setAttribute("aria-expanded", "true");

btnMobile.addEventListener("click", () => {
    navMobile.classList.toggle("open-sidebar");
    document.body.classList.toggle("menu-open");
});

linksMobile.forEach(link => {
    link.addEventListener("click", () => {
        navMobile.classList.remove("open-sidebar");
        document.body.classList.remove("menu-open");
    });
});
