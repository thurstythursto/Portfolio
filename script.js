
const BK = document.getElementsById('test')

btn.addEventListener('click',  () => {
    btn.style.display = 'none';
    BK.style.display = 'none';
})




function ani() {
   var test = document.querySelector('div')
   test.addEventListener('click', function() {
       if (this.className == '') {
           this.className = 'boobies';
       } else {
           this.className = '';
           window.setTimeout(function() {
               test.className = 'boobies';
           }, 100);
       }
   })
}


const test = document.getElementById('modal-closed');
const test1 = document.getElementsById('modal');


// Get the button that opens the modal
var btn = document.querySelectorAll("button.modal-button");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}



