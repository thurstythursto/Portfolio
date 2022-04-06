
const btn = document.getElementById('btn');
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


