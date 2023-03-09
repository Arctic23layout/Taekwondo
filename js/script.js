// header
$(document).ready(function() {
  $('.header__burger').click(function(event) {
     $('.header__burger,.header__menu').toggleClass(' actives');
     $('body').toggleClass('lock'); // при открытом меню блокирует прокрутку
    
  }); 
  $('.fotka').slick({
    adaptiveHeight:true,
    slidesToShow:3, 
    slidesToScroll:4,
    speed:500,
    easing:'ease',
    infinite:false, // отключает бесконечную прокрутку
    centerMode:true,
    swipe:true,
  });
});

// HEADER THE END============================================================

// modal для вкиключення модального вікна при клике в не модального окна
// Get the modal
// var modal = document.getElementById('modal01');

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

// modal

// =======================================================================
// ?coachSlides
// !coachSlides
let coachSlideIndex = 1;
   showcoachSlides(coachSlideIndex);

function plusSlider01(n) {
	showcoachSlides(coachSlideIndex += n);
}

function currentSlide01(n) {
	showcoachSlides(coachSlideIndex = n);
}

function showcoachSlides(n) {
	let i;
	let slides01 = document.getElementsByClassName("coachSlides");
	let switchs = document.getElementsByClassName("switch");
	if (n > slides01.length) { coachSlideIndex = 1 }
	if (n < 1) { coachSlideIndex = slides01.length }
	for (i = 0; i < slides01.length; i++) {
		slides01[i].style.display = "none";
	}
	for (i = 0; i < switchs.length; i++) {
		switchs[i].className = switchs[i].className.replace(" active", "");
	}
	slides01[coachSlideIndex - 1].style.display = "block";
	switchs[coachSlideIndex - 1].className += " active";
}// coachSlides end

// !coachSlides 0
let coachSlideIndex0 = 1;
showcoachSlides0zero(coachSlideIndex0);

function plusSlider0zero(n) {
	showcoachSlides0zero(coachSlideIndex0 += n);
}

function currentSlide0zero(n) {
	showcoachSlides0zero(coachSlideIndex0 = n);
}

function showcoachSlides0zero(n) {
	let i;
	let slides0zero = document.getElementsByClassName("coachSlideszero");
	let switchs0 = document.getElementsByClassName("switchzero");
	if (n > slides0zero.length) { coachSlideIndex0 = 1 }
	if (n < 1) { coachSlideIndex0 = slides0zero.length }
	for (i = 0; i < slides0zero.length; i++) {
		slides0zero[i].style.display = "none";
	}
	for (i = 0; i < switchs0.length; i++) {
		switchs0[i].className = switchs0[i].className.replace(" activen", "");
	}
	slides0zero[coachSlideIndex0 - 1].style.display = "block";
	switchs0[coachSlideIndex0 - 1].className += " activen";
}
// coachSlides0 end
// !coachSlides01

let coachSlideIndex01 = 1;
showcoachSlides01(coachSlideIndex01);

function plusSlider01one(n) {
	showcoachSlides01(coachSlideIndex01 += n);
}

function currentSlide01one(n) {
	showcoachSlides01(coachSlideIndex01 = n);
}

function showcoachSlides01(n) {
	let i;
	let slides01one = document.getElementsByClassName("coachSlidesone");
	let switchs01 = document.getElementsByClassName("switchone");
	if (n > slides01one.length) { coachSlideIndex01 = 1 }
	if (n < 1) { coachSlideIndex01 = slides01one.length }
	for (i = 0; i < slides01one.length; i++) {
		slides01one[i].style.display = "none";
	}
	for (i = 0; i < switchs01.length; i++) {
		switchs01[i].className = switchs01[i].className.replace(" activ", "");
	}
	slides01one[coachSlideIndex01 - 1].style.display = "block";
	switchs01[coachSlideIndex01 - 1].className += " activ";
}
// coachSlides01 end
// ?coachSlides end
// !slider code start

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("usSlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex =1 }    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" action", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " action";
}
// end slider code====================================================


// rid mor
function aboutUs() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerText = "Читати далі"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerText = "Читайте менше"; 
    moreText.style.display = "inline";
  }
}

function forChildren() {
  let dots = document.getElementById("dots01");
  let moreText = document.getElementById("more01");
  let btnText = document.getElementById("myBtn01");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerText = "Читати далі"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerText = "Читайте менше"; 
    moreText.style.display = "inline";
  }
}

function feaTures() {
  let dots = document.getElementById("dots02");
  let moreText = document.getElementById("more02");
  let btnText = document.getElementById("myBtn02");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerText = "Читати далі"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerText = "Читайте менше"; 
    moreText.style.display = "inline";
  }
}
// rid mor

// trainers===========================================

