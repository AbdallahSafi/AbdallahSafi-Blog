# AbdallahSafi-Blog

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)


# About the Project

A blog that show off my scientific and practical history as well as personal information and a outline of my projects in the field of web development.


# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

# Prerequisites

- Operating system: Mac OS, Windows, Linux
- Git
Follow the instruction in the links below to install git in your machine
  - ![Windows](https://git-scm.com/download/win)
  - ![Mac OS](https://git-scm.com/download/mac)
  - ![Linux](https://git-scm.com/download/linux)
- ![Codeing Editor](https://www.wpbeginner.com/showcase/12-best-code-editors-for-mac-and-windows-for-editing-wordpress-files/)

# Installation

1. open your terminal

2. Clone the repo

`git clone https://github.com/AbdallahSafi/AbdallahSafi-Blog.git`

# Usage

You can use this project to start youe own blog. For now there is just about me page and I will add to the project later the other pages incrementally so you can check this repo from  time to time.

I added a guessing game to the blog so the visitor can guess who your through series of questions.


# Code Example

You can Change the questions and the answers based on your interest

```javascript
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
```
 - `q1` where you put your first question
 - The alerts where you put your responses

 *Note*: There is five functions for five question you can repeat this as many times as you wish.

 # Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

- Fork the Project
- Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
- Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
- Push to the Branch (`git push origin feature/AmazingFeature`)
- Open a Pull Request


# License

Distributed under the MIT License. See ![LICENSE](https://www.mit.edu/~amini/LICENSE.md) for more information.

# Contact

Abdallah Safi - mr.abdallahsafi@gmail.com

Project Link: https://github.com/AbdallahSafi/AbdallahSafi-Blog