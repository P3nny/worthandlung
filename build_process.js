
const { readdirSync, writeFile } = require('fs')

const directories = readdirSync(__dirname, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && dirent.name!=='.git')
    .map(dirent => dirent.name)

let text = `<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">
<link href="https://fonts.googleapis.com/css?family=Lobster&subset=latin,latin-ext" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="styles.css">
</head>
<body>
<h1>Worthandlung - Patricia Ennenbach</h1>
<p>Code-loving journalist. This site is my repository of tutorials and code snippets.</p>\n`

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