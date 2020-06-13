# AbdallahSafi-Blog

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage) 
- [New Feature](#New-Feature)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

# About the Project

A blog that show off my scientific and practical history as well as personal information and a outline of my projects in the field of web development.

# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

# Prerequisites

- Operating system: Mac OS, Windows, Linux
- Git
  Follow the instruction in the links below to install git in your machine
  - [Windows](https://git-scm.com/download/win)
  - [Mac OS](https://git-scm.com/download/mac)
  - [Linux](https://git-scm.com/download/linux)
- [Codeing Editor](https://www.wpbeginner.com/showcase/12-best-code-editors-for-mac-and-windows-for-editing-wordpress-files/)

# Installation

1. open your terminal

2. Clone the repo

`git clone https://github.com/AbdallahSafi/AbdallahSafi-Blog.git`

# Usage

You can use this project to start youe own blog. For now there is just about me page and I will add to the project later the other pages incrementally so you can check this repo from time to time.

I added a guessing game to the blog so the visitor can guess who your through series of questions.

# Code Example

You can Change the questions and the answers based on your interest in the data array.

```javascript
// this code will run through a loop tp genrate 5 different questions
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
```

- `index 0` where you put your question
- `index 1` where you put response to correct answer
- `index 2` where you put response to wrong answer
- `index 3` put your correct answer to compare to it
- The alerts where you put your responses

_Note_: There is five functions for five question you can repeat this as many times as you wish.

# New Feature

I added new type of questions to the guessing game.

Now You have a 6th and 7th Question.

**6th Question**
This question accepts a numeric input and the user have 4 attemps to guess the right answer.

see the code

```javascript
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
```


**7th Question**
This question is about guessing a the correct answer from a multiple correct answers and the user have 6 attemps to get the correct answer.

```javascript
v//the 7th question
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
    if(d < cars.length-1){
      liked = liked + cars[d] + ',';
    }else{
      liked = liked +cars[d];
    }

  }
  alert('Car models that I like are ' + '(' + liked + ')');
  return numOfcorrect;
}

```

# Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

- Fork the Project
- Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
- Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
- Push to the Branch (`git push origin feature/AmazingFeature`)
- Open a Pull Request

# Contribution :

- [Hisham ALNaji](https://github.com/HishamAlNaji)

# License

Distributed under the MIT License. See [LICENSE](https://www.mit.edu/~amini/LICENSE.md) for more information.

# Contact

Abdallah Safi - mr.abdallahsafi@gmail.com

Project Link: https://github.com/AbdallahSafi/AbdallahSafi-Blog
