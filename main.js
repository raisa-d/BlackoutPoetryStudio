const url = `https://poetrydb.org/random/1/author,title,linecount,lines`
// variable for the poem textbox
const poemBox = document.querySelector('#poem')

const poemContainer = document.querySelector('#poem-textbox')

// boolean to track whether the poem is blacked out or not
poemIsBlackedOut = false;

// event listeners
document.querySelector('#get-random').addEventListener('click', randomPoem)
document.querySelector('#reset').addEventListener('click', resetPoem)
document.querySelector('#blackout').addEventListener('click', blackout)
document.querySelector('#custom-arrow').addEventListener('click', useCustomText)
document.querySelector('#info').addEventListener('click', displayInstructions)
document.querySelector('#search-arrow').addEventListener('click', searchForPoem)
// document.querySelector('#save').addEventListener('click', savePoemAsImage);

function displayInstructions() {
    document.querySelector('#instructions-container').classList.toggle('hidden');
}

// function to get & display a random poem
function randomPoem() {
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data);

        poemIsBlackedOut = false;

        const randomPoemLines = data[0].lines
        
        // if the poem is less then 105 lines
        if (data[0].linecount < 105) {
            displayPoem(randomPoemLines)
        } else randomPoem();
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function displayPoem(poemLines) {
    // reset the box to be empty each time they want to get a new random poem
    poemBox.innerText = ''
    resetPoem()

    // creating a document fragment for the poem which we can add nodes to
    const poemFragment = document.createDocumentFragment();

    poemLines.forEach(line => {
        // paragraph element
        const paragraph = document.createElement('p')
        // make each line the content of a paragraph
        paragraph.textContent = line;
        // add that paragraph as a child to the poemFragment
        poemFragment.appendChild(paragraph)
    });

    // add the fragment we made as a child of the poemBox
    poemBox.appendChild(poemFragment)
    
    // call event listener function
    addEventListenersToWords()
}

// function to add event listeners to each word
function addEventListenersToWords() {

    const poemParagraphs = document.querySelectorAll('#poem p');

    poemParagraphs.forEach(paragraph => {
        // get content of poem paragraph and split it into individual words
        const words = paragraph.textContent.trim().split(' ')

        // remove current paragraph content
        paragraph.textContent = ''

        words.forEach(word => {
            const wordSpan = document.createElement('span');
            // add each word into a span
            wordSpan.textContent = word;
            // add the class of word to each word
            wordSpan.classList.add('word');
    
            // add event listeners to word spans
            wordSpan.addEventListener('mouseover', hover);
            wordSpan.addEventListener('mouseout', unhover);
            wordSpan.addEventListener('click', selectWord);
    
            paragraph.appendChild(wordSpan)

            // add a space after each word
            paragraph.appendChild(document.createTextNode(' '));

        });
    });
}

function hover() {
    // make words bold on hover only if not already selected
    if (!this.classList.contains('selected-word') && !poemIsBlackedOut) {
        this.classList.add('hovered');
    }
}

function unhover() {
    this.classList.remove('hovered')
}

function selectWord() {
    if (!this.classList.contains('blackedOut')) {
        this.classList.toggle('selected-word')
    }
}

// function to blackout rest of poem
function blackout() {
    const wordSpans = document.querySelectorAll('#poem .word');

    poemContainer.classList.add('blackedOut')

    // if the wordSpan is not a selected word, black it out, otherwise let it be seen
    wordSpans.forEach(wordSpan => !wordSpan.classList.contains('selected-word') ? wordSpan.classList.add('blackedOut') : wordSpan.classList.add('selected-during-blackout'));

    poemIsBlackedOut = true;
}

// function to reset the poem by removing selected words
function resetPoem() {
    poemIsBlackedOut = false;

    // select all word spans in poem
    const wordSpans = document.querySelectorAll('#poem .word');

    // loop through array of word spans
    wordSpans.forEach(wordSpan => {
        // remove 'selected-word' from each one
        wordSpan.classList.remove('selected-word');
        wordSpan.classList.remove('blackedOut');
        wordSpan.classList.remove('selected-during-blackout');
    });

    poemContainer.classList.remove('blackedOut');
}

function useCustomText() {
    // get value out of input
    let customBase = document.querySelector('#custom').value.trim();

    // get an array of each word
    let customWords = customBase.split(' ');

    // new paragraph element
    const paragraph = document.createElement('p');

    // put each word inside of a span and add the class 'word'
    customWords.forEach(word => {
        const wordSpan = document.createElement('span');
        wordSpan.textContent = word;
        wordSpan.classList.add('word');
        paragraph.appendChild(wordSpan)
        // add a space after each word
        paragraph.appendChild(document.createTextNode(' '));
    })

    poemBox.textContent = '';

    poemBox.appendChild(paragraph);

    // call add event listeners function so that user can interact with words
    addEventListenersToWords();
}

// **function to search for poem
function searchForPoem() {
    console.log('you are running the searchForPoem function')
    
    // get user's search query out of input
    const userSearch = document.querySelector('#search').value

    // variable to store searchtype
    const searchType = document.querySelector('#searchType').value.toLowerCase()

    let url = ``

    // if searching by title
    if (searchType === 'title') {
        // fetch poem's lines
        url = `https://poetrydb.org/title/${userSearch}/title,lines`
    } else if (searchType === 'author') {
        // will fetch a list of the titles by that author **wil need to do error handling if they don't have the author, and display the titles as suggestions where they can select one
        url = `https://poetrydb.org/author/${userSearch}/title`
    } else if (searchType === 'keyword') {
        // will return a list of titles of poems that have the word mermaid in it **need error handling and to suggest these titles
        url = `https://poetrydb.org/lines/${userSearch}/title`
    }
    
    // api fetch
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data);
        
        // create list of the title options / search results if searching by author or keyword
        if (searchType !== 'title') {
            // if there's at least 1 poem
            if (data[0]) {
                let listOfPoems = data.map(poem => poem.title)
                createDropdown(listOfPoems)
                // ** display poem 
                // **access lines of poem from database and pass it into the displayPoem() function

            } else if (data.status === 404) {
                poemBox.textContent = '';
                poemBox.textContent = `Oh no, we can\'t find any poems by that ${searchType} :( \nTry another search term.`
            }

        // if they search by title, display it in the DOM or give error message
        // **should also have a dropdown of possible poems if there's more than one so user can choose
        } else {
            console.log(data)
            if(data[0]) {
                displayPoem(data[0].lines)
            } else if (data.status === 404) {
                poemBox.innerText = ''
                poemBox.innerText = 'Oops, we can\'t find that poem :(\nTry searching for another one?';
            }
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function createDropdown(listOfPoems) {
    // console.log(listOfPoems)

    // storing the dropdown select element
    const dropdown = document.querySelector('#searchResults');

    // unhide dropdown
    dropdown.classList.remove('hidden');

    // loop through list of poem titles, create an option for each one, append them to the dropdown
    listOfPoems.forEach(poemTitle => {
        const option = document.createElement('option');
        option.textContent = `${poemTitle}`;
        dropdown.appendChild(option)
    })

    // ** trying to store the user's selection out of the options in the dropdown so we know which one to display and can then display it
    // document.querySelector('#search-arrow').addEventListener('click', () => {
    //     const userPoemChoice = document.querySelector('searchResults').value
    //     console.log(`You chose: ${userPoemChoice}`)
    // });
};

// **Function to save the poem as an image
function savePoemAsImage() {
    if (poemIsBlackedOut) {
        // save functionality here
        console.log('you are trying to save your poem as an image')
    }
}