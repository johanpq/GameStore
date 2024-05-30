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

/* ===================================================== */



/* Login */

const form = document.createElement('form');
/* form action aqui */

const divModalLogin = document.createElement('div');
divModalLogin.classList.add('modalLogin');

const modalContainerLogin = document.createElement('div');
modalContainerLogin.classList.add('modal-container-login');

const TitleCloseLogin = document.createElement('div');
TitleCloseLogin.classList.add('modal-title-and-close-login');

const login = document.createElement('div');
login.classList.add('login'); 

const modalElementsLogin = document.createElement('div');
modalElementsLogin.classList.add('modal-elements-login');

const containerUserName = document.createElement('div');
containerUserName.classList.add('container-username');

const labelUsername = document.createElement('label');
labelUsername.setAttribute('for', 'IUsername');

const userNameIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
userNameIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
userNameIcon.setAttribute("height", "34px"); 
userNameIcon.setAttribute("viewBox", "0 -960 960 960");
userNameIcon.setAttribute("width", "24px");

const userNameIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
userNameIconPath.setAttribute("d", "M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z");


const inputTextLogin = document.createElement('input');
inputTextLogin.setAttribute('type', 'text');
inputTextLogin.setAttribute('id', 'IUsername');
/* inputTextLogin.setAttribute('required'); */

const containerPassword = document.createElement('div');
containerPassword.classList.add('container-password');

const labelPassword = document.createElement('label');
labelPassword.setAttribute('for', 'IPassword');

const passwordIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
passwordIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
passwordIcon.setAttribute("height", "34px"); 
passwordIcon.setAttribute("viewBox", "0 -960 960 960");
passwordIcon.setAttribute("width", "24px");

const passwordIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
passwordIconPath.setAttribute("d", "M120-160v-112q0-34 17.5-62.5T184-378q62-31 126-46.5T440-440q20 0 40 1.5t40 4.5q-4 58 21 109.5t73 84.5v80H120ZM760-40l-60-60v-186q-44-13-72-49.5T600-420q0-58 41-99t99-41q58 0 99 41t41 99q0 45-25.5 80T790-290l50 50-60 60 60 60-80 80ZM440-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm300 80q17 0 28.5-11.5T780-440q0-17-11.5-28.5T740-480q-17 0-28.5 11.5T700-440q0 17 11.5 28.5T740-400Z"); 

const inputPassword = document.createElement('input');
inputPassword.setAttribute('id', 'IPassword');
inputPassword.setAttribute('minlength', '8');
/* inputPassword.setAttribute('required'); */ 

const spanLogin = document.createElement('span');

const svgSeePassword = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgSeePassword.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svgSeePassword.setAttribute("height", "34px"); 
svgSeePassword.setAttribute("viewBox", "0 -960 960 960");
svgSeePassword.setAttribute("width", "21px"); 

const pathSeePaswword = document.createElementNS("http://www.w3.org/2000/svg", "path");
pathSeePaswword.setAttribute("d", "M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z");


const svgNotSeePassword = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgNotSeePassword.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svgNotSeePassword.setAttribute("height", "34px"); 
svgNotSeePassword.setAttribute("viewBox", "0 -960 960 960");
svgNotSeePassword.setAttribute("width", "21px"); 

const pathNotSeePaswword = document.createElementNS("http://www.w3.org/2000/svg", "path");
pathNotSeePaswword.setAttribute("d", "m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"); 

const forgotPasswordLink = document.createElement('a');
forgotPasswordLink.setAttribute('href', 'index.html');

const divForgotPassword = document.createElement('div');
divForgotPassword.classList.add('forgotPass');

const buttonSignIn = document.createElement('button');
buttonSignIn.classList.add('loginBtn');

const buttonSignUp = document.createElement('button');
buttonSignUp.classList.add('signupBtn');


svgLogin.addEventListener('click', () => {

    login.innerHTML = "Login";

    divForgotPassword.innerHTML = "Forgot password?";

    buttonSignIn.innerHTML = "Sign in";
    buttonSignUp.innerHTML = "Sign up";

    inputPassword.setAttribute('type', 'password');

    svgNotSeePassword.style.display = 'block'; 
    svgSeePassword.style.display = "none"; 

    svgNotSeePassword.addEventListener('click', () => {
        svgNotSeePassword.style.display = "none";
        svgSeePassword.style.display = "block"; 

        inputPassword.setAttribute('type', 'text');
    })

    svgSeePassword.addEventListener('click', () => {
        svgSeePassword.style.display = "none";
        svgNotSeePassword.style.display = "block"; 

        inputPassword.setAttribute('type', 'password');
    })

    svgClose.addEventListener('click', () => {
        inputTextLogin.value = "";
        inputPassword.value = "";  
        form.remove(); 
    })


    document.body.appendChild(form);
    form.appendChild(divModalLogin);
    divModalLogin.appendChild(modalContainerLogin);
    modalContainerLogin.appendChild(TitleCloseLogin);
    svgClose.appendChild(pathElementClose);
    TitleCloseLogin.appendChild(svgClose);
    TitleCloseLogin.appendChild(login);
    modalContainerLogin.appendChild(modalElementsLogin);
    modalElementsLogin.appendChild(containerUserName);
    containerUserName.appendChild(labelUsername);
    userNameIcon.appendChild(userNameIconPath);
    labelUsername.appendChild(userNameIcon);
    containerUserName.appendChild(inputTextLogin);
    modalElementsLogin.appendChild(containerPassword);
    containerPassword.appendChild(labelPassword); 
    passwordIcon.appendChild(passwordIconPath); 
    labelPassword.appendChild(passwordIcon);
    containerPassword.appendChild(inputPassword);
    svgNotSeePassword.appendChild(pathNotSeePaswword);
    svgSeePassword.appendChild(pathSeePaswword);
    spanLogin.appendChild(svgNotSeePassword); /* Default */
    spanLogin.appendChild(svgSeePassword);
    containerPassword.appendChild(spanLogin);
    modalElementsLogin.appendChild(forgotPasswordLink);
    forgotPasswordLink.appendChild(divForgotPassword);
    modalElementsLogin.appendChild(buttonSignIn);
    modalElementsLogin.appendChild(buttonSignUp);
})

/* ================================= */