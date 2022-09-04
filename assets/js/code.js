$(document).ready(function () {
    $('.carrusel1').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: true,
        
    });
});


let bodyParamount = document.querySelector("body")
let seccion1 = document.createElement("div")
seccion1.className= "background1"
bodyParamount.appendChild(seccion1)

let navbar = document.createElement("nav")
navbar.className = "navbar navbar-expand-lg fixed-top"
seccion1.appendChild(navbar)

let divHijoNav = document.createElement("div")
divHijoNav.className = "container-fluid d-flex align-items-center"
navbar.appendChild(divHijoNav)

let linkLogoNav = document.createElement("a")
linkLogoNav.className = "navbar-brand"
linkLogoNav.setAttribute("href", "#")
divHijoNav.appendChild(linkLogoNav)

let imgLinkNav = document.createElement("img")
imgLinkNav.className = ("ms-5")
imgLinkNav.setAttribute("src","assets/img/logo.svg")
linkLogoNav.appendChild(imgLinkNav)

let btnNav = document.createElement("button")
btnNav.className = "navbar-toggler"
btnNav.setAttribute("type","button")
btnNav.setAttribute("data-bs-toggle","collapse")
btnNav.setAttribute("data-bs-target","#navbarSupportedContent")
btnNav.setAttribute("aria-controls","navbarSupportedContent")
btnNav.setAttribute("aria-expanded","false")
btnNav.setAttribute("aria-label","Toggle navigation")
divHijoNav.appendChild(btnNav)

let spanBtnNav = document.createElement("span")
spanBtnNav.className ="navbar-toggler-icon"
btnNav.appendChild = (spanBtnNav)

let divNav2 = document.createElement("div")
divNav2.className = "collapse navbar-collapse"
divNav2.setAttribute("id","navbarSupportedContent")
divHijoNav.appendChild(divNav2)

let ulDivNav2 = document.createElement("ul")
ulDivNav2.className = "navbar-nav me-auto mb-2 mb-lg-0"
divNav2.appendChild(ulDivNav2)

let liNav = document.createElement("li")
liNav.className = "nav-item"
ulDivNav2.appendChild(liNav)

let linkMenu1 = document.createElement("a")
linkMenu1.className = "nav-link active text-white mt-3 border-start"
linkMenu1.setAttribute("aria-current","page")
linkMenu1.setAttribute("href","#")
linkMenu1.innerText = "HALO:"
liNav.appendChild(linkMenu1)

let spanLinkMenu1 = document.createElement("span")
spanLinkMenu1.className = "fw-bold"
spanLinkMenu1.innerHTML = "VER AHORA"
linkMenu1.appendChild(spanLinkMenu1)

let liDivNav3 = document.createElement("ul")
liDivNav3.className = "d-flex" //pendiente ajustar ubicación inicio de sesión 
liDivNav3.setAttribute("role","search")
ulDivNav2.appendChild(liDivNav3)

let aLiDivNav3 = document.createElement("a")
aLiDivNav3.className = "nav-link text-white me-5 mt-3"
aLiDivNav3.setAttribute("href","#")
aLiDivNav3.innerText = "INICAR SESIÓN"
liDivNav3.appendChild(aLiDivNav3) 

let titulo1 =document.createElement("h1")
titulo1.className = "fw-bold text-white ms-5 paddingtoph1"
titulo1.innerHTML = "HISTORIAS ÚNICAS.<br> ESTRELLAS ICÓNICAS.<br> UNA MONTAÑA DE <br> ENTRETENIMIENTO."
seccion1.appendChild(titulo1)

let subtitulo1 = document.createElement("h6")
subtitulo1.className = "text-white mb-5 ms-5"
subtitulo1.innerHTML= "Suscríbete por $13,900.00 COP al Mes. <br>Cancela en cualquier momento.<br>Únete ahora y obtén 7 días gratis."
seccion1.appendChild(subtitulo1)

let divBtn1 = document.createElement("div")
divBtn1.className = "d-flex flex-column align-items-start my-2"
seccion1.appendChild(divBtn1)

