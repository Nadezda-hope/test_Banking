"use strict";

//slider
let position = 0;
const slideToShow = 4;
const slideToScroll = 1;

const marginRight = 30;

const container = document.querySelector('.slider__container');
const track = document.querySelector('.slider__track');
const items = document.querySelectorAll('.slider__item');

const itemsCount = items.length;

const itemWidth = items[0].clientWidth;
const movePosition = slideToScroll * (itemWidth + marginRight);

const buttonLeft = document.querySelector('.service__button--left');
const buttonRight = document.querySelector('.service__button--right');

buttonRight.addEventListener('click', () => {
  const itemLeft = itemsCount - (Math.abs(position) + slideToShow * itemWidth) / itemWidth;

  position -= itemLeft >= slideToScroll ? movePosition : itemLeft * itemWidth;
  setPosition();
});

buttonLeft.addEventListener('click', () => {
  const itemLeft = Math.abs(position) / itemWidth;

  position += itemLeft >= slideToScroll ? movePosition : itemLeft * itemWidth;
  setPosition();
});

function setPosition() {
  track.style.transform = `translateX(${position}px)`;
  track.style.transition = `transform 1s ease-out`;
}

//menu

const buttonMenu = document.querySelector('.header__button--burger-menu');
const menu = document.querySelector('.header__list')

buttonMenu.addEventListener('click', handlerMenu);

function handlerMenu() {
  menu.classList.toggle('show-menu');
}