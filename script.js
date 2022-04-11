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
menuItems.forEach((elem) =>
  elem.addEventListener("mouseover", function () {
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
    img.style.filter = "opacity(0.5)";
    const index = imgs.indexOf(img);
    imageParagraphs[index].style.color = "hsl(0, 0%, 0%)";
    imageParagraphs[index].style.filter = "opacity(1)";

    // console.log(index);
    img.addEventListener("mouseout", function () {
      imgs[index].style.filter = "opacity(1)";
      imageParagraphs[index].style.color = "hsl(0, 0%, 100%)";
    });
    // imageParagraphs.forEach(paragraph=>
    //   paragraph.addEventListener('mouseover', function(){

    //   }))
  })
);

imageParagraphs.forEach(
  (paragraph) => (paragraph.style.color = "hsl(0, 0%, 100%)")
);
imageParagraphs.forEach((paragraph) =>
  paragraph.addEventListener("mouseover", function () {
    const index = imageParagraphs.indexOf(paragraph);
    imgs[index].style.filter = "opacity(0.5)";
    imageParagraphs[index].style.color = "hsl(0, 0%, 0%)";

    // console.log(index);
    paragraph.addEventListener("mouseout", function () {
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
