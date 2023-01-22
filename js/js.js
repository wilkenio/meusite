//funções do menu
function menuabrir(iconHam){
    var menumobile = document.getElementById("menu-mobile")
    var x = document.getElementById("x")

    iconHam.style.display="none"
    x.style.display="block"
    menumobile.style.left="0"
}

function menufechar(x){
    var menumobile = document.getElementById("menu-mobile")
    var ham = document.getElementById("ham")

    x.style.display="none"
    ham.style.display="block"
    menumobile.style.left="-100%"
}

//função para mudar a cor do menu de acordo com o scroll
 let doc = document.documentElement
 window.addEventListener('scroll', function() {
     let value = parseInt(100 * doc.scrollTop / (doc.scrollHeight - doc.clientHeight))
     // console.log(value)
     if(value > 5){
              document.getElementById("nav").style.background="#030912"
     }else{
         document.getElementById("nav").style.background="#02091233"
     }
 })

//fechar menu apos clique algum item
$(".itens-menu").click(function(event){
   if(window.screen.availWidth < 1050){
    var ham = document.getElementById("x")
    menufechar(ham)
   }
});