// # The Rick and Morty API
// <img src="giphy.gif">

// > The goal of this lab to fetch (get) images and names for characters from the Rick and Morty API and display it as grid 
// - Use this documentation `https://rickandmortyapi.com/documentation/` to know how to fetch the data from this API.
// - Use `https://rickandmortyapi.com/api/character` endpoint to get information for the characters.
// - Figure out how to access the images and names key with their values.
// - Display these values in grid.
// ## The output Should like this:
// ![Output](JSON-lab-output.png)


fetch('https://rickandmortyapi.com/api/character')
.then(function(response) {
  return response.json()})
  .then(function (json) { 
    let data =json
    console.log(data.results[0])
    const body = document.querySelector('body')
    for (let i = 0; i < data.results.length; i++) {
        const img = document.createElement("img");
        img.src = data.results[i].image
        console.log("img.src"+i+img.src);
        const p1 = document.createElement("p");
        p1.innerText= data.results[i].name
        let divchild = document.createElement("div")
        
        divchild.append(img);
        divchild.append(p1);
        body.append(divchild)
    }
    
  })

