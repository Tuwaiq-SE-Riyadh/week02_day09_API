fetch('https://rickandmortyapi.com/api/character')
.then(function(response) {
  return response.json()})
  .then(function (json) { 
    const result = json.results
    for (let i = 0; i < result.length; i++) {
        const jsonname = result[i].name
        const jsonimg = result[i].image

        const div = document.querySelector("#parent")
        const supdiv = document.createElement("div")
        const img =document.createElement("img")
        const p =document.createElement("p")
  
        img.src = jsonimg;
        p.innerText = jsonname;

        supdiv.append(img);
        supdiv.append(p);

        div.append(supdiv);
    }

  })
