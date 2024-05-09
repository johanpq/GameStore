const menuIcon = document.querySelector('.menu-icon');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');

menuIcon.addEventListener('click', () => {
    modal.style.display = 'block'; 
})
 
closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; 
})

console.log(closeModal);