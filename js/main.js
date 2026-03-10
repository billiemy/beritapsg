function toggleMobileMenu() {

const menu = document.getElementById("mobile-menu")

if(menu){
menu.classList.toggle("hidden")
}

}

function toggleMobileMenu(){

const menu = document.getElementById("mobile-menu")
const icon = document.getElementById("hamburger-icon")

menu.classList.toggle("translate-x-0")

if(menu.classList.contains("translate-x-0")){

icon.innerHTML = `
<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
`

icon.classList.add("text-psg-red","rotate-90")

}else{

icon.innerHTML = `
<path stroke-linecap="round" stroke-linejoin="round" d="M12 5v14"/>
<path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14"/>
`

icon.classList.remove("text-psg-red","rotate-90")

}

}


