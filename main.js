// /<input field>/<search term>[;<search term>][..][:<search type>][/<output field>][,<output field>][..][.<format>]

const url = `https://poetrydb.org/random/1/author,title,linecount,lines`

// event listener to get a random poem on button click
document.querySelector('#get-random').addEventListener('click', randomPoem)

// function to get & display a random poem
function randomPoem() {
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data);

        // variable for the poem textbox
        let poemBox = document.querySelector('#ogPiece')

        // reset the box to be empty each time they want to get a new random poem
        poemBox.innerText = ''

        // if the poem is less then 100 lines, print it otherwise recursive call randomPoem() again
        if (data[0].linecount < 100) {
            // insert random poem into DOM and put each line on a new line
            for (let line of data[0].lines) {
                poemBox.innerText += `${line}\n`
            }
        } else randomPoem();
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

// function to style words when user hovers over them
function hover() {
    // 
}

// function to add border when user selects words

// function to blackout rest of poem