const  fs = require("fs")


const buffer=fs.readFileSync('1-json.json')
const book=buffer.toString();
const bookJSON=JSON.parse(book)
bookJSON.name='Nehmat'
bookJSON.age=19
const stringified=JSON.stringify(bookJSON)
fs.writeFileSync('1-json.json',stringified)

