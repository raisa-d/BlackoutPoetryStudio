# Blackout Poetry Studio

Blackout Poetry Studio is a web app that enables users to create blackout poetry, a type of found poetry. Users begin with a base text and create a new poem by selecting which words they want to keep from the pre-existing text and then blacking out the rest.

## Features

- **Random Poem:** Generate a random poem for creative inspiration.
- **Search Functionality:** Find specific poems using search queries.
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

## Next Steps/Features to Implement
1. Save progress in local storage so it doesn't delete user progress if they refresh it
2. Search functionality to get poem by searching the database by keyword, author, etc.
3. Save and share your poem
4. Add an 'edit' button to edit a poem after you've blacked it out
5. Styling
   - add dark mode
6. Animations
   - have expandable elements smoothly transition

## APIS I am considering using
- [poetryDB API](https://poetrydb.org/index.html): Using this to pull the random poem from
- [Datamuse API](https://www.datamuse.com/api/)
- [WordsAPI](https://www.wordsapi.com/)

Live Demo [Here](https://raisa-d.github.io/BlackoutPoetryMaker/)
