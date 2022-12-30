// hidden meun and block 
const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener('click', function () {
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
        } else {
            menu.classList.add('hidden');
        }
    })

