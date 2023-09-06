
        //set the dark mode based on user choice
        function setDarkMode(darkModeEnabled) {
            const body = document.body;
            const icon = document.getElementById("moon");
            const buttonSpan=document.getElementById("dark-name")
            if (darkModeEnabled) {
                body.classList.add("dark-mode");
                icon.name = "sunny-outline";
                buttonSpan.innerHTML="Light Mode"
            } else {
                body.classList.remove("dark-mode");
                icon.name = "moon-outline";
                buttonSpan.innerHTML="Dark Mode";
            }

            localStorage.setItem("darkMode", darkModeEnabled);
        }

        // Function to toggle dark mode on button click
        function toggleDarkMode() {
            const body = document.body;
            const darkModeEnabled = body.classList.contains("dark-mode");
            setDarkMode(!darkModeEnabled);
        }

        // Check if the user has a preference in localStorage
        const storedDarkMode = localStorage.getItem("darkMode");

        if (storedDarkMode === "true") {
            setDarkMode(true);
        } else if (storedDarkMode === "false") {
            setDarkMode(false);
        } 
        var darkMode = document.getElementById("dark-mode");
        darkMode.addEventListener("click", toggleDarkMode);

