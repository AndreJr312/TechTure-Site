const btnMobile = document.getElementById('botao-mobile')
const itemLista = document.getElementById('menu-web')



const target = document.querySelectorAll("[data-anime]")
const animationClass = "animate"


//função para animar menu hamburguer mobile

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefalt() // previnindo o mobile de dar um clipe duplo ao abrir o menu
    const nav = document.getElementById('navegar')
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)  //para mobile
itemLista.addEventListener('click', toggleMenu)


//função para animar itens ao rolar a tela

function animeScroll(){
    const windowTop = window.pageYOffset + (window.innerHeight * 0.70)
    target.forEach(function(e){
        if((windowTop) > e.offsetTop){
            e.classList.add(animationClass)
        }else{
            e.classList.remove(animationClass)
        }
    })
}
animeScroll()

window.addEventListener("scroll", function(){
    animeScroll()
})