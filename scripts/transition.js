// document.addEventListener("DOMContentLoaded", () => {
//     const body = document.body;

//     // Apply slide-in effect on page load
//     body.classList.add("slide-in");

//     // Add click event listener to all links for slide-out effect
//     document.querySelectorAll("a").forEach(link => {
//         link.addEventListener("click", event => {
//             const href = link.getAttribute("href");

//             // Ensure the link is not external or a hash link
//             if (href && !href.startsWith("#") && !link.target) {
//                 event.preventDefault();
//                 body.classList.add("slide-out");

//                 // Wait for the slide-out effect to complete before navigating
//                 setTimeout(() => {
//                     window.location.href = href;
//                 }, 500); // Match the CSS transition duration
//             }
//         });
//     });
// });