let btnSuscribete1 = document.createElement("button")
btnSuscribete1.className = "btn1 text-white py-2 px-5 mb-2 ms-5"
btnSuscribete1.setAttribute("type","button")
btnSuscribete1.innerText = "SUSCRÍBETE A PARAMOUNT+"
divBtn1.appendChild(btnSuscribete1)

let btnYaTengo1 = document.createElement("button")
btnYaTengo1.className = "btn2 py-2 px-5 text-white mb-3 ms-5"
btnYaTengo1.setAttribute("type","button")
btnYaTengo1.innerText = "YA TENGO PARAMOUNT"
divBtn1.appendChild(btnYaTengo1)

let btnIniciar1 = document.createElement("button")
btnIniciar1.className = "btn2 py-2 px-5 text-white mb-3 ms-5"
btnIniciar1.setAttribute("type","button")
btnIniciar1.innerText = "INICIAR SESIÓN CON TU PROVEEDOR"
divBtn1.appendChild(btnIniciar1)

//INICIO SECCION 2

let seccion2 = document.createElement("div")
seccion2.className= "background2"
bodyParamount.appendChild(seccion2)

let titulo2 =document.createElement("h1")
titulo2.className = "fw-bold text-white ms-5 paddingtoph1"
titulo2.innerHTML = "SOMOS<br> ORIGINALES Y<br> EXCLUSIVOS"
seccion2.appendChild(titulo2)

let subtitulo2 = document.createElement("h6")
subtitulo2.className = "text-white mb-5 ms-5"
subtitulo2.innerHTML= "Disfruta de historias únicas, estrellas icónicas y programas <br>exclusivos que no encontrarás en ningún otro lugar."
seccion2.appendChild(subtitulo2)

let divCarrusel1 = document.createElement("div")
seccion2.appendChild(divCarrusel1)

let divContenidoCarrusel1 = document.createElement("div")
divContenidoCarrusel1.className = "carrusel1"
divCarrusel1.appendChild(divContenidoCarrusel1)

let divImg1Carrusel1 = document.createElement("div")
divImg1Carrusel1.className ="p-2"
divContenidoCarrusel1.appendChild(divImg1Carrusel1)

let img1Carrusel1 = document.createElement("img")
img1Carrusel1.className ="w-100"
img1Carrusel1.setAttribute("src","assets/img/carruselfoto1.jpg")
img1Carrusel1.setAttribute("alt","")
divImg1Carrusel1.appendChild(img1Carrusel1)

// COPIA IMAGENES CARRUSEL 1

let divImg2Carrusel1 = document.createElement("div")
divImg2Carrusel1.className ="p-2"
divContenidoCarrusel1.appendChild(divImg2Carrusel1)

let img2Carrusel1 = document.createElement("img")
img2Carrusel1.className ="w-100"
img2Carrusel1.setAttribute("src","assets/img/carruselfoto2.jpg")
img2Carrusel1.setAttribute("alt","")
divImg2Carrusel1.appendChild(img2Carrusel1)

let divImg3Carrusel1 = document.createElement("div")
divImg3Carrusel1.className ="p-2"
divContenidoCarrusel1.appendChild(divImg3Carrusel1)

let img3Carrusel1 = document.createElement("img")
img3Carrusel1.className ="w-100"
img3Carrusel1.setAttribute("src","assets/img/carruselfoto3.jpg")
img3Carrusel1.setAttribute("alt","")
divImg3Carrusel1.appendChild(img3Carrusel1)

let divImg4Carrusel1 = document.createElement("div")
divImg4Carrusel1.className ="p-2"
divContenidoCarrusel1.appendChild(divImg4Carrusel1)

let img4Carrusel1 = document.createElement("img")
img4Carrusel1.className ="w-100"
img4Carrusel1.setAttribute("src","assets/img/carruselfoto4.jpg")
img4Carrusel1.setAttribute("alt","")
divImg4Carrusel1.appendChild(img4Carrusel1)

