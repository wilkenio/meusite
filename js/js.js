
function menuabrir(x) {
    var menumobile = document.getElementById("menu-mobile")
    var ham = document.getElementById("x")

    x.style.display = "none"
    ham.style.display = "block"
    menumobile.style.left = "0%"
}

function menufechar(x) {
    var menumobile = document.getElementById("menu-mobile")
    var ham = document.getElementById("ham")

    x.style.display = "none"
    ham.style.display = "block"
    menumobile.style.left = "-100%"
}

//função para mudar a cor do menu de acordo com o scroll
let doc = document.documentElement
window.addEventListener('scroll', function () {
    let value = parseInt(100 * doc.scrollTop / (doc.scrollHeight - doc.clientHeight))
    // console.log(value)
    if (value > 7) {
        document.getElementById("nav").style.background = "#1B1B1B"
        document.getElementById("nav").style.border = "rgba(255, 255, 255, 0.089) 1px solid"
    } else {
        document.getElementById("nav").style.border = "none"
        document.getElementById("nav").style.background="#1b1b1b00"
    }
})

//fechar menu apos clique algum item
$(".itens-menu").click(function (event) {
    if (window.screen.availWidth < 1050) {
        var ham = document.getElementById("x")
        menufechar(ham)
    }
});