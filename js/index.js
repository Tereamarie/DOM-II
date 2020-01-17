// Your code goes here

// Mouse Over //
 
const myButton1 = document.getElementsByClassName('btn')[0];
 
//console.log(myButton1);
 
myButton1.addEventListener('mouseover', function (e) {
 
myButton1.style.color = 'black';
 
myButton1.style.backgroundColor = 'yellow';
 
});
 
 //Double Click//


const myButton2 = document.getElementsByClassName('btn')[1];
//console.log(myButton2);
myButton2.addEventListener('dblclick', function(e) {
  myButton2.style.color = 'yellow';
  myButton2.style.backgroundColor = 'black';
});

// Click //

const myButton3 = document.getElementsByClassName('btn')[2];

myButton3.addEventListener('click', function(e) {
  myButton3.style.color = 'blue';
  myButton3.style.backgroundColor = 'green';
});


//Scroll//

function randomColors() {
  const letters = ''
}