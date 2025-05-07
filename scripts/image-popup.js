document.addEventListener("DOMContentLoaded", () => {
    const renderImages = document.querySelectorAll(".renderImgs img");
    const popup = document.getElementById("imagePopup");
    const popupImage = document.getElementById("popupImage");
    const closePopup = document.getElementById("closePopup");

    renderImages.forEach((img) => {
        img.addEventListener("click", () => {
            popupImage.src = img.src;
            popup.style.display = "flex";
        });
    });

    const closePopupHandler = () => {
        popup.style.display = "none";
        popupImage.src = "";
    };

    closePopup.addEventListener("click", closePopupHandler);

    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            closePopupHandler();
        }
    });
});
