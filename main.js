const nav=document.getElementById("nav");
const hamburger=document.getElementById("hamburger");
const closeBtn=document.getElementById("closeBtn");

/* hamburger */
hamburger.onclick=()=>nav.classList.add("active");
closeBtn.onclick=()=>nav.classList.remove("active");

/* mobile dropdown */
document.querySelectorAll(".dropdown>a")
.forEach(item=>{
item.addEventListener("click",function(e){
if(window.innerWidth<=900){
e.preventDefault();
this.parentElement.classList.toggle("active");
}
});
});



/* animation + counter */
window.addEventListener("load",()=>{

document.querySelectorAll(".reveal")
.forEach((el,i)=>{
setTimeout(()=>el.classList.add("active"),i*300);
});

document.querySelectorAll(".counter")
.forEach(counter=>{
const update=()=>{
const target=+counter.dataset.target;
const count=+counter.innerText;
const inc=target/100;

if(count<target){
counter.innerText=Math.ceil(count+inc);
requestAnimationFrame(update);
}else{
counter.innerText=target+"+";
}
};
update();
});

});



/* SCROLL REVEAL */

function reveal(){
let reveals=document.querySelectorAll(".reveal");

reveals.forEach(el=>{
let windowHeight=window.innerHeight;
let elementTop=el.getBoundingClientRect().top;

if(elementTop < windowHeight-100){
el.classList.add("active");
}
});
}

window.addEventListener("scroll",reveal);


/* SCROLL ANIMATION FOR STACKLY HUB */

function revealHeading(){

const heading = document.querySelector(".moving-text");

const windowHeight = window.innerHeight;
const elementTop = heading.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){
heading.classList.add("show");
}

}

window.addEventListener("scroll", revealHeading);



/* ===== SCROLL REVEAL SYSTEM ===== */
/* ===== SCROLL REVEAL FIX ===== */

function revealAnimation(){

const reveals = document.querySelectorAll(
".reveal-left, .reveal-right, .reveal-up"
);

const windowHeight = window.innerHeight;

reveals.forEach(el => {

const elementTop = el.getBoundingClientRect().top;

/* ✅ FIXED TRIGGER */
if(elementTop < windowHeight - 50){
el.classList.add("reveal-active");
}

});

}

window.addEventListener("scroll", revealAnimation);

/* run immediately */
revealAnimation();



function revealBanner(){

const banner = document.querySelector(".reveal-banner");
const windowHeight = window.innerHeight;
const elementTop = banner.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){
banner.style.opacity="1";
banner.style.transform="translateY(0)";
}

}

window.addEventListener("scroll",revealBanner);
window.addEventListener("load",revealBanner);



function revealScroll(){
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el=>{
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if(elementTop < windowHeight - 120){
        el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealScroll);



const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});

},{
threshold:0.2
});

document.querySelectorAll(".reveal-item")
.forEach(el=>observer.observe(el));


const revealElements = document.querySelectorAll(".reveal");

const scrollReveal = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("active");
}
});

},{
threshold:0.2
});

revealElements.forEach(el=>{
scrollReveal.observe(el);
});



window.addEventListener("load", function () {

    const reveals = document.querySelectorAll(".reveal");

    function revealOnScroll() {

        const windowHeight = window.innerHeight;

        reveals.forEach(function(el){

            const elementTop =
                el.getBoundingClientRect().top;

            if(elementTop < windowHeight - 100){
                el.classList.add("active");
            }

        });
    }

    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);

});



const a= new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(
  ".about-content, .img-box"
).forEach(el => a.observe(el));




const elements = document.querySelectorAll(
  ".process-title, .process-item"
);

const c = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      const index =
        [...elements].indexOf(entry.target);

      setTimeout(() => {
        entry.target.classList.add("process-show");
      }, index * 300); // delay one by one

      c.unobserve(entry.target);
    }

  });
}, {
  threshold: 0.2
});

elements.forEach(el => c.observe(el));



const visionElements = document.querySelectorAll(
  ".vision-left, .vision-right, .vision-image"
);

const visionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      const index =
        [...visionElements].indexOf(entry.target);

      setTimeout(() => {
        entry.target.classList.add("vision-show");
      }, index * 300); // one by one delay

      visionObserver.unobserve(entry.target);
    }

  });
}, {
  threshold: 0.25
});

visionElements.forEach(el =>
  visionObserver.observe(el)
);




/* SCROLL REVEAL */
const revealItems =
document.querySelectorAll(
".wellness-img, .wellness-content, .stat-box"
);

const revealObserver =
new IntersectionObserver(entries=>{
 entries.forEach(entry=>{
   if(entry.isIntersecting){
     entry.target.style.opacity="1";
     entry.target.style.transform="translateY(0)";
   }
 });
},{threshold:0.3});

revealItems.forEach(el=>{
 el.style.opacity="0";
 el.style.transform="translateY(60px)";
 el.style.transition="0.8s";
 revealObserver.observe(el);
});


/* COUNTER ANIMATION */
const counters =
document.querySelectorAll(".counter");

const counterObserver =
new IntersectionObserver(entries=>{
 entries.forEach(entry=>{
  if(entry.isIntersecting){

   const counter = entry.target;
   const target = +counter.dataset.target;

   let count = 0;

   const update=()=>{
     count += target/80;
     if(count < target){
       counter.innerText =
       Math.ceil(count);
       requestAnimationFrame(update);
     }else{
       counter.innerText = target + "+";
     }
   };

   update();
   counterObserver.unobserve(counter);
  }
 });
},{threshold:0.6});

