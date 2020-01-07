
const { readdirSync, writeFile } = require('fs')

const directories = readdirSync(__dirname, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && dirent.name!=='.git')
    .map(dirent => dirent.name)

let text = `<!DOCTYPE html>
<html>
<body>
<h1>Worthandlung</h1>
<p>Code snippets</p>\n`

for (const folder of directories) {
    text+=`<h3>${folder}</h3>\n<ul>`;
    const files = readdirSync(__dirname+'/'+folder, { withFileTypes: true })
    .filter(dirent => dirent.name.endsWith('.html'))
    .map(dirent => dirent.name)
    for (const file of files) {
        text+=`<li><a href='/${folder}/${file}'>${file}</a></li>\n`
    }
    text+=`</ul>`
}

text = text+`
</body>
</html>
`

writeFile('index.html', text, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Yay')
    }
  })