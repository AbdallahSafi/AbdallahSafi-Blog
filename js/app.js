'use strict;';

// welcome();

// function welcome() {
var Gistname = prompt('Enter Your Name', 'Guest');
var nameElement = document.getElementById('name');
var welcom = document.getElementById('welcom');
if (Gistname !== '') {
  welcom.style.display = 'block';
}
nameElement.innerHTML = Gistname;
alert('Hello, ' + Gistname + '. I hope you enjoy your time here');
// guessGame();
// alert('Welcome a gain ' +Gistname);
// }

// function guessGame() {
alert('Before I let you enter my website, We will play a guessing game and you should answer with y/n or yes/no for the first 5 question.\n \n let us get started');
question1();
question2();
question3();
question4();
question5();
// question6();
// question7();
// question8();
// question9();
// }

// 5 yes or no Questions

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

//   6 numeric Questions

var nca = 0; //counter for the number of correct answer
// function question6(){
var q = 'How old I am ?';
var attemps = 0;
while(attemps < 4){
  var a = Number(prompt(q));
  // console.log(a);
  switch (true) {
  case (a === 29):
    alert('You guessed it right!');
    nca= nca + 1;
    // console.log('right');
    break;
  case (a > 29):
    // console.log('high');
    attemps = attemps + 1;
    alert('oobs! too high. You have '+(4-attemps)+' tries left');
    // console.log(attemps);
    break;
  case (0 < a && a < 29):
    // console.log('low');
    attemps+=1;
    alert('oobs! too low. You have '+(4-attemps)+' tries left');
    // console.log(attemps);
    break;
  case (a === 0 || isNaN(a)):
    // console.log('not valid');
    attemps+=1;
    alert('You should add a valid number. You have '+(4-attemps)+' tries left');
    // console.log(attemps);
    break;

  default:
    // console.log('default');
    break;
  }
  if (a === 29) {
    break;
  }else if(attemps === 4){
    alert('Sorry, You had four tries. The right answer is 29');
  }
}

// }



// function question7(){
q = 'I am now married. How many years do you think I was married?';
attemps = 0;
while(attemps < 4){
  a = Number(prompt(q));
  // console.log(a);
  switch (true) {
  case (a === 3):
    alert('You guessed it right!');
    nca= nca + 1;
    // console.log('right');
    break;
  case (a > 3):
    // console.log('high');
    attemps = attemps + 1;
    alert('oobs! too high. You have '+(4-attemps)+' tries left');
    // console.log(attemps);
    break;
  case (0 < a && a < 3):
    // console.log('low');
    attemps+=1;
    alert('oobs! too low. You have '+(4-attemps)+' tries left');
    // console.log(attemps);
    break;
  case (a === 0):
    // console.log('not valid');
    attemps+=1;
    alert('You should add a valid number. You have '+(4-attemps)+' tries left');
    // console.log(attemps);
    break;

  default:
    // console.log('default');
    break;
  }
  if (a === 3) {
    break;
  }else if(attemps === 4){
    alert('Sorry, You had four tries. The right answer is 3');
  }
}
// }



// function question8(){
q = 'I have been married for 3 years. How many sons do you think I have ?';
attemps = 0;
while(attemps < 4){
  a = Number(prompt(q));
  // console.log(a);
  switch (true) {
  case (a === 1):
    alert('You guessed it right!');
    nca= nca + 1;
    // console.log('right');
    break;
  case (a > 1):
    // console.log('high');
    attemps = attemps + 1;
    alert('oobs! too high. You have '+(4-attemps)+' tries left');
    console.log(attemps);
    break;
  case (0 < a && a < 1):
    // console.log('low');
    attemps+=1;
    alert('oobs! too low. You have '+(4-attemps)+' tries left');
    // console.log(attemps);
    break;
  case (a === 0):
    // console.log('not valid');
    attemps+=1;
    alert('You should add a valid number. You have '+(4-attemps)+' tries left');
    // console.log(attemps);
    break;
  default:
    // console.log('default');
    break;
  }
  if (a === 1) {
    break;
  }else if(attemps === 4){
    alert('Sorry, You had four tries. The right answer is 1');

  }
}



