const hamburger =
document.getElementById("hamburger");

const mobileMenu =
document.getElementById("mobileMenu");

const closeBtn =
document.getElementById("closeMenu");

const homeToggle =
document.querySelector(".mobile-drop-toggle");

/* OPEN */
hamburger.addEventListener("click",()=>{
mobileMenu.classList.add("active");
});

/* CLOSE */
closeBtn.addEventListener("click",()=>{
mobileMenu.classList.remove("active");
});

/* DROPDOWN */
homeToggle.addEventListener("click",(e)=>{
e.preventDefault();
homeToggle.parentElement.classList.toggle("active");
});

const slides = [
{
title:`Smart Medical <br> Device Solutions`,
desc:`Empowering healthcare providers with innovative medical device management systems.`,
img:"images/q (1).webp"
},

{
title:`Advanced Healthcare <br> Technology`,
desc:`Delivering reliable monitoring and smart healthcare infrastructure solutions.`,
img:"images/q (2).webp"
}

];

let index = 0;

const title = document.getElementById("heroTitle");
const desc = document.getElementById("heroDesc");
const img = document.getElementById("heroImg");

function changeHero(){

title.classList.add("fade");
desc.classList.add("fade");
img.classList.add("fade");

setTimeout(()=>{

index = (index + 1) % slides.length;

title.innerHTML = slides[index].title;
desc.innerHTML = slides[index].desc;
img.src = slides[index].img;

title.classList.remove("fade");
desc.classList.remove("fade");
img.classList.remove("fade");

},400);
}

setInterval(changeHero,3000);






const cards = document.querySelectorAll(".doctor-card");

function revealDoctors(){
cards.forEach(card=>{
const windowHeight = window.innerHeight;
const cardTop = card.getBoundingClientRect().top;

if(cardTop < windowHeight - 80){
card.classList.add("show");
}
});
}

window.addEventListener("scroll", revealDoctors);





let topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};






const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
},{
  threshold:0.2
});

document.querySelectorAll(
".reveal, .reveal-right, .zoom"
).forEach(el=>{
  observer.observe(el);
});






const f = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
},{threshold:0.2});

document.querySelectorAll(".reveal")
.forEach(el=>f.observe(el));



const n=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{
   if(entry.isIntersecting){
     entry.target.classList.add("active");
   }
 });
},{threshold:0.3});

document.querySelectorAll(
".reveal-left, .reveal-right"
).forEach(el=>n.observe(el));




const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function(e){

e.preventDefault();

/* CHECK FORM VALIDATION */
if(form.checkValidity()){

  /* OPTIONAL small delay (looks professional) */
  setTimeout(()=>{
    window.location.href = "404page.html";
  },500);

}else{
  alert("Please fill all required fields correctly.");
}

});



function revealOnScroll(){

const reveals =
document.querySelectorAll(".reveal");

reveals.forEach((el,index)=>{

const windowHeight = window.innerHeight;
const elementTop =
el.getBoundingClientRect().top;

if(elementTop < windowHeight - 120){

setTimeout(()=>{
el.classList.add("active");
},index * 150);

}

});

}

window.addEventListener("scroll",revealOnScroll);















    const a=document.getElementById("contactForm");
const errorMsg=document.getElementById("errorMsg");

a.addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value.trim();
let email=document.getElementById("email").value.trim();
let phone=document.getElementById("phone").value.trim();
let message=document.getElementById("message").value.trim();

/* EMPTY CHECK */
if(name==="" || email==="" || phone==="" || message===""){
errorMsg.innerText="⚠ Please fill all fields.";
return;
}

/* EMAIL VALIDATION */
let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(emailPattern)){
errorMsg.innerText="⚠ Enter valid email address.";
return;
}

/* SUCCESS REDIRECT */
window.location.href="404page.html";

});
















const b = document.getElementById("appointmentForm");

form.addEventListener("submit", function(e){

e.preventDefault(); // stop default submit

const inputs = b.querySelectorAll("input");
let valid = true;

inputs.forEach(input=>{
if(input.value.trim() === ""){
valid = false;
}
});

if(valid){
window.location.href = "404page.html";
}else{
alert("Please fill all fields before booking.");
}

});



