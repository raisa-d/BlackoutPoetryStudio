// /<input field>/<search term>[;<search term>][..][:<search type>][/<output field>][,<output field>][..][.<format>]

const url = `https://poetrydb.org/random/1/author,title,linecount,lines`

fetch(url)
.then(res => res.json()) // parse response as JSON
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log(`error ${err}`)
});