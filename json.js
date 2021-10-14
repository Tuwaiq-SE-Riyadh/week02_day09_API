fetch('https://rickandmortyapi.com/api/character')
.then(function(response) {return response.json()}).then(function (json)
{ 

document.querySelector("#d0").style = "display: grid; column-gap: 20px; grid-template-columns: 1fr 1fr 1fr; row-gap: 20px;";

for(let i = 0 ; i < json.results.length ; i ++){

 img = document.createElement("img");
 img.src = json.results[i].image;
 
 p = document.createElement("p");
 p.append(json.results[i].name);

 div = document.createElement("div");
 div.append(img);
 div.append(p);

 document.querySelector("#d0").append(div);
}
  })
