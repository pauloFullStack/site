const button = document.getElementById("toggleTheme");

function toggleTheme() {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }

    hideThemeIcon();
}


if (button)
    button.addEventListener("click", toggleTheme);


if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
} else {
    document.documentElement.classList.remove("dark");
}

hideThemeIcon();

function hideThemeIcon(idLua = '#svg-lua', idSol = '#svg-sol') {

    if (localStorage.getItem("theme") === "dark") {
        document.querySelector(idLua).classList.remove('hidden');
        document.querySelector(idSol).classList.add('hidden');
    } else {
        document.querySelector(idLua).classList.add('hidden');
        document.querySelector(idSol).classList.remove('hidden');
    }

}

function toggleDropdown() {

    event.stopPropagation();

    // hideThemeIcon('#svg-lua-mobile', '#svg-sol-mobile');

    document.getElementById("dropdown").classList.toggle("hidden");
}


document.addEventListener("click", function () {
    let dropdown = document.getElementById("dropdown");
    dropdown.classList.add("hidden");
});