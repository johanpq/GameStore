const menuIcon = document.querySelector('.menu-icon');

const closeMenuModal = document.querySelector('.close-modal');

const modalExpand = document.querySelector('div.navagate');

const iconExpand = document.querySelector('.expand-more');

const minWidth = 910;

const modalMenu = document.createElement('div');
modalMenu.classList.add('modal');

const modalContainer0 = document.createElement('div');
modalContainer0.classList.add('modal-container');

const modalTitleAndClose = document.createElement('div');
modalTitleAndClose.classList.add('modal-title-and-close');

const svgClose = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgClose.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svgClose.setAttribute("height", "24px");
svgClose.setAttribute("viewBox", "0 -960 960 960");
svgClose.setAttribute("width", "24px");
svgClose.setAttribute("fill", "#000000"); 
svgClose.classList.add("close-modal");  

const pathElementClose = document.createElementNS("http://www.w3.org/2000/svg", "path");
pathElementClose.setAttribute("d", "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"); 

const storeParagraph = document.createElement('div');

storeParagraph.classList.add('store-paragraph');

const modalElement = document.createElement('div');

modalElement.classList.add('modal-elements');

const svgLogin = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgLogin.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svgLogin.setAttribute("height", "34px"); 
svgLogin.setAttribute("viewBox", "0 -960 960 960");
svgLogin.setAttribute("width", "24px");
svgLogin.setAttribute("fill", "#000000");   
svgLogin.classList.add('login-icon');

const pathElementLogin = document.createElementNS("http://www.w3.org/2000/svg", "path");
pathElementLogin.setAttribute("d", "M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"); 

const div = document.createElement('div');
const div2 = document.createElement('div');

menuIcon.addEventListener('click', () => {
    modalMenu.style.display = 'block'; 

    storeParagraph.innerHTML = "Store";
    div.innerHTML = "Suport";
    div2.innerHTML = "Contribute";

    svgClose.addEventListener('click', () => {
        modalMenu.style.display = 'none';
    })

    document.body.appendChild(modalMenu);
    modalMenu.appendChild(modalContainer0);
    modalContainer0.appendChild(modalTitleAndClose);
    svgClose.appendChild(pathElementClose);
    modalTitleAndClose.appendChild(svgClose);
    modalTitleAndClose.appendChild(storeParagraph);
    modalContainer0.appendChild(modalElement);
    svgLogin.appendChild(pathElementLogin);
    modalElement.appendChild(svgLogin);
    modalElement.appendChild(div);
    modalElement.appendChild(div2);
})

const headerContent = document.querySelector('.left-content'); 
headerContent.classList.add('divLeftContent');

const divRightContent = document.querySelector('.right-content');

const rezizeWithViewPort = window.addEventListener('resize', function() {
    if (window.innerWidth >= minWidth) {
        div.innerHTML = "Suport";
        div2.innerHTML = "Contribute";

        headerContent.appendChild(div);
        headerContent.appendChild(div2); 
        svgLogin.setAttribute("fill", "#e8eaed"); 
        svgLogin.appendChild(pathElementLogin);
        divRightContent.appendChild(svgLogin);
    } else {
        headerContent.appendChild(div);
        headerContent.appendChild(div2); 
        svgLogin.setAttribute("fill", "#e8eaed"); 
        svgLogin.appendChild(pathElementLogin);
        divRightContent.appendChild(svgLogin);

        divRightContent.removeChild(svgLogin);
        headerContent.removeChild(div);
        headerContent.removeChild(div2); 
    } 
})  

window.addEventListener('load', LoadContent); 

function LoadContent() {
    if (window.innerWidth >= minWidth) {
        div.innerHTML = "Suport";
        div2.innerHTML = "Contribute";

        headerContent.appendChild(div);
        headerContent.appendChild(div2); 
        svgLogin.setAttribute("fill", "#e8eaed"); 
        svgLogin.appendChild(pathElementLogin);
        divRightContent.appendChild(svgLogin);
    } else {
        headerContent.appendChild(div);
        headerContent.appendChild(div2); 
        svgLogin.setAttribute("fill", "#e8eaed"); 
        svgLogin.appendChild(pathElementLogin);
        divRightContent.appendChild(svgLogin);

        divRightContent.removeChild(svgLogin);
        headerContent.removeChild(div);
        headerContent.removeChild(div2); 
    } 
}


/* ============================================= */

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