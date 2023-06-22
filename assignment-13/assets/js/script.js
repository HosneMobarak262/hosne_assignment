// Dark modes
// Toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

// Check for dark mode preference in local storage
const darkModePref = localStorage.getItem("darkMode");
if (darkModePref === "true") {
    toggleDarkMode();
}

// Listen for dark mode switch change event
const darkModeSwitch = document.getElementById("darkModeSwitch");
darkModeSwitch.addEventListener("change", function() {
    toggleDarkMode();
    // Store dark mode preference in local storage
    localStorage.setItem("darkMode", darkModeSwitch.checked);
});
