'use strict;';

welcome();

function welcome() {
  var name = prompt('Enter Your Name', 'Guest');
  var nameElement = document.getElementById('name');
  var welcom = document.getElementById('welcom');
  if (name !== '') {
    welcom.style.display = 'block';
  }
  nameElement.innerHTML = name;
  alert(' Welcome to my blog '+ name +'. I hope you enjoy your time here');
}
