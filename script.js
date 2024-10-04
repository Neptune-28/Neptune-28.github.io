document.addEventListener('DOMContentLoaded', function() {
    const logo = document.getElementById('theme-logo');
    
    logo.addEventListener('click', function() {
        // Toggle the dark theme
        document.body.classList.toggle('dark-theme');

        // Switch logo based on the theme
        if (document.body.classList.contains('dark-theme')) {
            logo.src = 'I/sun.png';  // Set sun logo for light theme
        } else {
            logo.src = 'I/moon.png'; // Set moon logo for dark theme
        }
    });
});
window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    loader.style.display = "none";
    document.body.classList.remove("loading");
  });

  // Add a loading class initially
  document.body.classList.add("loading");
