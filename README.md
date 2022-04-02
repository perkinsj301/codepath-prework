# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **NAME**

Time spent: **#** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [ ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [ ] "Start" button toggles between "Start" and "Stop" when clicked. 
* [ ] Game buttons each light up and play a sound when clicked. 
* [ ] Computer plays back sequence of clues including sound and visual cue for each button
* [ ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [ ] User wins the game after guessing a complete pattern
* [ ] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![]( http://g.recordit.co/H6J0KsfSWW.gif )
![]( http://g.recordit.co/sE5WdadCTq.gif )
![]( http://g.recordit.co/j143JV0YC4.gif )
![]( http://g.recordit.co/8kNy79uqMV.gif )
![]( http://g.recordit.co/mNShvxLXCG.gif )

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

After having most of the game complete, I discovered an error when playing the game for myself. After playing a game and stopping, the next game would begin with progress not equal to zero. I was initially confused because I had declared progress as a global variable equal to zero. I took a look at what was happening whenever a new game starts and I realized that progress was not being initialized at the start of each game. Adding a line of code to initialize progress in the startGame() function fixed the issue. This small dilemma outlined how important it is to always initialize variables in a program whenever they are needed in a default state.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

How can I make my web page more visually appealing? I feel that my page looks rather bland and basic. If I was creating a web page for lots of people to use, I want to be able to present the users with a professional and visually appealing site.  

What does a typical day look like for a web developer? How much time do they spend collaborating with team members vs working on their own?

What kind of roles need to be filled in a team of web developers? Will certain people only work on the layout of a webpage while another creates all of the functionality? Or will a whole team collaborate on everything?


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

Given more time, I would implement more features into the game. I had the idea to add a feature where the tones played by the clue sequence are not just random tones, but form the notes for songs. I would have done this by adding more game buttons, each with a corresponding frequency/note, and by having several predetermined button sequences (which would form the melody of a song), one of which would be randomly chosen at the start of each game. I also would have spent more time making my page more visually appealing. I would have experimented with different color schemes, and detailed the page, maybe using borders for elements or by giving the page layout more structure.



## Interview Recording URL Link

[My 5-minute Interview Recording](https://drive.google.com/file/d/1BXyXf-9J8JF57y1Un5oSqUuaXIx5iPuk/view?usp=sharing)


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
