# Blackout Poetry Studio

Blackout Poetry Studio is a web app that enables users to create blackout poetry by merging and manipulating text from various sources.

## Features

- **Random Poem:** Generate a random poem for creative inspiration.
- **Search Functionality:** Find specific poems using search queries. Including the ability to choose the line count of the poem
- **Set Custom Text:** Add text of your own to base your found poem off of.
- **Blackout Poetry Editor:** Craft your blackout poetry with an intuitive text editor.
- **Save and Share:** Save your creations and share them on social media.
- **Text Merging:** Combine lines or stanzas from different poems to create unique compositions.

## Development Stage 
- Current functionality includes the ability to: 
  - generate a random poem
  - select which words you want to be in your poem
  - reset the poem so no words are selected anymore
  - black out the rest of the words to create the poem
  - create a blackout poem using custom text

## Next Steps/Features to Implement
1. Save progress in local storage so it doesn't delete user progress if they refresh it
2. Search functionality to get poem by searching the database by keyword, author, etc.
3. Save and share your poem
4. Styling & making it responsive
   - have instructions be expandable/collapsible across devices
   - add dark mode

## APIS I am considering using
- [poetryDB API](https://poetrydb.org/index.html): Using this to pull the random poem from
- [Datamuse API](https://www.datamuse.com/api/)
- [WordsAPI](https://www.wordsapi.com/)

Live Demo [Here](https://raisa-d.github.io/BlackoutPoetryMaker/)
