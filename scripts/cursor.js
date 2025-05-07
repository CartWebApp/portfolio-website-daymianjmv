// Add custom cursor functionality
document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    document.querySelectorAll(".pointer-hover").forEach((element) => {
        element.addEventListener("mouseenter", () => {
            cursor.classList.add("cursor-hover");
        });
        element.addEventListener("mouseleave", () => {
            cursor.classList.remove("cursor-hover");
        });
    });

    document.querySelectorAll(".light-bg-hover").forEach((element) => {
        element.addEventListener("mouseenter", () => {
            cursor.style.borderColor = "rgba(0, 0, 0, 0.8)";
        });
        element.addEventListener("mouseleave", () => {
            cursor.style.borderColor = "rgba(255, 255, 255, 0.8)";
        });
    });

    // Ensure cursor stays on top of the image popup
    const popup = document.getElementById("imagePopup");
    if (popup) {
        popup.addEventListener("mouseenter", () => {
            cursor.style.zIndex = "10001";
        });
        popup.addEventListener("mouseleave", () => {
            cursor.style.zIndex = "9999";
        });
    }
});
