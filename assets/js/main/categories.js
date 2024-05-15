const categoriesContainer = document.querySelector('.categories');
const expandIcon = document.querySelector('.expand-moreCat');

const modalCategoryContainer = document.createElement('div');
const categoryModalElements = document.createElement('div');
const categoryElements = document.createElement('div');

const category = ["SoulsLike", "Moba", "FPS"];

const isModal = false;

const createModal = categoriesContainer.addEventListener('click', () => {
    if (isModal) { 
        expandIcon.classList.add('iconRotationCat');
        expandIcon.classList.remove('iconRotationBackCat'); 
    } else { 
        expandIcon.classList.remove('iconRotationCat');
        expandIcon.classList.add('iconRotationBackCat'); 
    }

    modalCategoryContainer.classList.toggle('modalExpandCategories'); 
    categoryModalElements.classList.add('modal-elements');
    categoryElements.classList.add('elements');
  
    showCategory(categoryElements); 

    if(!modalCategoryContainer.classList.contains("modalExpandCategories")) { 
        categoryElements.innerHTML = "";
        iconExpand.classList.remove('iconRotation');
        iconExpand.classList.add('iconRotationLeft');
    }
 
    document.body.appendChild(modalCategoryContainer);      
    modalCategoryContainer.appendChild(categoryModalElements);
    categoryModalElements.appendChild(categoryElements);
}) 
 
function showCategory(container) { 
    container.innerHTML = ""; 
    category.map((el) => {
        const div = document.createElement('div');  
        div.innerHTML = el;  
        container.appendChild(div);
    }) 
}