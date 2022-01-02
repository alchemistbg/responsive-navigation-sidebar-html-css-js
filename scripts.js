const btnToggle = document.querySelector(".btn-toggle");
const sidebar = document.querySelector(".sidebar");
const logo = document.querySelector(".logo");
const mainContent = document.querySelector(".main-content");
const listItems = document.querySelectorAll(".list-item");

btnToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    if (sidebar.classList.contains("active")) {
        logo.setAttribute("style", "display: flex");
        // setTimeout(() => {
        //     logo.setAttribute("style", "display: flex");
        //     listItems.forEach((listItem) => {
        //         listItem.setAttribute("style", "display: flex");
        //     });
        // }, 200);
        mainContent.setAttribute("style", "left: 240px; width: calc(100% - 240px)");
        return;
    }
    else {
        // listItems.forEach((listItem) => {
        //     listItem.setAttribute("style", "display: none");
        // });
    }

    logo.setAttribute("style", "display: none");
    mainContent.setAttribute("style", "left: 85px");
});