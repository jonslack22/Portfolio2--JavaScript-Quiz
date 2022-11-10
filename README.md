# The Waluigi Quiz

## Code Institute - Milestone Project 2

![The Waluigi Quiz Interactive Deisgn](https://github.com/jonslack22/Portfolio2--JavaScript-Quiz/blob/main/assets/images/waluigi_quiz_responsive.png)

*The Waluigi Quiz* is a JavaScript based quiz that tests the user's knowledge of a playable side character in numerous Nintendo multiplayer video game titles, Waluigi. The idea for the quiz came to me as a fan of the cult status Waluigi has achieved in the video gaming fandom. Starting out as a character created to fill a void in the 1998 Mario Tennis, Waluigi has gone on to appear in numerous 'Mario' spin-off titles since, providing frequent comic relief and occasionally playing the role of a minor antagonist in some games. Notably, he has not headlined in his own game, and so exists in greater obscurity to much of the video gaming population.

Though a dedicated page detailing Waluigi's history, inspiration, general information and trivia exists [here](https://www.mariowiki.com/Waluigi), I noticed a lack of more succinct means on the internet to learn about him, outside of playing the games. I decided to create a quiz that would ask about some of Waluigi's most notable features and appearances, as well as more obscure knowledge tidbits. Users are free to participate in the quiz repeatedly if they like, and so will come to learn more about him through multiple completions of the quiz.

This is the second of five projects that comprise the Full Stack Software Development course ran by *Code Institute*. This project required the use of HTML, CSS3 and JavaScript to build a responsive and static website, with manipulation of the HTML Document Model (DOM) as a mandatory requirement.

## Defining the UX

### Primary Goals

 - I wanted to make a quiz that could give people who were largely unfamiliar with Waluigi a chance to learn something about him via a repeatable JavaScript quiz, and to test the knowledge of those more familiar with Waluigi and the Nintendo video game spin-off titles he features in without people having to read through a long wikipedia style article.

 - I wanted to make a quiz with elements that captures some of the essence of the character of Waluigi.

 - To make a quiz with elements that are responsive and static across computers, tablets and phones.

### User Stories

1. I am someone who has recently encountered Waluigi in a multiplayer Nintendo game and I am curious in seeking information regarding his history.

2. I am a longtime fan of the Nintendo multiplayer games he features in, and I wish to test my knowledge of these.

3. I am someone who appreciates the character of Waluigi as depcited in the games he features in and on Nintendo website posts, and want to have fun in completing a quiz centered around him.

### Project Design

1. I immediately began a wireframe design for the quiz using the downloadable desktop app for [Balsamiq](https://balsamiq.com/wireframes/desktop/) after defining the primary goals and user stories for the project in my mind. Note that the wireframe itself does not depict two seperate pages for the site as does the final project; this design choice was not made until later on in the project's development.

2. The project's colour scheme is entirely derived from most of the colours that define Waluigi: black (Waluigi's moustache colour is the same as the HTML and JavaScript button text), purple (the headline of each page shares a colour with his clothes and hat), yellow (the colour of the upside down 'L' on Waluigi's hat is used for the site and quiz buttons), white (the alert message background is the colour of Waluigi's gloves), pink (Waluigi's nose is similar in colour to the background used across the project) and a very light shade of blue (the score display boxes and site buttons after clicking are a similar colour to the outer edge of Waluigi's eyes). A lighter shade of pink was used to contrast more effectively against the shade of purple used for the headline text and main image. The colour scheme was decided upon after completion of the wireframe.

3. I stuck to three different font styles from Google Fonts for the whole project: Permanent Marker, Poor Story and Rubik. The latter was chosen as a generic font style for quiz buttons and the instruction text. The other two, in my view, capture the chaotic and amusing nature of the character effectively.

4. I strove to keep the visual design of the project simple and basic, so as not to create a need for responsive media query code in my CSS, as the primary focus of Project 2 is JavaScript. The current site was built to remain responsive across different devices and screen sizes without relying on these.

5. Sound effects were chosen as a means of communicating a correctly or incorrectly chosen answer, in addition to a displayed alert message. As a stylistic choice, the sound effects could prove amusing or irritating based on the user's personality and current temperament, in as much as somone may find Waluigi himself irritating or amusing.

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

- On the page loading, the quiz interface can be seen. One of three possible answers can be chosen via button click; once a click is made, a choice is committed, and feedback for a right or wrong answer is given via the appropriate alert message and sound effect. A score box displays the number of questions answered correctly.
- After all the questions have been answered, the quiz interface disapperas, and a final score message and display is revealed to the user. A button to take the user back to the homepage is revealed as well.

### Features Not Implemented/For Future Consideration

- It is possible to format my quiz as it functions onto one page rather than separating it from the introductory image and information as I have done here. A future edit to the project by msyelf would focus on this first.

- I considered the use of Modal Messages instead of the alert function for displaying the right answer and wrong answer messages for the quiz. They represent better UI design than alert messages; however, inexperience and being slow in my learning of some elements of JavaScript prevented me from implementing this feature for the project.

- The quiz section has a piece of text that displays 'Question'. It indicates to the user that the text following represents a question. There is no other function or intended purpose for this text element.  Making this text update based on the current question number would heighten the interactive nature of the quiz.

- I considered including a greater number of questions for the quiz as a whole, only for the quiz to randomly select from the question pool and finish after a fixed number of questions have been answered. I was unable to figure out the JavaScript code that would allow this to happen during the project, prior to submission.

- The means by which a new question on my quiz loads in is static; the previous question and the text inside the buttons is immediately replaced with new sets of text instantly. It would be possible to make questions fade into view or appear/disappear by sliding across the screen. [This quiz template](https://codepen.io/SitePoint/pen/GmPjjL) demonstrates the sliding effect, and was considered as a base template for my quiz before I ultmiately decided against it.

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
    * Two sound effects used for the quiz were sourced from this page.
- ["Random quiz"](https://codepen.io/savant/pen/gbaveO)
    * The base structure of the quiz was derived from this template and then modified significantly to suit the needs of the project.

## Testing

## Fulfilling User Stories

With reference to the user stories above:

1. The quiz contains various questions that depict Waluigi's 20+ year history, and these are of varying specificity, whether it be the nature of his first Mario Kart vehicle or his very first appearance in a game. Should a user get a question wrong, the ability to repeat the quiz will ensure certain information becomes salient, if the user wishes it.

2. The quiz covers various different Nintendo spin-off games, most of which feature Waluigi (notably, one question makes reference to a title made conspicuous by his absence). Anyone who has engaged intently with many of these games should find these questions interesting and challenging.

3. That JavaScript allows sound files to be played at specific moments is, in my opinion, an amazing function. To be able to play one of Waluigi's infamous screeches and wails based on whether the user answers a question correctly or incorrectly lends the quiz a unique personality, and is likely what this user was hoping for in starting the quiz. Waluigi would certainly yell in happiness if you got a question about him right, as would he wail in surprise if you got a question wrong! I believe the colour scheme of the site would also contribute to the fun, as it is a match for most of his design appearance, though the user may not be consciously aware of this at the time.

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

The quiz relies on button clicks to cause the quiz to progress, and I ensured a debugger function was a part of the JavaScript code as a prompt for me to investigate at what stage issues might have occured after an answer was clicked. No issues were directly flagged as a result of a button press not working; instead, I found there were problems with the logic of the JavaScript code itself.

I called upon Code Institute's Tutor Assistance service to reslove an issue I had with the quiz functioning correctly - see issues/bugs below. This method was sucessful in resolving the issue. Prior to this, I asked a friend and software tester to troubleshoot this issue, unsuccessfully. A post asking for assistance on Stack Overflow was also unsuccessful.

After the issue was resolved, tbe quiz functioned as intended when using debug mode and as part of normal site testing using a preview broswer window.

### Issues/Bugs

- A major issue in establishing the correct functioning of the quiz was ensuring the successful generation of a random question through carefully defining JavaScript functions in my code; often, the quiz would repeat the same question infinitely and not generate a new question but a correct answer would cause an uptick in the score to occur. The central issue had to be resolved through Tutor Assistance, who successfully identified several instances of incorrectly defined function parameters. Where '()' parentheses are required for defining functions properly, other functions would need to be referred to inside the parentheses to generate the desired effect. As some of my functions were missing these references, the quiz would not work as intended.

- When testing the site using Firefox Developer Tools, the homepage flags up an Uncaught TypeError: "document.getElementById(...) is null", referring to lines 18 and 19 of the JavaScript code. This error is not detrimental to the functionality of the site.

- I added a PDF file for the wireframe and a responsiveness image to the online respository before adding it to the local one. This created issues with pushing changes from the local repository, and attempts to pull from the main branch to the local one did not work. I decided to remove the files from the main branch and add them to the local repository to resolve this issue. The files were successfully pushed as art of the next commit.

## Deployment

### Deploying the site on GitHub

1. I clicked on the 'Settings' icon of my project repository on GitHub.
2. To the left of the next screen, clicking on 'Pages' took me to GitHub Pages.
3. I selected "Deploy from a branch" under the "Source" drop-down menu.
4. Using two drop-down menus, I ensured my site was to be built from the 'main' branch and the '/ (root)' folder.
5. My site was deployed to GitHub Pages after a few minutes, allowing me to share the live site to others.

### Project Cloning

Users are free to clone this repository for their own use, so long as permission is obtained from me beforehand.

I am also open to the idea of collaborating to improve the site further.

Should either personal use of the site or collaboration be desired, please contact me at *jonathanslack89@ymail.com*. 

## Credits

### Content

One may wonder why the focus of the quiz was on Waluigi, and not one of Nintendo's more popular characters, such as Mario. Waluigi himself resembles something of a joke character or meme in the Nintendo fandom. He was originally created to fulfill a requirement for each playable character in the 1998 Nintendo 64 title, Mario Tennis, to have a doubles partner. The character Wario, Mario's longtime rival, lacked a defined doubles partner, and so Waluigi was created to fill this void. He has starred as a playable character in countless Nintendo 'Mario' multiplayer games since, yet notbaly has not headlined in a game of his own. One of Waluigi's notable traits are his sound clips; they are extremely exaggerated and defined, voiced by long-term Mario voice actor Charles Martinet, lending him a unique persona that tends to cause feelings of irritation or amusement whenever he is the focus of a game's attention. Examples of the nature of these clips an be found [here] (https://www.101soundboards.com/boards/10072-waluigi-sounds-mario-kart-wii). Myself and some old friends of mine find Waluigi and what he represents as hilarious, so I focused this quiz on Waluigi for this reason.

The questions for the quiz were chosen to ensure that someone who was unfamiliar with Waluigi would be able to get at least one question correct without relying on luck, as the homepage displays an image of the character in question before the quiz commences, and one question makes reference to his typical clothing colour (the image depicts his typical clothes).

In general, the quiz questions require both very specific knowledge of Waluigi's gaming history, knowledge from inferences made through in-game references, and acknowledging information released by official Nintendo sources, e.g. posts on their websites and through marketing emails. They were also chosen so as not to reveal, or allow inferences for, the answers of other questions.

### Media

The homepage image of Waluigi was sourced from the following link:

[waluigi.avif](https://www.nintendo.com/whatsnew/play-as-waluigi-in-these-wah-nderful-games/)

The favicon image for the site was sourced from [Nintendo's site](https://play.nintendo.com/themes/friends/waluigi/) and converted to favicon style [here](https://favicon.io/favicon-converter/).

The sound effects played when a right answer or wrong answer is chosen were sourced from [101soundboards](https://www.101soundboards.com/boards/10072-waluigi-sounds-mario-kart-wii). Specifically, sound effects labelled '19' and '27' were chosen for the project.

### Acknowledgements

I'd like to thank the following for their guidance, support and contributions for the project:

- My mentor, Owonikoko Oluwaseun
- My step-in mentor Gareth McGirr
- Software Tester and friend, Paolo Ferrier, for helping with JavaScript troubleshooting and suggestions
- Jason from Code Institute Tutor Support