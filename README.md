# The Waluigi Quiz

## Code Institute - Milestone Project 2

![The Waluigi Quiz Interactive Deisgn](https://github.com/jonslack22/Portfolio2--JavaScript-Quiz/blob/main/waluigi_quiz_responsive.png)

*The Waluigi Quiz* is a JavaScript based quiz that tests the user's knowledge of a playable side character in numerous Nintendo multiplayer video game titles, Waluigi. The idea for the quiz came to me as a fan of the cult status Waluigi has achieved in the video gaming fandom. Starting out as a character created to fill a void in the 1998 Mario Tennis, Waluigi has gone on to appear in numerous 'Mario' spin-off titles since, providing frequent comic relief and occasionally playing the role of a minor antagonist in some games. Notably, he has not headlined in his own game, and so exists in greater obscurity to much of the video gaming population.

Though a dedicated page detailing Waluigi's history, inspiration, general information and trivia exists [here](https://www.mariowiki.com/Waluigi), I noticed a lack of more succinct means on the internet to learn about him, outside of playing the games. I decided to create a quiz that would ask about some of Waluigi's most notable features and appearances, as well as more obscure knowledge tidbits. Users are free to participate in the quiz repeatedly if they like, and so will come to learn more about him through multiple completions of the quiz.

This is the second of five projects that comprise the Full Stack Software Development course ran by *Code Institute*. This project required the use of HTML, CSS3 and JavaScript to build a responsive and static website, with manipulation of the HTML Document Model (DOM) as a mandatory requirement.

### Issues/Bugs

- A major issue in establishing the correct functioning of the quiz was ensuring the successful generation of a random question through carefully defining JavaScript functions in my code. The central issue had to be resolved through Tutor Assistance, who successfully identified several instances of incorrectly defined function parameters. Where '()' parentheses are required for defining functions properly, other functions would need to be referred to inside the parentheses to generate the desired effect. As some of my functions were missing these references, the quiz would not work as intended.
- When testing the site using Firefox Developer Tools, the homepage flags up an Uncaught TypeError: "document.getElementById(...) is null", referring to lines 18 and 19 of the JavaScript code. This error is not detrimental to the functionality of the site.

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