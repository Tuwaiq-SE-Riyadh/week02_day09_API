


//--------------------------fetch API JSON info------------------------

fetch('https://rickandmortyapi.com/api/character')
.then(function(response) {
    return response.json()})
    .then(function (json) { 
     
      console.log(json)
 
      update(json)

    })

//----------------------------update HTML------------------------------

    function update(params) {

    for(let i=0 ; i< params.results.length ; i++){
    const body = document.querySelector('body') 
    const div = document.createElement('div')
    body.append(div)

    const img = document.createElement('img')
    const p = document.createElement('p')
    img.src = params.results[i].image
    p.innerHTML =  params.results[i].name
    div.append(img)
    div.append(p)

    p.style.textAlign = "center"
    div.style.display = "inline-block"
    div.style.margin = "5px"
    div.style.border = "2px solid blue"
    }
}

//-----------------------secrch---------------------------

