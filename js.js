window.addEventListener("load", init);
function init() {
  document.querySelectorAll("button")[0].addEventListener(
    "click",
    // névtelen függvény
    function () {
      console.log(this);
    }
  );
  document.querySelectorAll("button")[1].addEventListener(
    "click",
    // névtelen függvény, nyílfüggvénnyel
    () => {
      console.log(this);
    }
  );
}


function udvozlet(nev) {
  console.log("Hahó" + nev);
}

// függvény
var eredmeny = osszead(3, 5);
console.log(eredmeny);

function osszead(a, b) {
  return a + b;
}

//függvény kifejezés

var fvenykif = function (a, b) {
  return a + b;
};
console.log(fvenykif(4, 5));

/* Callback függvény */

setTimeout(function fveny1() {
  console.log("Hahó1");
}, 2000); /*Egyszer fut le, millisecond 2000ms=2s*/

setInterval(function fveny2() {
  var ido = new Date();
  var ora = ido.getHours();
  var perc = ido.getMinutes();
  var sec = ido.getSeconds();
  console.log(ora + ":" + perc + ":" + sec);
}, 2000); /* végtelenségig fog futni*/
