const openModal = document.getElementById("openModalBtn");
const modal = document.getElementById("myModal");

openModal.addEventListener('click', function(){
    modal.style.display = "block";
})

const closeModal = document.querySelector(".close");
closeModal.addEventListener("click", function(){
    modal.style.display = "none";
})

window.addEventListener('click', function(event){
    if (event.target === modal) {
        modal.style.display = 'none';
    }
})

let newtitle=prompt("Enter a new title");
let p1=document.getElementById("modalTitle");
p1.innerHTML=newtitle;