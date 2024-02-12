// /<input field>/<search term>[;<search term>][..][:<search type>][/<output field>][,<output field>][..][.<format>]

const url = `https://poetrydb.org/random/1/author,title,linecount,lines`
// variable for the poem textbox
let poemBox = document.querySelector('#poem')

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

        // if the poem is less then 100 lines
        if (data[0].linecount < 100) {
            // put each poem line within a paragraph element
            const poemHTML = poemLines.map(line => `<p>${line}</p>`).join("");
            
            // insert poem into DOM
            poemBox.innerHTML = poemHTML;

            // call event listener function
            addEventListenersToWords()
        } else randomPoem();
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

// function to add event listeners to each word

// function to add event listeners to each word
function addEventListenersToWords() {

    const words = document.querySelectorAll('#poem p');

    words.forEach(word => {
        const wordText = word.textContent.trim();
        const wordHTML = wordText.split(' ').map(w => `<span class="word">${w}</span>`).join(' ');

        word.innerHTML = wordHTML

        const wordSpans = word.querySelectorAll('.word');
        // for each word span, add an event listener
        wordSpans.forEach(wordSpan => {
            wordSpan.addEventListener('mouseover', hover);
            wordSpan.addEventListener('mouseout', unhover);
            wordSpan.addEventListener('click', selectWord);
        });
    })
    
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

    document.querySelector('#poem-textbox').classList.add('blackedOut')

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

    document.querySelector('#poem-textbox').classList.remove('blackedOut');
}

function useCustomText() {
    // get value out of input
    let customBase = document.querySelector('#custom').value.trim();

    // get an array of each word
    let customWords = customBase.split(' ');

    // add spans to each word
    let customHTML = customWords.map(w => `<span class="word">${w}</span>`).join(' ');

    // inert the customHTML into the poemBox
    poemBox.innerHTML = `<p>${customHTML}</p>`;

    // call add event listeners function so that user can interact with words
    addEventListenersToWords();
}