let divImg5Carrusel1 = document.createElement("div")
divImg5Carrusel1.className ="p-2"
divContenidoCarrusel1.appendChild(divImg5Carrusel1)

let img5Carrusel1 = document.createElement("img")
img5Carrusel1.className ="w-100"
img5Carrusel1.setAttribute("src","assets/img/carruselfoto5.jpg")
img5Carrusel1.setAttribute("alt","")
divImg5Carrusel1.appendChild(img5Carrusel1)

let divImg6Carrusel1 = document.createElement("div")
divImg6Carrusel1.className ="p-2"
divContenidoCarrusel1.appendChild(divImg6Carrusel1)

let img6Carrusel1 = document.createElement("img")
img6Carrusel1.className ="w-100"
img6Carrusel1.setAttribute("src","assets/img/carruselfoto6.jpg")
img6Carrusel1.setAttribute("alt","")
divImg6Carrusel1.appendChild(img6Carrusel1)

let divImg7Carrusel1 = document.createElement("div")
divImg7Carrusel1.className ="p-2"
divContenidoCarrusel1.appendChild(divImg7Carrusel1)

let img7Carrusel1 = document.createElement("img")
img7Carrusel1.className ="w-100"
img7Carrusel1.setAttribute("src","assets/img/carruselfoto7.jpg")
img7Carrusel1.setAttribute("alt","")
divImg7Carrusel1.appendChild(img7Carrusel1)

let divImg8Carrusel1 = document.createElement("div")
divImg8Carrusel1.className ="p-2"
divContenidoCarrusel1.appendChild(divImg8Carrusel1)

let img8Carrusel1 = document.createElement("img")
img8Carrusel1.className ="w-100"
img8Carrusel1.setAttribute("src","assets/img/carruselfoto8.jpg")
img8Carrusel1.setAttribute("alt","")
divImg8Carrusel1.appendChild(img8Carrusel1)

//FIN SECCION 2
// INICIO SECCION 3

let seccion3 = document.createElement("div")
seccion3.className= "background3"
bodyParamount.appendChild(seccion3)

let titulo3 =document.createElement("h1")
titulo3.className = "fw-bold text-white ms-5 paddingtoph1"
titulo3.innerHTML = "TENEMOS TU<br> CONTENIDO<br> FAVORITO"
seccion3.appendChild(titulo3)

let subtitulo3 = document.createElement("h6")
subtitulo3.className = "text-white mb-5 ms-5"
subtitulo3.innerHTML= "Desde películas taquilleras y series reconocidas a tus programas <br>favoritos, en Paramount+ podrás disfrutarlo todo una y otra vez."
seccion3.appendChild(subtitulo3)

let divCarrusel2 = document.createElement("div")
seccion3.appendChild(divCarrusel2)

let divContenidoCarrusel2 = document.createElement("div")
divContenidoCarrusel2.className = "carrusel1"
divCarrusel2.appendChild(divContenidoCarrusel2)

let divImg1Carrusel2 = document.createElement("div")
divImg1Carrusel2.className ="p-2"
divContenidoCarrusel2.appendChild(divImg1Carrusel2)

let img1Carrusel2 = document.createElement("img")
img1Carrusel2.className ="w-100"
img1Carrusel2.setAttribute("src","assets/img/2carrusel1.jpg")
img1Carrusel2.setAttribute("alt","")
divImg1Carrusel2.appendChild(img1Carrusel2)

// COPIA IMAGENES CARRUSEL 2

let divImg2Carrusel2 = document.createElement("div")
divImg2Carrusel2.className ="p-2"
divContenidoCarrusel2.appendChild(divImg2Carrusel2)

let img2Carrusel2 = document.createElement("img")
img2Carrusel2.className ="w-100"
img2Carrusel2.setAttribute("src","assets/img/2carrusel2.jpg")
img2Carrusel2.setAttribute("alt","")
divImg2Carrusel2.appendChild(img2Carrusel2)

let divImg3Carrusel2 = document.createElement("div")
divImg3Carrusel2.className ="p-2"
divContenidoCarrusel2.appendChild(divImg3Carrusel2)

