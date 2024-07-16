const open = document.querySelector('.open');
const modal = document.querySelector('.modal-overlay');
const close = document.querySelector('.close');

open.addEventListener("click", function(){
    modal.classList.toggle('modal-show');
})

close.addEventListener("click", function(){
    modal.classList.remove('modal-show');
})