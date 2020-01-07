
const { readdirSync } = require('fs')

const directories = readdirSync(__dirname+'/pages', { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

let text = ''

for (const folder of directories) {
    text+=`<h3>${folder}</h3>\n`;
    const files = readdirSync(__dirname+'/pages/'+folder, { withFileTypes: true })
    .filter(dirent => dirent.name.endsWith('.html'))
    .map(dirent => dirent.name)
    for (const file of files) {
        text+=`<a href>${file}</a>\n`
    }
}

console.log(text);



// for each folder in pages:
//     take folder name and use it as headline
//     for each file in folder:
//     take each file and use it as a link to this file
