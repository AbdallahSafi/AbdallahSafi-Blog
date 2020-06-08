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
  alert('Hello, ' + name + '. I hope you enjoy your time here');
  guessGame();
  alert('Welcome a gain ' +name);
}

function guessGame() {
  alert('Before I let you enter my website, We will play a guessing game and you should answer with y/n or yes/no only.\n \n let us get started');
  question1();
  question2();
  question3();
  question4();
  question5();
}

function question1(){
  var q1 = 'Am I a male ?';
  var a = prompt(q1).toLowerCase();
  if ( a === 'yes' || a === 'y') {
    alert('You guessed it right');
    //   console.log('You guessed it right');
  } else if(a === 'no' || a === 'n') {
    alert('Wrong!');
    //   console.log('Wrong!');
  } else {
    alert('You should answer with y/n or yes/no only');
    question1();
  }
}

function question2(){
  var q2 = 'Do you think that I am kind of person who liks playing with numbers ?';
  var a = prompt(q2).toLowerCase();
  if ( a === 'yes' || a === 'y') {
    alert('You are correct! that is why I studied mathematics at university');
    //   console.log('You are correct! that is why I studied mathematics at university');
  } else if(a === 'no' || a === 'n') {
    alert('Wrong! actually I love math and I studied mathematics at university');
    //   console.log('Wrong! actually I love math and I studied mathematics at university');
  } else {
    alert('You should answer with y/n or yes/no only');
    question2();
  }
}

function question3(){
  var q3 = 'Do you think someone who loves math can work as a graphic designer?';
  var a = prompt(q3).toLowerCase();
  if ( a === 'yes' || a === 'y') {
    alert('You are correct! I worked as a graphic designer and UI/UX designer');
    //   console.log('You are correct! I worked as a graphic designer and UI/UX designer');
  } else if(a === 'no' || a === 'n') {
    alert('Wrong! actually I worked as a graphic designer and UI/UX designer');
    //   console.log('Wrong! actually I worked as a graphic designer and UI/UX designer');
  } else {
    alert('You should answer with y/n or yes/no only');
    question3();
  }
}

function question4(){
  var q4 = 'You think that maybe I studied graphic design in a college, is that right ?';
  var a = prompt(q4).toLowerCase();
  if ( a === 'yes' || a === 'y') {
    alert('Wrong! I did not study graphic design, but it was a hobby, but in addition to mathematics, I studied computer engineering');
    //   console.log('Wrong! I did not study graphic design, but it was a hobby, but in addition to mathematics, I studied computer engineering');
  } else if(a === 'no' || a === 'n') {
    alert('You are correct! but in addition to mathematics, I studied computer engineering');
    //   console.log('You are correct! but in addition to mathematics, I studied computer engineering'');
  } else {
    alert('You should answer with y/n or yes/no only');
    question4();
  }
}

function question5(){
  var q5 = 'If I am now a web developer, does this make sense to you ?';
  var a = prompt(q5).toLowerCase();
  if ( a === 'yes' || a === 'y') {
    alert('Sure! it makes sense and I am now full time web developer');
    //   console.log('Sure! it makes sense and I am now full time web developer');
  } else if(a === 'no' || a === 'n') {
    alert('You guessed it wrong! I am now full time web developer');
    //   console.log('You guessed it wrong! I am now full time web developer');
  } else {
    alert('You should answer with y/n or yes/no only');
    question5();
  }
}


