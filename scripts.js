const btnToggle = document.querySelector(".btn-toggle");
const sidebar = document.querySelector(".sidebar");
const logo = document.querySelector(".logo");
const mainContent = document.querySelector(".main-content");

btnToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    if (sidebar.classList.contains("active")) {
        logo.setAttribute("style", "display: flex");
        mainContent.setAttribute("style", "left: 240px; width: calc(100% - 240px)");
        return;
    }
    logo.setAttribute("style", "display: none");
    mainContent.setAttribute("style", "left: 85px");
});