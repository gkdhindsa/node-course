const event={
    name: 'Birthday Party',
    guestList:['A', 'B', 'C'],
    printGuestList(){
        console.log('Guest list for '+ this.name)
        this.guestList.forEach((item)=>{
            console.log(item+ ' is attending '+ this.name)
        })
    }
}

event.printGuestList()