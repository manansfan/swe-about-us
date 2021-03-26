function navSlide() {
   const burger = document.querySelector(".burger");
   const nav = document.querySelector(".nav-links");
   const navLinks = document.querySelectorAll(".nav-links li");

   burger.addEventListener("click", () => {
       //Toggle Nav
       nav.classList.toggle("nav-active");

       //Animate Links
       navLinks.forEach((link, index) => {
           if (link.style.animation) {
               link.style.animation = ""
           } else {
               link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
           }
       });
       //Burger Animation
       burger.classList.toggle("toggle");
   });

}

navSlide();

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}



var slideIndex1 = 1;
showDivs1(slideIndex1);

function plusDivs1(n) {
  showDivs1(slideIndex1 += n);
}

function showDivs1(n) {
  var i;
  var y = document.getElementsByClassName("mySlides1");
  if (n > y.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = y.length}
  for (i = 0; i < y.length; i++) {
    y[i].style.display = "none";
  }
  y[slideIndex1-1].style.display = "block";
}


var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs2(n) {
  showDivs2(slideIndex2 += n);
}

function showDivs2(n) {
  var i;
  var z = document.getElementsByClassName("mySlides2");
  if (n > z.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = z.length}
  for (i = 0; i < z.length; i++) {
    z[i].style.display = "none";
  }
  z[slideIndex2-1].style.display = "block";
}


var slideIndex3 = 1;
showDivs3(slideIndex3);

function plusDivs3(n) {
  showDivs3(slideIndex3 += n);
}

function showDivs3(n) {
  var i;
  var b = document.getElementsByClassName("mySlides3");
  if (n > b.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = b.length}
  for (i = 0; i < b.length; i++) {
    b[i].style.display = "none";
  }
  b[slideIndex3-1].style.display = "block";
}


var slideIndex4 = 1;
showDivs4(slideIndex4);

function plusDivs4(n) {
  showDivs4(slideIndex4 += n);
}

function showDivs4(n) {
  var i;
  var b = document.getElementsByClassName("mySlides4");
  if (n > b.length) {slideIndex4 = 1}
  if (n < 1) {slideIndex4 = b.length}
  for (i = 0; i < b.length; i++) {
    b[i].style.display = "none";
  }
  b[slideIndex4-1].style.display = "block";
}


var slideIndex5 = 1;
showDivs5(slideIndex5);

function plusDivs5(n) {
  showDivs5(slideIndex5 += n);
}

function showDivs5(n) {
  var i;
  var b = document.getElementsByClassName("mySlides5");
  if (n > b.length) {slideIndex5 = 1}
  if (n < 1) {slideIndex5 = b.length}
  for (i = 0; i < b.length; i++) {
    b[i].style.display = "none";
  }
  b[slideIndex5-1].style.display = "block";
}



var slideIndex6 = 1;
showDivs6(slideIndex6);

function plusDivs6(n) {
  showDivs6(slideIndex6 += n);
}

function showDivs6(n) {
  var i;
  var b = document.getElementsByClassName("mySlides6");
  if (n > b.length) {slideIndex6 = 1}
  if (n < 1) {slideIndex6 = b.length}
  for (i = 0; i < b.length; i++) {
    b[i].style.display = "none";
  }
  b[slideIndex6-1].style.display = "block";
}


var slideIndex7 = 1;
showDivs7(slideIndex7);

function plusDivs7(n) {
  showDivs7(slideIndex7 += n);
}

function showDivs7(n) {
  var i;
  var b = document.getElementsByClassName("mySlides7");
  if (n > b.length) {slideIndex7 = 1}
  if (n < 1) {slideIndex7 = b.length}
  for (i = 0; i < b.length; i++) {
    b[i].style.display = "none";
  }
  b[slideIndex7-1].style.display = "block";
}


var slideIndex8 = 1;
showDivs8(slideIndex8);

function plusDivs8(n) {
  showDivs8(slideIndex8 += n);
}

function showDivs8(n) {
  var i;
  var b = document.getElementsByClassName("mySlides8");
  if (n > b.length) {slideIndex8 = 1}
  if (n < 1) {slideIndex8 = b.length}
  for (i = 0; i < b.length; i++) {
    b[i].style.display = "none";
  }
  b[slideIndex8-1].style.display = "block";
}