let img3Carrusel2 = document.createElement("img")
img3Carrusel2.className ="w-100"
img3Carrusel2.setAttribute("src","assets/img/2carrusel3.jpg")
img3Carrusel2.setAttribute("alt","")
divImg3Carrusel2.appendChild(img3Carrusel2)

let divImg4Carrusel2 = document.createElement("div")
divImg4Carrusel2.className ="p-2"
divContenidoCarrusel2.appendChild(divImg4Carrusel2)

let img4Carrusel2 = document.createElement("img")
img4Carrusel2.className ="w-100"
img4Carrusel2.setAttribute("src","assets/img/2carrusel4.jpg")
img4Carrusel2.setAttribute("alt","")
divImg4Carrusel2.appendChild(img4Carrusel2)

let divImg5Carrusel2 = document.createElement("div")
divImg5Carrusel2.className ="p-2"
divContenidoCarrusel2.appendChild(divImg5Carrusel2)

let img5Carrusel2 = document.createElement("img")
img5Carrusel2.className ="w-100"
img5Carrusel2.setAttribute("src","assets/img/2carrusel5.jpg")
img5Carrusel2.setAttribute("alt","")
divImg5Carrusel2.appendChild(img5Carrusel2)

let divImg6Carrusel2 = document.createElement("div")
divImg6Carrusel2.className ="p-2"
divContenidoCarrusel2.appendChild(divImg6Carrusel2)

let img6Carrusel2 = document.createElement("img")
img6Carrusel2.className ="w-100"
img6Carrusel2.setAttribute("src","assets/img/2carrusel6.jpg")
img6Carrusel2.setAttribute("alt","")
divImg6Carrusel2.appendChild(img6Carrusel2)

let divImg7Carrusel2 = document.createElement("div")
divImg7Carrusel2.className ="p-2"
divContenidoCarrusel2.appendChild(divImg7Carrusel2)

let img7Carrusel2 = document.createElement("img")
img7Carrusel2.className ="w-100"
img7Carrusel2.setAttribute("src","assets/img/2carrusel7.jpg")
img7Carrusel2.setAttribute("alt","")
divImg7Carrusel2.appendChild(img7Carrusel2)

//FIN SECCION 3
//INICIO SECCION 4
let seccion4 = document.createElement("div")
seccion4.className= "background4 d-flex flex-column align-items-center"
bodyParamount.appendChild(seccion4)

let titulo4 =document.createElement("h1")
titulo4.className = "fw-bold text-white ms-5 paddingtoph1"
titulo4.innerHTML = "CUANDO QUIERAS, DONDE QUIERAS"
seccion4.appendChild(titulo4)

let subtitulo4 = document.createElement("h6")
subtitulo4.className = "text-white ms-5 mb-5 d-flex flex-column align-items-center"
subtitulo4.innerHTML= "Suscríbete por $13,900.00 COP al Mes.<br>Cancela en cualquier momento."
seccion4.appendChild(subtitulo4)

// botones 2

let divBtn2 = document.createElement("div")
divBtn2.className = "d-flex flex-column align-items-start my-2"
seccion4.appendChild(divBtn2)

let btnSuscribete2 = document.createElement("button")
btnSuscribete2.className = "btn1 text-white py-2 px-5 mb-2 ms-5"
btnSuscribete2.setAttribute("type","button")
btnSuscribete2.innerText = "SUSCRÍBETE A PARAMOUNT+"
divBtn2.appendChild(btnSuscribete2)

let btnYaTengo2 = document.createElement("button")
btnYaTengo2.className = "btn2 py-2 px-5 text-white mb-3 ms-5"
btnYaTengo2.setAttribute("type","button")
btnYaTengo2.innerText = "YA TENGO PARAMOUNT"
divBtn2.appendChild(btnYaTengo2)

