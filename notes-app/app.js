const chalk=require('chalk')
const yargs=require('yargs')
const notes=require('./notes.js')

//add notes
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv)
    {
        notes.addNote(argv.title, argv.body)
    }
})
//remove notes
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:
    {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv)
    {
        notes.removeNote(argv.title)
        
    }
})
//read notes
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv)
    {
        notes.readNote(argv.title)
    }
})
//list notes
yargs.command({
    command: 'list',
    describe: 'Listing a note',
 
    handler(argv)
    {
        notes.listNote()
    }
})
yargs.parse()
