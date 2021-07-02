let form=document.querySelector('#form')
console.log(form)
form.addEventListener('submit', (e)=>{
    e.preventDefault()
   let address=document.querySelector('#address') .value
    console.log(address)


    fetch(`http://localhost:3000/weather?address=${address}`).then((response)=>{
    response.json().then((data)=>{
        if(data.errorMessage){
            console.log(errorMessage)
        }
        else{
            let him=document.querySelector('#result')
            him.textContent('"location: "+data.location+" "+data.forecast)
         
        }
    })
})
})

   