let paramount = document.querySelector("body")
let navbar = document.createElement("nav")
navbar.className = "navbar navbar-expand-lg bg-dark nav-dark"
paramount.appendChild(navbar)

let divHijoNav = document.createElement("div")
divHijoNav.className = "container"
navbar.appendChild(divHijoNav)

let linkLogoNav = document.createElement("a")
linkLogoNav.className = "navbar-brand"
linkLogoNav.setAttribute("href","#")
divHijoNav.appendChild(linkLogoNav)

let imgLinkNav = document.createElement("img")
imgLinkNav.setAttribute("src", "assets/img/logo.svg")
linkLogoNav.appendChild(imgLinkNav)

let btnMenuResponsive = document.createElement("button")
btnMenuResponsive.setAttribute("type","button")
btnMenuResponsive.setAttribute("data-bs-toggle", "collapse")
btnMenuResponsive.setAttribute("data-bs-target", "#navbarSupportedContent")
btnMenuResponsive.setAttribute("aria-controls", "navbarSupportedContent")
btnMenuResponsive.setAttribute("aria-expanded", "false")
btnMenuResponsive.setAttribute("aria-label", "Toggle navigation" )
btnMenuResponsive.className = "navbar-toggler"
divHijoNav.appendChild(btnMenuResponsive)

let spanHijoBtnResponsive = document.createElement("span")
spanHijoBtnResponsive.className = "navbar-toggler-icon"
btnMenuResponsive.appendChild(spanHijoBtnResponsive)

let divLinksNav = document.createElement("div")
divLinksNav.setAttribute("id", "navbarSupportedContent")
divLinksNav.className= "collapse navbar-collapse"
divHijoNav.appendChild(divLinksNav)

let ulDivLinksNav = document.createElement("ul")
ulDivLinksNav.className ="navbar-nav me-auto mb-2 mb-lg-0"
divLinksNav.appendChild(ulDivLinksNav)

let opcionesMenu = []




