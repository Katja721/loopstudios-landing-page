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

menuItems.forEach((elem) =>
  elem.addEventListener("mouseover", function () {
    if (mediaquery) return;
    let index = menuItems.indexOf(elem);
    console.log(underline);
    underlines[index].style.display = "block";
    elem.addEventListener("mouseout", function () {
      underlines[index].style.display = "none";
    });
  })
);
imgs.forEach((img) =>
  img.addEventListener("mouseover", function () {
    if (mediaquery) return;
    img.style.filter = "opacity(0.5)";
    const index = imgs.indexOf(img);
    imageParagraphs[index].style.color = "hsl(0, 0%, 0%)";
    imageParagraphs[index].style.filter = "opacity(1)";

    // console.log(index);
    img.addEventListener("mouseout", function () {
      if (mediaquery) return;
      imgs[index].style.filter = "opacity(1)";
      imageParagraphs[index].style.color = "hsl(0, 0%, 100%)";
    });
    // imageParagraphs.forEach(paragraph=>
    //   paragraph.addEventListener('mouseover', function(){

    //   }))
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

    // console.log(index);
    paragraph.addEventListener("mouseout", function () {
      if (mediaquery) return;
      imgs[index].style.filter = "opacity(1)";
      imageParagraphs[index].style.color = "hsl(0, 0%, 100%)";
    });
    // imageParagraphs.forEach(paragraph=>
    //   paragraph.addEventListener('mouseover', function(){

    //   }))
  })
);
navItems.forEach((elem) =>
  elem.addEventListener("mouseover", function () {
    let index = navItems.indexOf(elem);
    underlinesFooter[index].style.display = "block";
    elem.addEventListener("mouseout", function () {
      underlinesFooter[index].style.display = "none";
    });
  })
);
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
