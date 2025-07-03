<h1 align="center">Blackout Poetry Studio</h1>
<p align="center">
  Blackout Poetry Studio is a web app that enables users to create blackout poetry, a type of found poetry. I created this web application as I am a poet who has recently had writers' block. In thinking about how I could get myself inspired, I remembered I used to love making blackout poetry (the old fashioned way, with a sharpie and an old book) and knew it would get me back in the poetry zone, so I decided to build Blackout Poetry Studio to hopefully inspire other creatives!
</p>
<p align="center"> 
  <a href="https://blackout-poetry.netlify.app/" target="blank">
    <img src="https://img.shields.io/badge/Live_Website_Here-625095?&style=for-the-badge" alt="Website">
  </a>
</p>
<p align="center">
  <a href="https://blackout-poetry.netlify.app/" target="_blank">
    <img width="1307" alt="BlackoutPoetry Web App Across Devices" src="https://github.com/rai-dorzback/BlackoutPoetryStudio/assets/144272001/64c58799-963f-4aae-ac6a-112d46b01cbe">
  </a>
</p>
<p>Users begin with a pre-existing/base poem and create a new poem by selecting which words they want to keep from the pre-existing text and then blacking out the rest. The result is a new blackout poem.</p>

<p align="center"> 
  <a href="https://blackout-poetry.netlify.app/" target="blank">
    <img src="https://img.shields.io/badge/Live_Website_Here-625095?&style=for-the-badge" alt="Website">
  </a>
</p>

## Table of Contents
- [Features](#features)
- [Development Stage](#development-stage)
- [Technologies Used](#technologies-used)
- [Optimizations](#optimizations)
- [Lessons Learned](#lessons-learned)
- [Contact](#contact)

## Features
- **Random Poem:** Generate a random poem for creative inspiration.
- **Search Functionality:** Search for poems by title.
- **Set Custom Text:** Add text of your own to base your found poem off of.
- **Blackout Poetry Editor:** Craft your blackout poetry with an intuitive text editor.
- **Save and Share:** Save your creations and share them on social media.
- **Text Merging:** Combine lines or stanzas from different poems to create unique compositions.

## Development Stage 
- Current functionality includes the ability to: 
  - generate a random poem
  - search for a poem by title and get back the first one found (next iteration will give multiple options if there are any for user to choose from)
  - create a blackout poem using custom text
  - select which words you want to be in your poem
  - black out the rest of the words to create the poem
  - reset the poem so no words are blacked out or selected anymore

## Technologies Used
<a href="https://www.figma.com/" target="_blank" rel="noreferrer"> 
    <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> 
</a> 
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> 
</a> 
<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> 
</a> 
<a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> 
</a> 
<a href="https://git-scm.com/" target="_blank" rel="noreferrer"> 
  <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> 
</a>
<ul>
  <li>Front-end: HTML5, CSS3, JavaScript</li>
  <li>RESTful API: <a href="https://poetrydb.org/index.html" target="_blank">poetryDB API</a></li>
  <li>Design: Figma</li>
  <li>Storage: Local Storage</li>
  <li>Version Control: Git</li>
</ul>

## Optimizations
The following are optimizations I will make in future iterations:
<ol>
  <li>Save progress in local storage so it doesn't delete user progress if they refresh it.</li>
  <li>Search functionality to get poem by searching the database by keyword & author. Right now poems are searchable by title only.</li>
  <li>Add functionality to save and share poem.</li>
  <li>Add an 'edit' button to edit the selected words after you've blacked it out.</li>
  <li>Add ability for user to change font-size and font-family of poem</li>
  <li>Styling: add dark mode & make it so the words that aren't blacked out have more padding so it doesn't look weird in smaller viewport sizes.</li>
  <li>Animations: Have expandable elements smoothly transition with an animation.</li>
</ol>

## Lessons Learned
<p>Building Blackout Poetry Studio provided me with valuable lessons about integrating web applications with RESTful APIs. I learned the importance of thorough API documentation comprehension--luckily I have experience with having to get through extremely dense documents from my background in neuroscience & psychology research. In using the API, I had to think a lot about error handling and efficient asynchronous programming. Additionally, the project enhanced my front-end development skills using HTML, CSS, and JavaScript. I got to practice using flexbox to create the responsive design & using Figma for the initial design</p>

## Contact
<p> 
  <a href="https://rai-dorzback.netlify.app/" target="blank">
    <img src="https://img.shields.io/badge/Website-563d7c?&style=for-the-badge" alt="Website">
  </a>
  <a href="https://www.linkedin.com/in/rai-d/">
    <img src="https://img.shields.io/badge/LinkedIn-046E6D?logo=linkedin&style=for-the-badge">
  </a>
  <a href="https://bsky.app/profile/rai-bread.bsky.social" target="blank">
    <img src="https://img.shields.io/badge/Bluesky-563d7c?&style=for-the-badge&logoColor=white" alt="rai__bread" />
  </a> 
</p>
