var a = document.getElementById('txt1').value;
var b = document.getElementById('txt2').value;
var c = document.getElementById('txt3').value;

function check(num) {
   if (a == 0 || b == 0 || c == 0) {
      alert('Error the input Empty');
   } else if (a % 1 != 0 || b % 1 != 0 || c % 1 != 0) {
      alert('Not a Integer');
   } else if ((a===b) && (a!=c) || (b==c) && (b!=a) || (c==a) && (c!=b)) {
      alert("An isosceles triangle");
      var x = document.createElement('IMG');
      x.setAttribute("src", "img/Anisoscelespng.png");
      document.body.appendChild(x);
   } else if((a===b) && (b==c)) {
     alert("Equilateral triangle");
     var x = document.createElement('IMG');
     x.setAttribute("src", "img/equilateral.jpg");
     document.body.appendChild(x);
   } else if ((a + b > c) && (a + c > b) && (b + c > a)) {
      alert("Not Triangle");
   } else {
      var x = document.createElement('IMG');
      x.setAttribute("src", "img/Triangle.png");
      document.body.appendChild(x);
      alert("Triangle");
   }
   return num;
}

function startTime(){
   var today = new Date();
   var h = today.getHours();
   var m = today.getMinutes();
   var s = today.getSeconds();
   m = checkTime(m);
   s = checkTime(s);
   document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
   var t = setTimeout(startTime, 500);
}

function checkTime(i){
  if(i < 10) {i = "0" + i}; 
  return i; 
}


