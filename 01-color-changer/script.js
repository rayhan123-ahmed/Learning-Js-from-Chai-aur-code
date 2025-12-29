const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")

buttons.forEach((button)=>{
    button.addEventListener('click',function(event){
        if(event.target.id === 'grey'){
            body.style.backgroundColor = event.currentTarget.id
        }
        if(event.target.id === 'white'){
            body.style.backgroundColor = event.currentTarget.id
        }
        if(event.target.id === 'blue'){
            body.style.backgroundColor = event.currentTarget.id
        }
        if(event.target.id === 'yellow'){
            body.style.backgroundColor = event.currentTarget.id
        }
        if(event.target.id === 'red'){
            body.style.backgroundColor = event.currentTarget.id
        }
    })
})