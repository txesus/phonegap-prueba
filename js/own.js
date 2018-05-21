'use strict';

var moreInfoButton = document.querySelector('#sowMoreInfo');
var moreInfoDiv = document.querySelector('#moreInfo');
var closeButton = document.querySelector('#conditions-close');

function showInfo(event){
  moreInfoDiv.classList.toggle("hidden");
}
moreInfoButton.addEventListener('click', showInfo);
closeButton.addEventListener('click', showInfo);
