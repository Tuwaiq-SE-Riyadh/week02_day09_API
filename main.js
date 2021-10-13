fetch('https://rickandmortyapi.com/api/character')
.then(function(response) {
  return response.json()})
  .then(function (json) { 
    console.log(json.results)
    for(let i = 0;i<json.results.length;i++){
        let div1 = document.querySelector(".main-div")
        let div2 = document.createElement("div")
        let img = document.createElement("img")
        img.src=json.results[i].image
       div2.appendChild(img);
        //document.body.appendChild(img);
        
        
        let p1 = document.createElement("p")
        p1.innerHTML=json.results[i].name
        div2.appendChild(p1);
        div1.appendChild(div2);
        //document.querySelector("#p1").innerHTML = json.results[i].name
        //document.querySelector("#img1").src=json.results[i].image
        
    }
  })
