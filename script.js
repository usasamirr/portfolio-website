// fade in
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", ()=>{
  sections.forEach(sec=>{
    let top = sec.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});

// initial state
sections.forEach(sec=>{
  sec.style.opacity = 0;
  sec.style.transform = "translateY(50px)";
  sec.style.transition = "1s";
});

// contact animatsiya
const contactItems = document.querySelectorAll(".contact-item");

contactItems.forEach((item, i) => {
  item.style.opacity = 0;
  item.style.transform = "translateY(30px)";

  setTimeout(() => {
    item.style.transition = "0.6s";
    item.style.opacity = 1;
    item.style.transform = "translateY(0)";
  }, i * 150);
});

// skill animatsiya
const bars = document.querySelectorAll(".bar span");

window.addEventListener("scroll", () => {
  bars.forEach(bar => {
    let pos = bar.getBoundingClientRect().top;

    if(pos < window.innerHeight - 50){
      bar.style.width = bar.getAttribute("style").replace("width:", "");
    }
  });
});

// HERO TEXT ANIMATION
const title = document.querySelector(".title");
const desc = document.querySelector(".desc");

window.addEventListener("load", () => {
  title.style.opacity = 0;
  title.style.transform = "translateY(50px)";

  desc.style.opacity = 0;
  desc.style.transform = "translateY(50px)";

  setTimeout(() => {
    title.style.transition = "1s";
    title.style.opacity = 1;
    title.style.transform = "translateY(0)";
  }, 200);

  setTimeout(() => {
    desc.style.transition = "1s";
    desc.style.opacity = 1;
    desc.style.transform = "translateY(0)";
  }, 600);
});

// CAROUSEL AUTO SLIDE
const carousels = document.querySelectorAll(".carousel");

carousels.forEach(carousel => {

  let index = 0;
  let images = carousel.querySelectorAll("img");

  let interval = setInterval(() => {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
  }, 5000);

  // hover bo‘lsa to‘xtaydi
  carousel.addEventListener("mouseenter", () => {
    clearInterval(interval);
  });

  carousel.addEventListener("mouseleave", () => {
    interval = setInterval(() => {
      images[index].classList.remove("active");
      index = (index + 1) % images.length;
      images[index].classList.add("active");
    }, 5000);
  });

});

// footer animatsiya
const footer = document.querySelector(".footer");

window.addEventListener("scroll", () => {
  let pos = footer.getBoundingClientRect().top;

  if(pos < window.innerHeight - 100){
    footer.style.opacity = 1;
    footer.style.transform = "translateY(0)";
  }
});

// initial
footer.style.opacity = 0;
footer.style.transform = "translateY(50px)";
footer.style.transition = "1s";

// mini card animatsiya
const cards = document.querySelectorAll(".mini-card");

cards.forEach((card, i) => {
  card.style.opacity = 0;
  card.style.transform = "translateY(30px)";

  setTimeout(() => {
    card.style.transition = "0.6s";
    card.style.opacity = 1;
    card.style.transform = "translateY(0)";
  }, i * 120);
});

const bottom = document.querySelector(".footer-bottom");

window.addEventListener("scroll", () => {
  let pos = bottom.getBoundingClientRect().top;

  if(pos < window.innerHeight - 50){
    bottom.style.opacity = 1;
    bottom.style.transform = "translateY(0)";
  }
});

bottom.style.opacity = 0;
bottom.style.transform = "translateY(30px)";
bottom.style.transition = "0.8s";

const heroImg = document.querySelector(".hero-img img");

window.addEventListener("load", () => {
  heroImg.style.opacity = 0;
  heroImg.style.transform = "translateX(50px)";

  setTimeout(() => {
    heroImg.style.transition = "1s";
    heroImg.style.opacity = 1;
    heroImg.style.transform = "translateX(0)";
  }, 400);
});