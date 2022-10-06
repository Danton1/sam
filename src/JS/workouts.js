let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
let checkboxes = document.querySelectorAll('.checkbox');
let completed = document.getElementById('completed');
let completedImg = document.getElementById('completed-img');

var selected = 0;

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};


document.addEventListener("click", function(e) {

    selected = 0;
    checkboxes.forEach(function(el) {
        if(el.checked){
            selected++;
            if(selected == checkboxes.length){
                completed.style.display = '';
                completed.classList.add('active');
                completedImg.classList.add('active');
                completed.scrollIntoView();
            }
        }
    })

    
})


    
// checkboxes.forEach((el) => {
//     selected = 0;
//     console.log(el)
//     el.addEventListener("click", () => {
        
//         if(el.checked){
//             console.log(el)
//             selected++;
//             console.log(selected)
//             if(selected == checkboxes.length){
//                 console.log(selected)
//                 completed.style.display = '';
//                 completed.classList.add('active');
//                 completed.scrollIntoView();
//             }
//         }
//     })
// });

var pageName = window.location.pathname;
pageName = pageName.split("/").pop();

console.log(pageName);

let exerciseWeight = document.querySelectorAll('.weights');
let exerciseName = document.querySelectorAll('.exercise');

let thisweight = [];

for (let i = 0; i < exerciseWeight.length; i++) {
    if(!localStorage.getItem(JSON.stringify(pageName+i))){
        localStorage.setItem(JSON.stringify(pageName+i), exerciseWeight[i].innerHTML);
    }
}
// for (let i = 0; i < exerciseWeight.length; i++) {
//     thisweight[i] = exerciseWeight[i].innerHTML;
//     localStorage.setItem(i, exerciseWeight[i].innerHTML);
//     // localStorage.setItem(JSON.stringify(i), JSON.stringify(exerciseWeight[i].innerText));
// }
// for (var key in localStorage){
//     console.log(key);
//  }
for ( var i = 0, len = exerciseWeight.length; i < len; ++i ) {
    exerciseWeight[i].innerHTML = localStorage.getItem(JSON.stringify(pageName+i));
}

// exerciseWeight.forEach(el =>{
//     console.log(el.innerHTML);
// })



var updateExercises = function(e) {
    for (let i = 0; i < exerciseWeight.length; i++) {
        if(thisweight[i] != exerciseWeight[i].innerHTML){
            if(exerciseWeight[i].innerText){
                if(thisweight[i]){
                    console.log("WARNING: "+exerciseName[i].innerText+" has changed from " + thisweight[i]?.replace(/[^0-9\.]+/g, "") + " to " + exerciseWeight[i].innerText);
                    }
                localStorage.setItem(JSON.stringify(pageName+i), exerciseWeight[i].innerHTML);
                thisweight[i] = exerciseWeight[i].innerHTML;
            }else{
                exerciseWeight[i].innerHTML = thisweight[i];
                localStorage.setItem(JSON.stringify(pageName+i), exerciseWeight[i].innerHTML);
            }
        }
    }
}



document.addEventListener("click", updateExercises, false);
// document.addEventListener("keyup", updateExercises);
document.addEventListener("focus", updateExercises, false);
// document.addEventListener("input", updateExercises);
document.addEventListener("touchend", updateExercises, false);

const closeModalButton = document.getElementById("close-modal");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-img");
const fade = document.getElementById("fade");



const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
};

[closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", toggleModal, false);
});

for (let i = 0; i < exerciseName.length; i++) {
    modalTitle.innerText = exerciseName[i].innerText;
}
exerciseName.forEach((el, index) => {
    el.addEventListener("click", () => {
        toggleModal();
        modalTitle.innerText = exerciseName[index].innerText;
        modalImage.src = exerciseImgs[index];
    });
});