let btnIniciar2 = document.createElement("button")
btnIniciar2.className = "btn2 py-2 px-5 text-white mb-3 ms-5"
btnIniciar2.setAttribute("type","button")
btnIniciar2.innerText = "INICIAR SESIÓN CON TU PROVEEDOR"
divBtn2.appendChild(btnIniciar2)

// FIN SECCION 4
//INICIO SECCION 5

let footer = document.createElement("footer")
footer.className= "bg-dark text-white"
bodyParamount.appendChild(footer)

let imgFooter = document.createElement("img")
imgFooter.className = "m-5"
imgFooter.setAttribute("src","assets/img/logo.svg")
footer.appendChild(imgFooter)

let divFooter = document.createElement("div")
divFooter.className = "d-flex flex-row justify-content-between col-6 ms-3"
footer.appendChild(divFooter)

let ulFooter1 = document.createElement("ul")
ulFooter1.className = "my-2"
divFooter.appendChild(ulFooter1)

let li1Ul1footer1 = document.createElement("li")
li1Ul1footer1.className = "list-group-item"
li1Ul1footer1.innerText = "Navegación del sitio"
ulFooter1.appendChild(li1Ul1footer1)

let li2Ul1footer1 = document.createElement("li")
li2Ul1footer1.className = "list-group-item fontSizeFooter"
li2Ul1footer1.innerText = "Paramount+ Colombia"
ulFooter1.appendChild(li2Ul1footer1)

let li3Ul1footer1 = document.createElement("li")
li3Ul1footer1.className = "list-group-item fontSizeFooter"
li3Ul1footer1.innerText = "Paramount+ Global"
ulFooter1.appendChild(li3Ul1footer1)

//LISTA 2 FOOTER

let ulFooter2 = document.createElement("ul")
ulFooter2.className = "my-2"
divFooter.appendChild(ulFooter2)

let li1Ul1footer2 = document.createElement("li")
li1Ul1footer2.className = "list-group-item"
li1Ul1footer2.innerText = "Privacidad y términos"
ulFooter2.appendChild(li1Ul1footer2)

let li2Ul1footer2 = document.createElement("li")
li2Ul1footer2.className = "list-group-item fontSizeFooter"
li2Ul1footer2.innerText = "Acuerdo de Suscripción"
ulFooter2.appendChild(li2Ul1footer2)

let li3Ul1footer2 = document.createElement("li")
li3Ul1footer2.className = "list-group-item fontSizeFooter"
li3Ul1footer2.innerText = "Términos de Uso"
ulFooter2.appendChild(li3Ul1footer2)

let li4Ul1footer2 = document.createElement("li")
li4Ul1footer2.className = "list-group-item fontSizeFooter"
li4Ul1footer2.innerText = "Política de privacidad y Política"
ulFooter2.appendChild(li4Ul1footer2)

let li5Ul1footer2 = document.createElement("li")
li5Ul1footer2.className = "list-group-item fontSizeFooter"
li5Ul1footer2.innerText = "Política de cookies"
ulFooter2.appendChild(li5Ul1footer2)
// LISTA 3 FOOTER 

let ulFooter3 = document.createElement("ul")
ulFooter3.className = "my-2"
divFooter.appendChild(ulFooter3)

let li1Ul1footer3 = document.createElement("li")
li1Ul1footer3.className = "list-group-item"
li1Ul1footer3.innerText = "Soporte"
ulFooter3.appendChild(li1Ul1footer3)

let li2Ul1footer3 = document.createElement("li")
li2Ul1footer3.className = "list-group-item fontSizeFooter"
li2Ul1footer3.innerText = "Ayuda / Contáctanos"
ulFooter3.appendChild(li2Ul1footer3)

let li3Ul1footer3 = document.createElement("li")
li3Ul1footer3.className = "list-group-item fontSizeFooter"
li3Ul1footer3.innerText = "Guia de clasificaciones"
ulFooter3.appendChild(li3Ul1footer3)

let pFooter = document.createElement("p")
pFooter.className = "fontSizeFooter mt-5"
pFooter.innerText = "© 2022 Paramount. Todos los derechos reservados."
footer.appendChild(pFooter)