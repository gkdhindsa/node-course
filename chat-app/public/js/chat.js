const socket=io()

socket.on('countUpdated', (count)=>{
    console.log('The count has been updated! as ',count)
})

document.querySelector('#increment').addEventListener('click', function(){
    socket.emit('increment')
})