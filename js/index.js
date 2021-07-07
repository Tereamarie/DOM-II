// Your code goes here


 
// Mouse up to highlight nav items green
 
const nav = document.querySelector('.nav');
 
nav.addEventListener('mouseup', function() {
 
nav.style.background = 'green';
 
})
 
// event propagation


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
  event.stopPropagation();
  alert("you cant click")
});




// Mouse over to change text color to crimson
const inverseText = document.querySelector('.inverse-content .text-content')
inverseText.addEventListener('mouseover', function() {
    inverseText.style.color = 'crimson';
})

// Load //

window.addEventListener("load", function(event) {
  alert("Fun Bus Adventures!!!");
});



// Wheel to change header to yellow
 
const header = document.querySelector('header')
 
header.addEventListener('wheel', function() {
 
header.style.background = 'yellow';
 
})


// Drag //
 
let help = document.querySelector('.logo-heading');
 
help.addEventListener('dragstart', function (e) {
 
e.target.textContent = 'Have fun with the FUN BUS!!';
 
});

//Mouseenter//
const busImage1 = document.querySelector('.container-home')
//console.log('bus image1', busImage)
busImage1.addEventListener('mouseenter', () => {
  busImage1.style.transform ="scale(1.2)";
  busImage1.style.transition = "all 0.3s";
})

//mouse Leave//
busImage1.addEventListener('mouseleave', () =>
{
  busImage1.style.transform = "scale(1)"
});


//contextMenu right click//
  window.addEventListener('contextmenu', function (event) {
 
    event.preventDefault();
     
    alert(' you cant copy that!!.');
     
    });
    

    