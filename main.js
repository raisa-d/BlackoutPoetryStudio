// /<input field>/<search term>[;<search term>][..][:<search type>][/<output field>][,<output field>][..][.<format>]

const url = `https://poetrydb.org/random/1/author,title,linecount,lines`
// variable for the poem textbox
let poemBox = document.querySelector('#poem')

// event listener to get a random poem on button click
document.querySelector('#get-random').addEventListener('click', randomPoem)

// function to get & display a random poem
function randomPoem() {
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data);

        const poemLines = data[0].lines

        // reset the box to be empty each time they want to get a new random poem
        poemBox.innerText = ''

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
    // hover only if not already selected
    if (!this.classList.contains('selected-word')) {
        this.classList.add('hovered');
    }
}

function unhover() {
    this.classList.remove('hovered')
}

function selectWord() {
    this.classList.toggle('selected-word')
}

// function to blackout rest of poem
function blackOut() {
    
}