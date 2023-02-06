 // PRELOADER
 setInterval(function () {

        var preloader = document.querySelector('#preloader');
        preloader.style.display="none"

 }, 1500);

 //AOS
AOS.init();

//FUNÇÃO DO MENU NO MOBILE
function menuabrir(x) {
    var menumobile = document.getElementById("menu-mobile")
    var ham = document.getElementById("x")

    x.style.display = "none"
    ham.style.display = "block"
    menumobile.style.left = "0%"
    document.getElementById("nav").style.background = "#1B1B1B"
}

function menufechar(x) {
    var menumobile = document.getElementById("menu-mobile")
    var ham = document.getElementById("ham")

    x.style.display = "none"
    ham.style.display = "block"
    menumobile.style.left = "-100%"
    document.getElementById("nav").style.background="#1b1b1b00"
}

//função para mudar a cor do menu de acordo com o scroll
let doc = document.documentElement
window.addEventListener('scroll', function () {
    let value = parseInt(100 * doc.scrollTop / (doc.scrollHeight - doc.clientHeight))
    if (value > 7) {
        document.getElementById("nav").style.background = "#1B1B1B"
       

        //só executo o efeito do "menu pequeno" em um dispositivo maior
       
            if (window.screen.availWidth > 1050) {
                document.getElementById("nav").style.boxShadow="rgba(10, 197, 94, 0.137) 0px 25px 20px -20px";
                document.getElementById("menu-mobile").style.padding = "1%"
            }

       
    } else {
        document.getElementById("nav").style.boxShadow="rgba(10, 197, 94, 0) 0px 25px 20px -20px";
        document.getElementById("nav").style.background="#1b1b1b00"
       

     
            if (window.screen.availWidth > 1050) {
                document.getElementById("menu-mobile").style.padding = "3%"
            }
    }
})

//fechar menu apos clique algum item
$(".itens-menu").click(function (event) {
    if (window.screen.availWidth < 1050) {
        var ham = document.getElementById("x")
        menufechar(ham)
    }
});