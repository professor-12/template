const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("closeModal");
const Modal = document.getElementById("Modal");
const drop_down = document.getElementById("drop-down");
const dropDownList = document.getElementById("drop-down-list");
// const closeModal = document.getElementById("closeModal");
const a_dropDownList = document.getElementById("a-drop-down-list");
const a_dropDown = document.getElementById("a-drop-down");
const save = document.getElementById("save");
const cancel = document.getElementById("cancel");




const toggleModal = () => {
    Modal.classList.toggle("hidden")
    Modal.classList.toggle("flex")
}


const toggledropDown = () => {
    dropDownList.classList.toggle("hidden")
    dropDownList.classList.toggle("flex")
}

const toggle_a_dropDown = () => {
    a_dropDownList.classList.toggle("hidden")
    a_dropDownList.classList.toggle("flex")
}



openModal.addEventListener("click", toggleModal)

closeModal.addEventListener("click",toggleModal)


drop_down.addEventListener("click",toggledropDown)
a_dropDown.addEventListener("click",toggle_a_dropDown)

save.addEventListener("click",toggleModal)
cancel.addEventListener("click",toggleModal)
