const fs = require('fs')
const chalk = require('chalk')


const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    debugger

    if (duplicateNote) {

        console.log(chalk.red.inverse('Note with this title already exists'))

    } else {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'))
    }
}
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if (notes.length == notesToKeep.length) {
        console.log(chalk.red.inverse('No Note found!'))

    } else {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    }


}
const listNote = () => {
    const notes = loadNotes()

    if (notes.length === 0) {
        console.log(chalk.red.inverse('No Note found!'))

    } else {
        console.log(chalk.inverse('Your notes:'))
        notes.forEach((note) => {
            console.log(note.title)
        })
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const findingNote = notes.find((note) => note.title === title)
    if(findingNote){
        console.log(chalk.inverse(title))
        console.log(findingNote.body)
    }
    else{
        console.log(chalk.red.inverse('Unable to find the said note'))
    }


}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = JSON.parse(dataBuffer.toString())
        return dataJSON
    } catch (e) {
        return []
    }

}
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}