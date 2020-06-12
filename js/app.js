'use strict';

//Welcoming and starting the guessig game
welcome();
function welcome() {
  var Gistname = prompt('Enter Your Name', 'Guest');
  var nameElement = document.getElementById('name');
  var welcom = document.getElementById('welcom');
  if (Gistname !== '') {
    welcom.style.display = 'block';
  }
  nameElement.innerHTML = Gistname;
  alert('Hello, ' + Gistname + '. I hope you enjoy your time here');
  guessGame();
  alert('Welcome a gain ' + Gistname);
}

// the guessing game
function guessGame() {
  alert(
    'Before I let you enter my website, We will play a guessing game and you should answer with y/n or yes/no for the first 5 question.\n \n let us get started'
  );
  //Yes or no Questions
  var correctAnswersYNQ = ynQuestion();
  //6th question
  var q6Correct = question6();
  //7th question
  var q7Correct = question7();
  var total = correctAnswersYNQ + q6Correct + q7Correct;
  alert('Total Correct answers is: ' + total);

}

// excute 5 yes or no questions
function ynQuestion() {
  // the data of the 5 questions
  var questionData = [
    ['Am I a male ?', 'You guessed it right', 'Wrong!', 'yes'],
    [
      'Do you think that I am kind of person who liks playing with numbers ?',
      'You are correct! that is why I studied mathematics at university',
      'Wrong! actually I love math and I studied mathematics at university',
      'yes'
    ],
    [
      'Do you think someone who loves math can work as a graphic designer?',
      'You are correct! I worked as a graphic designer and UI/UX designer',
      'Wrong! actually I worked as a graphic designer and UI/UX designer',
      'yes'
    ],
    [
      'You think that maybe I studied graphic design in a college, is that right ?',
      'You are correct! but in addition to mathematics, I studied computer engineering',
      'Wrong! I did not study graphic design, but it was a hobby, but in addition to mathematics, I studied computer engineering',
      'no'
    ],
    [
      'If I am now a web developer, does this make sense to you ?',
      'Sure! it makes sense and I am now full time web developer',
      'You guessed it wrong! I am now full time web developer',
      'yes'
    ],
  ];
  var correctAnswers = 0;
  for (var i = 0; i < questionData.length; i++) {
    correctAnswers = correctAnswers + ynQuestionBody(questionData[i]);
  }
  return correctAnswers;
}

// 5 yes or no question function
function ynQuestionBody(arrData) {
  var a = prompt(arrData[0]).toLowerCase();
  var correct = 0;
  if(!(a === 'yes' || a === 'y' ||a === 'no' || a === 'n')){
    alert('You should answer with y/n or yes/no only');
    ynQuestionBody(arrData);
    return correct;
  }
  if (a === arrData[3] || a === arrData[3].charAt(0)) {
    alert(arrData[1]);
    correct = correct + 1;
  } else {
    alert(arrData[2]);
  }
  return correct;
}

//6th numeric Questions
function question6() {
  var q = 'How old I am ?';
  var attemps = 0;
  var correct = 0;
  while (attemps < 4) {
    var a = Number(prompt(q));
    if( a === 29){
      correct = 1;
      alert('You guessed it right!');
      break;
    }else if(a > 29 ){
      attemps = attemps + 1;
      alert('oobs! too high. You have ' + (4 - attemps) + ' tries left');
    }else if(a >0 && a < 29){
      attemps += 1;
      alert('oobs! too low. You have ' + (4 - attemps) + ' tries left');
    }else {
      attemps = attemps + 1;
      alert(
        'You should add a valid number. You have ' +
            (4 - attemps) +
            ' tries left'
      );
    }
  }
  if(attemps === 4){
    alert('Sorry, You had four tries. The right answer is 29');
  }
  return correct;
}


//the 7th question
function question7() {
  var cars = ['bmw', 'fiat', 'kia'];
  var correct = false;
  var att = 6;
  var numOfcorrect = 0;
  while (!correct && att > 0) {
    var q = 'What car models do you think I like the most ?';
    var a = prompt(q).toLowerCase();
    for (var i = 0; i < cars.length; i++) {
      if (a === cars[i]) {
        correct = true;
        alert('Correct answer!');
        numOfcorrect = numOfcorrect + 1;
        // console.log('correct');
      }
    }
    if (!correct) {
      att = att - 1;
      alert('wrong answer, you have ' + att + ' tries left');
    }
  }
  var liked = '';
  for (var d = 0; d < cars.length; d++) {
    liked = liked + '-' + cars[d];
  }
  alert('Car models that I like are ' + '(' + liked + ')');
  return numOfcorrect;
}
