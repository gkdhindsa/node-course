let form = document.querySelector('#form')
console.log(form)
let messageOne = document.querySelector('#location')
let messageTwo = document.querySelector('#forecast')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    let address = document.querySelector('#address').value
    console.log(address)

messageOne.textContent='Loading...'
messageTwo.textContent=''

    fetch(`/weather?address=${address}`).then((response) => {
        response.json().then((data) => {
            if (data.errorMessage) {
                messageOne.textContent(data.error)
            } else {

                messageOne.textContent=(data.location)
                messageTwo.textContent=(data.forecast)


            }
        })
    })
})