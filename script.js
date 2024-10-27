// JavaScript for future interactivity, like adding animation or form handling
// Example function to show an alert when clicking on a project link

document.addEventListener("DOMContentLoaded", () => {
    const projectLinks = document.querySelectorAll("a");
    
    projectLinks.forEach(link => {
        link.addEventListener("click", () => {
            alert("You’re visiting a project link!");
        });
    });
});
