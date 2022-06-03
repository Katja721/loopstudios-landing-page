"use strict";
const underline = document.querySelectorAll(".underline");
const underlines = [...underline];
const menuItem = document.querySelectorAll(".menuItem");
const menuItems = [...menuItem];
const gridImeges = document.querySelectorAll(".img");
const imgs = [...gridImeges];
const imegeParagraph = document.querySelectorAll(".imageParagraph");
const imageParagraphs = [...imegeParagraph];
const navItem = document.querySelectorAll(".navItem");
const navItems = [...navItem];
const underlineFooter = document.querySelectorAll(".underlineFooter");
const underlinesFooter = [...underlineFooter];
const mediaquery = window.matchMedia("(max-width: 500px)").matches;

//implementing header menu hover states
menuItems.forEach((elem) =>
  elem.addEventListener("mouseover", function () {
    if (mediaquery) return;
    let index = menuItems.indexOf(elem);
    elem.style.cursor = "pointer";
    underlines[index].style.display = "block";
    elem.addEventListener("mouseout", function () {
      underlines[index].style.display = "none";
    });
  })
);

//implementing grid images hover states
imgs.forEach((img) =>
  img.addEventListener("mouseover", function () {
    if (mediaquery) return;
    img.style.filter = "opacity(0.5)";
    img.style.cursor = "pointer";
    const index = imgs.indexOf(img);
    imageParagraphs[index].style.color = "hsl(0, 0%, 0%)";
    imageParagraphs[index].style.filter = "opacity(1)";
    imageParagraphs[index].style.cursor = "pointer";

    img.addEventListener("mouseout", function () {
      if (mediaquery) return;
      imgs[index].style.filter = "opacity(1)";
      imageParagraphs[index].style.color = "hsl(0, 0%, 100%)";
    });
  })
);

imageParagraphs.forEach((paragraph) => {
  if (mediaquery) return;
  paragraph.style.color = "hsl(0, 0%, 100%)";
});
imageParagraphs.forEach((paragraph) =>
  paragraph.addEventListener("mouseover", function () {
    if (mediaquery) return;
    const index = imageParagraphs.indexOf(paragraph);
    imgs[index].style.filter = "opacity(0.5)";
    imageParagraphs[index].style.color = "hsl(0, 0%, 0%)";

    paragraph.addEventListener("mouseout", function () {
      if (mediaquery) return;
      imgs[index].style.filter = "opacity(1)";
      imageParagraphs[index].style.color = "hsl(0, 0%, 100%)";
    });
  })
);

//immplementing footer hover states
navItems.forEach((elem) =>
  elem.addEventListener("mouseover", function () {
    elem.style.cursor = "pointer";
    let index = navItems.indexOf(elem);
    underlinesFooter[index].style.display = "block";
    elem.addEventListener("mouseout", function () {
      underlinesFooter[index].style.display = "none";
    });
  })
);

//immplemnting mobile menu
const hamburgerIcon = document.querySelector(".hamburger-icon");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close-icon");
hamburgerIcon.addEventListener("click", function () {
  menu.classList.remove("hidden");
  close.classList.remove("hidden");
});
close.addEventListener("click", function () {
  menu.classList.add("hidden");
});
