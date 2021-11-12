// https://medium.com/nerd-for-tech/manipulating-the-dom-with-html-javascript-and-css-part-1-25b34ae2f932
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents

// function colorFunction(){

// const lists = document.querySelector('ul');
const inputs = document.querySelector('#searchInput');
// const btn = document.querySelector('button');
const coloors=document.getElementById('text__color');

inputs.onkeyup=colorFunction(e)

function colorFunction(e){
 coloors.textContent = e;
}

// btn.onclick = function () {
//   let inputVal = inputs.value;
//   inputs.value = '';

//   const listItem = document.createElement('li');
//   const listText = document.createElement('span');
//   const listBtn = document.createElement('button');

//   listItem.appendChild(listText);
//   listText.textContent = inputVal;

//   listItem.appendChild(listBtn);
//   listBtn.textContent = 'Delete';
//   lists.appendChild(listItem);

//   // butans.addEventLsitener('click', deleteItem);

//   listBtn.onclick = function (e) {
//     lists.removeChild(listItem);
//   };

//   inputs.focus();
// };














//https://www.section.io/engineering-education/dom-manipulation-with-javascript/


// let button=document.querySelector('#button');

// let userInput=document.querySelector('#userInput').value;

// console.log(userInput.value);
// let todoWrapper=document.querySelector('.todo-wrapper');

// button.addEventListener('click',()=>{

//    if(userInput.length < 5){

//     let li=document.querySelector('li');

//     li.className="todo";

//     let node=document.createElement(userInput)

//      li.appendChild(node)

//      todoWrapper.appendChild(li)

//      document.querySelector('#userInput').value=''


//    }else{alert("Todo's can't be less than 5 characters ;) ")}

//    document.querySelector(".todo-wrapper").addEventListener("click", (e) => {
//     if (e.target.className === "todo") {
//       let msg = confirm(
//         `Are you sure you want to delete \n ${e.target.innerText}`
//       );

//       if (msg == true) {
//         document.querySelector(".todo-wrapper").removeChild(e.target);
//       }
//     }
//   });
// });