// function question9(){
q = 'What do you think are the total years spent in school in addition to higher education so far?';
attemps = 0;
while(attemps < 4){
  a = Number(prompt(q));
  // console.log(a);
  switch (true) {
  case (a === 19):
    alert('You guessed it right!');
    nca= nca + 1;
    // console.log('right');
    break;
  case (a > 19):
    // console.log('high');
    attemps = attemps + 1;
    alert('oobs! too high. You have '+(4-attemps)+' tries left');
    // console.log(attemps);
    break;
  case (0 < a && a < 19):
    // console.log('low');
    attemps+=1;
    alert('oobs! too low. You have '+(4-attemps)+' tries left');
    // console.log(attemps);
    break;
  case (a === 0):
    // console.log('not valid');
    attemps+=1;
    alert('You should add a valid number. You have '+(4-attemps)+' tries left');
    // console.log(attemps);
    break;
  default:
    // console.log('default');
    break;
  }
  if (a === 19) {
    break;
  }else if(attemps === 4){
    alert('Sorry, You had four tries. The right answer is 19');
  }
}
// }



// function question10(){
q = 'What do you think of the number of countries that I visited??';
attemps = 0;
while(attemps < 4){
  a = Number(prompt(q));
  // console.log(a);
  switch (true) {
  case (a === 2):
    alert('You guessed it right!');
    nca= nca + 1;
    // console.log('right');
    break;
  case (a > 2):
    // console.log('high');
    attemps = attemps + 1;
    alert('oobs! too high. You have '+(4-attemps)+' tries left');
    // console.log(attemps);
    break;
  case (0 < a && a < 2):
    // console.log('low');
    attemps+=1;
    alert('oobs! too low. You have '+(4-attemps)+' tries left');
    // console.log(attemps);
    break;
  case (a === 0):
    // console.log('not valid');
    attemps+=1;
    alert('You should add a valid number. You have '+(4-attemps)+' tries left');
    // console.log(attemps);
    break;
  default:
    // console.log('default');
    break;
  }
  if (a === 2) {
    break;
  }else if(attemps === 4){
    alert('Sorry, You had four tries. The right answer is 2');
  }
}
// }


// function question11(){
q = 'Based on what you know about me so far. In your opinion, how many jobs have I worked in previously?';
attemps = 0;
while(attemps < 4){
  a = Number(prompt(q));
  // console.log(a);
  switch (true) {
  case (a === 3):
    alert('You guessed it right!');
    nca= nca + 1;
    // console.log('right');
    break;
  case (a > 3):
    // console.log('high');
    attemps = attemps + 1;
    alert('oobs! too high. You have '+(4-attemps)+' tries left');
    // console.log(attemps);
    break;
  case (0 < a && a < 3):
    // console.log('low');
    attemps+=1;
    alert('oobs! too low. You have '+(4-attemps)+' tries left');
    // console.log(attemps);
    break;
  case (a === 0):
    // console.log('not valid');
    attemps+=1;
    alert('You should add a valid number. You have '+(4-attemps)+' tries left');
    // console.log(attemps);
    break;
  default:
    // console.log('default');
    break;
  }
  if (a === 3) {
    break;
  }else if(attemps === 4){
    alert('Sorry, You had four tries. The right answer is 3');
  }
}
// }

// the 7th question
var cars =[ 'bmw', 'fiat', 'kia'];
var correct = false;
var att = 6;
while(!correct && att > 0){
  q = 'What car models do you think I like the most ?';
  a = prompt(q).toLowerCase();
  for(var i = 0; i < cars.length; i++){
    if (a === cars[i]){
      correct = true;
      alert('Correct answer!');
      nca= nca + 1;
      // console.log('correct');
    }
  }
  if(!correct){
    att = att - 1;
    alert('wrong answer, you have '+att+' tries left');
  }
}
var liked ='';
for( var d = 0; d<cars.length; d++){
  liked = liked +'-'+cars[d];
}
alert('Car models that I like are '+'('+ liked +')' );

alert('Total Correct answers is: '+ nca);

alert('Welcome a gain ' +Gistname);



