tailwind.config = {
    darkMode: 'class'
};

if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
} else {
    document.documentElement.classList.remove("dark");
}