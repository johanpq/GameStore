const container = document.querySelector('div.main-head');

const searchIcon = document.querySelector('svg.search-main-head-icon');
 
console.log(container); 

const ContainerModal = document.createElement('div');
const modalSearch = document.createElement('div');
const modalContainer = document.createElement('div');
const Modalelements = document.createElement('div');
const textInput = document.createElement('input');
textInput.setAttribute('type', 'text');  

const newSearchIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
newSearchIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
newSearchIcon.setAttribute("height", "24px");
newSearchIcon.setAttribute("viewBox", "0 -960 960 960");
newSearchIcon.setAttribute("width", "24px");
newSearchIcon.setAttribute("fill", "#000000"); 

const pathElementIcon = document.createElementNS("http://www.w3.org/2000/svg", "path");
pathElementIcon.setAttribute("d", "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z");    


const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svgElement.setAttribute("height", "24px");
svgElement.setAttribute("viewBox", "0 -960 960 960");
svgElement.setAttribute("width", "24px");
svgElement.setAttribute("fill", "#000000");   

const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
pathElement.setAttribute("d", "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"); 

  
searchIcon.addEventListener('click', () => {   
    
    ContainerModal.classList.add('modalSearch');   
    modalContainer.classList.add('modal-container');
    Modalelements.classList.add('modal-elementsSearch');
    newSearchIcon.classList.add('search');  
    textInput.classList.add('textInput'); 
    textInput.setAttribute('placeholder', 'Search in store');      
    svgElement.classList.add('close-modal');

   
    container.appendChild(ContainerModal); 
    ContainerModal.appendChild(modalContainer); 
    modalContainer.appendChild(Modalelements);
    Modalelements.appendChild(newSearchIcon); 
    newSearchIcon.appendChild(pathElementIcon);
    Modalelements.appendChild(textInput);  
    Modalelements.appendChild(svgElement);
    svgElement.appendChild(pathElement);   
})

svgElement.addEventListener('click', () => {
    ContainerModal.remove();  
})
 
textInput.addEventListener('keydown', KeyPress);

function KeyPress(event) {
    const key = event.key;

    if(key == "Enter") {
        alert("Works!"); 
    }
}