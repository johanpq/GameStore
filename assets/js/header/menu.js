const menuIcon = document.querySelector('.menu-icon');
const modalMenu = document.querySelector('.modal');
const closeMenuModal = document.querySelector('.close-modal');

const modalExpand = document.querySelector('div.navagate');

const iconExpand = document.querySelector('.expand-more');

menuIcon.addEventListener('click', () => {
    modalMenu.style.display = 'block'; 
})
 
closeMenuModal.addEventListener('click', () => {
    modalMenu.style.display = 'none'; 
})

/* Modal Elements of the game's section */
const modal = document.createElement('div');
const modalElements = document.createElement('div');
const elements = document.createElement('div');

const divTitle = document.createElement('h3');
const title = "Free Games";
divTitle.classList.add('title');

/* ===================================== */

/* Modal Elements of the discover's section */

const divDiscoverContainer = document.createElement('div');
divDiscoverContainer.classList.add('modal-elements');

const divDiscoverElements = document.createElement('div');
divDiscoverElements.classList.add('elements');
const discoverTitle = document.createElement('h3');
discoverTitle.classList.add('title');

/* ===================================== */

const games = ["Elden Ring", "Counter Strike", "League of Legends"];

const discover = ["Store"]; 

let isModalOpen = false;

modalExpand.addEventListener('click', () => {
    isModalOpen = !isModalOpen;

    if (isModalOpen) {
        iconExpand.classList.add('iconRotation');
        iconExpand.classList.remove('iconRotationBack');
    } else { 
        iconExpand.classList.remove('iconRotation');
        iconExpand.classList.add('iconRotationBack');
    }

    modal.classList.toggle('modalExpand');

    modalElements.classList.add('modal-elements');
    elements.classList.add('elements');

    Games();
    Discover();

    if(!modal.classList.contains("modalExpand")) {
        elements.innerHTML = "";
        divTitle.innerHTML = ""; 
        discoverTitle.innerHTML = "";
        divDiscoverElements.innerHTML = "";
        iconExpand.classList.remove('iconRotation');
        iconExpand.classList.add('iconRotationLeft');
    }


    document.body.appendChild(modal);
    modal.appendChild(modalElements);
    modalElements.appendChild(divTitle);
    modalElements.appendChild(elements); 

    modal.appendChild(divDiscoverContainer);
    divDiscoverContainer.appendChild(discoverTitle);
    divDiscoverContainer.appendChild(divDiscoverElements); 
})

function Games() {
    games.map((el) => {
        const div = document.createElement('div');

        divTitle.innerHTML = title;

        div.innerHTML = el;

        modalElements.appendChild(elements);
        elements.appendChild(div);
    }) 
}

function Discover() {
    discover.map((el) => {
        const div = document.createElement('div');

        discoverTitle.innerHTML = "Discover";

        div.innerHTML = el;
 
        divDiscoverElements.appendChild(div);
    })
}