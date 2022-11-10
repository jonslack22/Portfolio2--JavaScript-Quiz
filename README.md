# The Waluigi Quiz

## Code Institute - Milestone Project 2

![The Waluigi Quiz Interactive Deisgn](https://github.com/jonslack22/Portfolio2--JavaScript-Quiz/blob/main/waluigi_quiz_responsive.png)

*The Waluigi Quiz* is a JavaScript based quiz that tests the user's knowledge of a playable side character in numerous Nintendo multiplayer video game titles, Waluigi. The idea for the quiz came to me as a fan of the cult status Waluigi has achieved in the video gaming fandom. Starting out as a character created to fill a void in the 1998 Mario Tennis, Waluigi has gone on to appear in numerous 'Mario' spin-off titles since, providing frequent comic relief and occasionally playing the role of a minor antagonist in some games. Notably, he has not headlined in his own game, and so exists in greater obscurity to much of the video gaming population.

Though a dedicated page detailing Waluigi's history, inspiration, general information and trivia exists [here](https://www.mariowiki.com/Waluigi), I noticed a lack of more succinct means on the internet to learn about him, outside of playing the games. I decided to create a quiz that would ask about some of Waluigi's most notable features and appearances, as well as more obscure knowledge tidbits. Users are free to participate in the quiz repeatedly if they like, and so will come to learn more about him through multiple completions of the quiz.

This is the second of five projects that comprise the Full Stack Software Development course ran by *Code Institute*. This project required the use of HTML, CSS3 and JavaScript to build a responsive and static website, with manipulation of the HTML Document Model (DOM) as a mandatory requirement.

## Project Wireframe - Balsamiq

The project wireframe can be found here:

![The Waluigi Quiz Wireframe](https://github.com/jonslack22/Portfolio2--JavaScript-Quiz/blob/main/Waluigiquiz.pdf)

No code stylings or images were used a spart of the wireframe, and it is not to scale.

## Features

### Basic Features

This project consists of two pages. The quiz page is accessed by a button link and the homepage can be navigated to from the quiz page via a button that appears after the quiz is completed.

### Consistent Features

- A menu header displaying "Welcome to the most WAH-nderful Waluigi Quiz!" at the top of both pages, characterised by a purple background
- A basic footer on both pages, stylised differently per page.

### Homepage

- An image of Waluigi highlights the homepage. This is followed by some flavour text to generate some intrigue for the quiz.
- A set of basic instructions for the quiz are included here.
- A button that takes you to the quiz page

### Quiz

- Details of two extended walking trips are included on this page to communicate the scope of the activities of the group. Large images are included as part of the trip outline. Hiking groups that have been or are local to me have ran trips of a similiar nature before, and I sought to repliacte that with this page.

### Join Us

- Contains a form that users must fill in to become a group member. All fields must be filled in and the final checkbox must be left selected or unselected. At larger screen sizes, a silhouette of an individual in a wheelchair can be seen.


## Technologies and Sites Used

- HTML5
    * The primary coding language used to create the site's text content.
- CSS3
    * The language used to style the HTML elements, buttons and colour schemes of the site's pages.
- JavaScript
    * The language used to generate the backbone of the quiz and make certain elements play and disappear at the appropriate times.   
- [Balsamic](https://balsamiq.com/)
    * The wireframe building website I used for the project. I used the downloadable application version of Balsamic to create my wireframe, then I exported it to gitPod as a PDF file.
- [Google Fonts](https://fonts.google.com)
    * The three different font-families used for the project, Permanent Marker, Poor Story and Rubik, were sourced from here.
- [W3C Markup Validation Service](https://validator.w3.org/)
    * Both my HTML and CSS code received validation several times over the last few days before project submission. All errors and warnings were resolved.
- [W3C Schools](https://www.w3schools.com/)
    * I consulted this website multiple times for a large variety of different reasons, including how to properly play audio files under given timings and make proper reference to localStorage to save quiz scores locally.
- [stackoverflow](https://stackoverflow.com/)
    * I created a post on stack overflow [here](https://stackoverflow.com/questions/74292030/what-is-the-correct-syntax-for-my-if-logic-in-my-javascript-code-if-there-is-n?noredirect=1#comment131160164_74292030) to initially ask for help in resolving a major functionality issue with my quiz. The issue proved to run deeper than what was suggested in the answers, and is referred to in the testing section below.                               
- [Nintendo](https://www.nintendo.com/whatsnew/play-as-waluigi-in-these-wah-nderful-games/)
    * The homepage image of Waluigi was sourced from here.
- [101Soundboards](https://www.101soundboards.com/boards/10072-waluigi-sounds-mario-kart-wii)
    * The two sound effects used from the quiz were sourecd from this page.
- ["Random quiz"](https://codepen.io/savant/pen/gbaveO)
    * The base structure of the quiz was derived from this template and then modified significantly to suit the needs of the project.

## Testing

### Validator Testing

No issues were found via HMTL validator testing on the quiz page. Three duplicate id elements on the homepage were flagged as warnings and errors (and subsequently fixed) through HTML validator testing. Both pages were tested at the following link:

[HTML - W3C Markup Validation Service](https://validator.w3.org/nu/)

No issues were found through CSS Validator testing on 11/10/22 at the following link:

[CSS - W3C Markup Validation Service](https://jigsaw.w3.org/css-validator/)

Validator testing for the JavaScript code highlights one undefined variable, 'randomQuestion', referred to three times in the code. There are three variables, "answerA_clicked" "answerB_clicked" and "answerC_clicked" that go unusued beyond their use as individual functions. This was intentional on my part.

11 warnings are generated. 10 refer to my use of the 'let' variable as part of Mozilla Firefox JS extensions and ES6. The 11th warning refers to an expression on line 72, where an assignment or function call would be expected; instead an expression is used. This was intentional on my part.

Testing was conducted at the following link:

[JSHint, a community tool that detects errors and potential problems in Javascript code](https://jshint.com/)

## Browser Testing

The website was tested on the following broswers via desktop and mobile to ensure the structure of the site works as intended:

- Mozilla Firefox
- Google Chrome

## Responsiveness Testing

I manually tested the project via the following methods:

- Using Firefox Developer Tools and Chrome Developer Tools during mentor sessions to view each page at different screen sizes;

## JavaScript Testing

The quiz relies on button clicks to cause the quiz to progress, and I ensured a debugger function was a part of the JavaScript code as a prompt for me to investigate at what stage issues might have occured after an answer was clicked No issues were directly flagged as a result of a button press not working; instead, I found there were problems with the logic of the quiz itself.

I called upon Code Institute's Tutor Assistance service to reslove an issue I had with the quiz functioning correctly - see issues/bugs below. This method was sucessful in resolving the issue. Prior to this, I asked a friend and software tester to troubleshoot this issue, unsuccessfully. A post asking for assistance on Stack Overflow was also unsuccessful.

### Issues/Bugs

- A major issue in establishing the correct functioning of the quiz was ensuring the successful generation of a random question through carefully defining JavaScript functions in my code; often, the quiz would repeat the same question infinitely and not generate a new question but a correct answer would cause an uptick in the score to occur. The central issue had to be resolved through Tutor Assistance, who successfully identified several instances of incorrectly defined function parameters. Where '()' parentheses are required for defining functions properly, other functions would need to be referred to inside the parentheses to generate the desired effect. As some of my functions were missing these references, the quiz would not work as intended.
- When testing the site using Firefox Developer Tools, the homepage flags up an Uncaught TypeError: "document.getElementById(...) is null", referring to lines 18 and 19 of the JavaScript code. This error is not detrimental to the functionality of the site.
- I added a PDF file for the wireframe and responsiveness image to the online respository before adding it to the local one. This created issues with pushing changes from the local repository, and attempts to pull from the main branch to the local one did not work. I decided to remove the files from the main branch and add them to the local repository to resolve this issue. The files were successfully pushed as art of the next commit.

## Deployment

### Deploying the site on GitHub

1. I clicked on the 'Settings' icon of my project repository on GitHub.
2. To the left of the next screen, clicking on 'Pages' took me to GitHub Pages.
3. I selected "Deploy from a branch" under the "Source" drop-down menu.
4. Using two drop-down menus, I ensured my site was to be built from the 'main' branch and the '/ (root)' folder.
5. My site was deployed to GitHub Pages after a few minutes, allowing me to share the live site to others.

## Credits

### Content

One may wonder why the focus of the quiz was on Waluigi, and not one of Nintendo's more popular characters, such as Mario. Waluigi himself resembles something of a joke character or meme in the Nintendo fandom. He was originally created to fulfill a requirement for each playable character in the 1998 Nintendo 64 title, Mario Tennis, to have a doubles partner. The character Wario, Mario's longtime rival, lacked a defined doubles partner, and so Waluigi was created to fill this void. He has starred as a playable character in countless Nintendo 'Mario' multiplayer games since, yet notbaly has not headlined in a game of his own. One of Waluigi's notable traits are his sound clips; they are extremely exaggerated and defined, voiced by long-term Mario voice actor Charles Martinet, lending him a unique persona that tends to cause feelings of irritation or amusement whenever he is the focus of a game's attention. Examples of the nature of these clips an be found [here] (https://www.101soundboards.com/boards/10072-waluigi-sounds-mario-kart-wii). Myself and some old friends of mine find Waluigi and what he represents as hilarious, so I focused this quiz on Waluigi for this reason.

The questions for the quiz were chosen to ensure that someone who was unfamiliar with Waluigi would be able to get at least one question correct without relying on luck, as the homepage displays an image of the character in question before the quiz commences, and one question makes reference to his typical clothing colour (the image depicts his typical clothes).

In general, the quiz questions require both very specific knowledge of Waluigi's gaming history, knowledge from inferences made through in-game references, and acknowledging information released by official Nintendo sources, e.g. posts on their websites and through marketing emails. They were also chosen so as not to reveal, or allow inferences for, the answers of other questions.

### Media

The homepage image of Waluigi was sourced from the following link:

[waluigi.avif](https://www.nintendo.com/whatsnew/play-as-waluigi-in-these-wah-nderful-games/)

The favicon image for the site was sourced from (https://play.nintendo.com/themes/friends/waluigi/) and converted to favicon style [here](https://favicon.io/favicon-converter/).

The sound effects played when a right answer or wrong answer is chosen were sourced from [101soundboards](https://www.101soundboards.com/boards/10072-waluigi-sounds-mario-kart-wii). Specifically, sound effects labelled '19' and '27' were chosen for the project.

### Acknowledgements

I'd like to thank the following for their guidance, support and contributions for the project:

- My mentor, Owonikoko Oluwaseun
- My step-in mentor Gareth McGirr
- Software Tester and friend, Paolo Ferrier, for helping with JavaScript troubleshooting and suggestions
- Jason from Code Institute Tutor Support