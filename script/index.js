// burger menu
const headerContainer = document.querySelector('.header__container');
// делегирование
headerContainer.addEventListener('click', function(event){
    if(event.target.closest('.burger')){
        document.getElementById('burger').classList.toggle('active');
        document.getElementById('nav').classList.toggle('open');
        } 
        if (!event.target.closest('.burger')){
        document.getElementById('burger').classList.remove('active');
        document.getElementById('nav').classList.remove('open');
        }
})










