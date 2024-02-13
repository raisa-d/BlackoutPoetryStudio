// /<input field>/<search term>[;<search term>][..][:<search type>][/<output field>][,<output field>][..][.<format>]

const url = `https://poetrydb.org/random/1/author,title,linecount,lines`
// variable for the poem textbox
const poemBox = document.querySelector('#poem')

const poemContainer = document.querySelector('#poem-textbox')

// boolean to track whether the poem is blacked out or not
poemIsBlackedOut = false;

// event listener to get a random poem on button click
document.querySelector('#get-random').addEventListener('click', randomPoem)

// event listener to reset poem
document.querySelector('#reset').addEventListener('click', resetPoem)

// event listener to black out poem
document.querySelector('#blackout').addEventListener('click', blackout)

// event listener for clicking the next arrow
document.querySelector('#arrow').addEventListener('click', useCustomText)

// event listener to the save as image
// document.querySelector('#save').addEventListener('click', savePoemAsImage);

// function to get & display a random poem
function randomPoem() {
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data);

        poemIsBlackedOut = false;

        const poemLines = data[0].lines

        // reset the box to be empty each time they want to get a new random poem
        poemBox.innerText = ''

        resetPoem()

        // if the poem is less then 105 lines
        if (data[0].linecount < 105) {
            
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

        } else randomPoem();
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
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

// **Function to save the poem as an image
function savePoemAsImage() {
    if (poemIsBlackedOut) {
        // save functionality here
        console.log('you are trying to save your poem as an image')
    }
}