counters.forEach(c =>
 counterObserver.observe(c)
);



const expertCards =
document.querySelectorAll(".expert-card");

const expertObserver =
new IntersectionObserver(entries=>{

 entries.forEach(entry=>{

   if(entry.isIntersecting){

     const index =
     [...expertCards].indexOf(entry.target);

     setTimeout(()=>{
       entry.target.classList.add("expert-show");
     }, index * 300);

     expertObserver.unobserve(entry.target);
   }

 });

},{threshold:0.3});

expertCards.forEach(card=>{
 expertObserver.observe(card);
});



const faqItems =
document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

  item.querySelector(".faq-question")
  .addEventListener("click", ()=>{

    item.classList.toggle("active");

  });

});





/* SPLIT WORDS */
const heading =
document.querySelector(".services-left h1");

const words =
heading.innerText.split(" ");

heading.innerHTML =
words.map(word =>
`<span class="word">${word}</span>`
).join(" ");


/* SCROLL OBSERVER */
const serviceObserver =
new IntersectionObserver(entries=>{

 entries.forEach(entry=>{

   if(entry.isIntersecting){

     const allWords =
     document.querySelectorAll(".word");

     allWords.forEach((word,i)=>{
       setTimeout(()=>{
         word.classList.add("word-show");
       }, i * 120); // speed control
     });

     setTimeout(()=>{
       document
       .querySelector(".services-right")
       .classList.add("text-show");
     }, allWords.length * 120);

   }

 });

},{threshold:0.4});

serviceObserver.observe(
document.querySelector(".stackly-services-hero")
);





const medicalItems =
document.querySelectorAll(
".medical-title, .medical-card"
);

const medicalObserver =
new IntersectionObserver((entries)=>{

 entries.forEach(entry=>{

   if(entry.isIntersecting){

     const index =
     [...medicalItems].indexOf(entry.target);

     setTimeout(()=>{
       entry.target.classList.add("medical-show");
     }, index * 200); // delay control

     medicalObserver.unobserve(entry.target);
   }

 });

},{threshold:0.2});

medicalItems.forEach(el=>{
 medicalObserver.observe(el);
});





/* SELECT ALL NUMBER ELEMENTS */
const statNumbers =
document.querySelectorAll(".counter");

/* CREATE OBSERVER */
const statsScrollWatcher =
new IntersectionObserver((entries)=>{

  entries.forEach((entry)=>{

    if(entry.isIntersecting){

      const statElement = entry.target;

      const finalValue =
      parseInt(
        statElement.dataset.target
      );

      let currentValue = 0;

      const animateValue = ()=>{

        currentValue += finalValue / 80;

        if(currentValue < finalValue){

          statElement.innerText =
          Math.ceil(currentValue);

          requestAnimationFrame(
            animateValue
          );

        }else{

          statElement.innerText =
          finalValue;

        }
      };

      animateValue();

      statsScrollWatcher
      .unobserve(statElement);
    }

  });

},{
  threshold:0.5
});


/* START OBSERVING */
statNumbers.forEach((number)=>{
  statsScrollWatcher.observe(number);
});














/* SELECT FEATURE CARDS */
const featureElements =
document.querySelectorAll(".feature-card");

/* OBSERVER */
const featureScrollAnimation =
new IntersectionObserver((entries)=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){

      const elementIndex =
      [...featureElements]
      .indexOf(entry.target);

      setTimeout(()=>{

        entry.target
        .classList.add("feature-show");

      }, elementIndex * 250); // delay

      featureScrollAnimation
      .unobserve(entry.target);
    }

  });

},{
  threshold:0.25
});

/* START OBSERVE */
featureElements.forEach(card=>{
  featureScrollAnimation.observe(card);
});




const insightCards =
document.querySelectorAll(".insight-card");

const insightObserver =
new IntersectionObserver(entries=>{

 entries.forEach(entry=>{

  if(entry.isIntersecting){

   const index =
   [...insightCards]
   .indexOf(entry.target);

   setTimeout(()=>{
     entry.target
     .classList.add("insight-show");
   }, index * 200);

   insightObserver.unobserve(entry.target);
  }

 });

},{threshold:0.2});

insightCards.forEach(card=>{
 insightObserver.observe(card);
});









const monthlyBtn = document.getElementById("monthlyBtn");
const yearlyBtn = document.getElementById("yearlyBtn");
const prices = document.querySelectorAll(".price");
const duration = document.querySelectorAll(".duration");

monthlyBtn.addEventListener("click", () => {
  monthlyBtn.classList.add("active");
  yearlyBtn.classList.remove("active");

  prices.forEach(price => {
    price.textContent = "$" + price.dataset.month;
  });

  duration.forEach(d => {
    d.textContent = "/ per month";
  });
});

yearlyBtn.addEventListener("click", () => {
  yearlyBtn.classList.add("active");
  monthlyBtn.classList.remove("active");

  prices.forEach(price => {
    price.textContent = "$" + price.dataset.year;
  });

  duration.forEach(d => {
    d.textContent = "/ per year";
  });
});

