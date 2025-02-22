const button = document.getElementById("toggleTheme");

function toggleTheme() {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
}

if (button)
    button.addEventListener("click", toggleTheme);
