const categoriesContainer = document.querySelector('.categories');
const changeCategory = document.querySelector('span.categories-element');
const expandIcon = document.querySelector('.expand-category');    

const modalCategoryContainer = document.createElement('div');
const categoryModalElements = document.createElement('div');
const categoryElements = document.createElement('div');

const category = ["All", "SoulsLike", "Moba", "FPS"];

let isModal = false; 
 
const createModal = categoriesContainer.addEventListener('click', () => {
    isModal = !isModal;
    if(isModal) {  
        expandIcon.classList.add('iconRotationCat');
        expandIcon.classList.remove('iconRotationBackCat'); 
    } else { 
        expandIcon.classList.remove('iconRotationCat');
        expandIcon.classList.add('iconRotationBackCat');  
    } 
   
    modalCategoryContainer.classList.toggle('modalExpandCategories'); 
    categoryModalElements.classList.add('modal-elements');
    categoryElements.classList.add('elements');
  
    showCategory(modalCategoryContainer, categoryElements);  
    

    if(!modalCategoryContainer.classList.contains("modalExpandCategories")) {  
        categoryElements.innerHTML = "";
        expandIcon.classList.remove('iconRotationCat');
        expandIcon.classList.add('iconRotationBackCat');
    }
 
    document.body.appendChild(modalCategoryContainer);      
    modalCategoryContainer.appendChild(categoryModalElements);
    categoryModalElements.appendChild(categoryElements);
}) 

 
function showCategory(modal, container) { 
    container.innerHTML = "";  
    let selectedElement = false;
    let firstElement;
    category.map((el, index) => {
        const div = document.createElement('div');  
        div.innerHTML = el;  
 
        if(index == 0 && selectedElement == false) {
            div.classList.add('selectedElement');
            firstElement = div;
            selectedElement = true;
        }

        if(changeCategory.textContent === el && selectedElement == true) {
            div.classList.add('selectedElement');
            if(changeCategory.textContent === "All") {
                firstElement.classList.add('selectedElement');
            } else {
                firstElement.classList.remove('selectedElement');
            }
        }

        container.appendChild(div);  
 
        div.addEventListener('click', (event) => {
            if(event.target === div) {    
                changeCategory.innerHTML = event.target.textContent; 
                isModal = false;    

                modalCategoryContainer.classList.remove('modalExpandCategories');
                expandIcon.classList.remove('iconRotationCat');
                expandIcon.classList.add('iconRotationBackCat');
                modal.remove();  
            } 
        })
    }) 
}