# project Realated to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Soulution code

## project 1

``` JavaScript
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
```

## project 2

``` javascript
const form = document.querySelector("form")

form.addEventListener('submit',function(event){
  event.preventDefault()

  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector("#weight").value)

  const results = document.querySelector("#results")

  if (height == '' || height < 0 || isNaN(height)){
    results.innerHTML = `please inter valid height ${height}`
    } else if (weight == '' || weight < 0 || isNaN(weight)){
      results.innerHTML = `please inter valid weight ${weight}` 
    } else{
      const BMI = (weight / ((height * height) / 10000)).toFixed(2);
      results.innerHTML = `<span>${BMI}</span>`;
    }

})


```