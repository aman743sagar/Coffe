let navbar=document.querySelector('.navbar')
document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active');
    // navbar.classList.remove('active');
    carditem.classList.remove('active');
    searchform.classList.remove('active');
}
let searchform=document.querySelector('.search-form')
document.querySelector('#searchbtn').onclick=()=>{
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
    carditem.classList.remove('active');
    // searchform.classList.remove('active');
}
let carditem=document.querySelector('.card-item-container')
document.querySelector('#cart-btn').onclick=()=>{
    carditem.classList.toggle('active');
    navbar.classList.remove('active');
    // carditem.classList.remove('active');
    searchform.classList.remove('active');
}

window.onscroll=()=>{
    navbar.classList.remove('active');
    carditem.classList.remove('active');
    searchform.classList.remove('active');
}
