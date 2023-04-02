// Script for buttons
// {
//    const btns = document.querySelectorAll('.element-1__pieces'),
//       btnOne = document.querySelector('.btn_1');




//    let i = 0;

//    const showClicks = (e) => {
//       i++;
//       alert(`You clicked ${i} times on button`);
//       if (i == 4) {
//          alert("You can't click anymore");
//          btnOne.removeEventListener('click', showClicks);
//       }
//    };

//    btnOne.addEventListener('click', showClicks);
// }
// Script for Exponentiate

{
   const exBtn = document.querySelector('.mathBnts__exponen');
   let num = '';
   let ext = '';
   const showExpon = () => {
      num = +prompt('Enter number', '');
      ext = +prompt('Enter extent', '');
      if (typeof (num && ext) == null || (num && ext) == '' || isNaN(num) || isNaN(ext) || !Number.isInteger(ext)) {
         return alert('Error');
      } else {
         return alert(expon(num, ext));

      }
   };

   exBtn.addEventListener('click', showExpon);

   let expon = (x, n) => {
      if (n === 1) {
         return x;
      } else {
         return x * expon(x, n - 1);
      }
   };
}
{
   const fcBtn = document.querySelector('.mathBnts__factorial');
   let fctNum = '';
   const showFactorial = () => {
      fctNum = +prompt('Enter number', '');
      console.log(typeof (fctNum));
      if (typeof fctNum == null || fctNum <= 0 || fctNum == '' || isNaN(fctNum) || !Number.isInteger(fctNum)) {
         return alert('Error');
      } else if (fctNum == 1) {
         alert(1);
      } else {
         return alert(factorial(fctNum));
      }
   };
   fcBtn.addEventListener('click', showFactorial);

   const factorial = (n) => {
      if (n === 1) {
         return 1;
      } else {
         return n * factorial(n - 1);
      }
   };
}
{
   const fcBtn = document.querySelector('.mathBnts__surfaceArea');
   let rdsNum = '';
   const showSurfaceArea = () => {
      rdsNum = +prompt('Enter radius number in meters', '');
      if (typeof fctNum == null || rdsNum <= 0 || rdsNum == '' || isNaN(rdsNum) || !Number.isInteger(rdsNum)) {
         return alert('Error');
      } else {
         return alert(`${surfaceAreaCalc(rdsNum)} meters`);
      }
   };

   fcBtn.addEventListener('click', showSurfaceArea);

   const surfaceAreaCalc = (radius) => {
      return 4 * 3.14 * square(radius);
   };

   const square = (n) => {
      return n * n;
   };


}

function sameCase(a, b) {
   if (typeof (a || b) == 'number') {
      return 0;
   } else { return 1; }
}
console.log(sameCase('A', 5));



