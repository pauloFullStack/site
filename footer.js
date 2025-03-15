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

function anchor(id, isMobile = false) {
    const anchor = document.getElementById(id);
    
    // Rola até o elemento, mas ajusta a posição para cima
    if(!isMobile){

        window.scrollTo({
            top: anchor.offsetTop - 60,  // Ajuste de 10px acima da posição da âncora
            behavior: 'smooth'
        });
    }else{

        window.scrollTo({
            top: anchor.offsetTop - 70,  // Ajuste de 10px acima da posição da âncora
            behavior: 'smooth'
        });
    }
}