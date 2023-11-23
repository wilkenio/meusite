//FUNÇÃO DO MENU NO MOBILE
function menuabrir(x) {


    if (window.screen.availWidth < 1050) {
        var menumobile = document.getElementById("menu-mobile")
        var ham = document.getElementById("x")

        x.style.display = "none"
        ham.style.display = "block"
        menumobile.style.left = "0%"
    } else {
        //ocultando textos
        var textMenu = document.getElementsByClassName("nome-menu");
        for (var i = 0; i < textMenu.length; i++) {
            textMenu[i].style.display = "none";
        }
        //alinhando os icones a direita
        var itensMenu = document.getElementsByClassName("itens-menu");
        for (var i = 0; i < itensMenu.length; i++) {
            itensMenu[i].style.justifyContent="end"
        }
        var menuTodo = document.getElementById("menu-todo");
        menuTodo.style.left="-14%"
        

     

    }

}

function menufechar(x) {
    var menumobile = document.getElementById("menu-mobile")
    var ham = document.getElementById("ham")

    x.style.display = "none"
    ham.style.display = "block"
    menumobile.style.left = "100%"
}