fetch('https://rickandmortyapi.com/api/character')
.then(function(response) {
  return response.json()})
  .then(function (json) { 
    // you can access the data only in this code block
    console.log(json.results[0].image)
    const aa=json
    console.log(aa)
    const par=document.querySelector("#parent")
    for(let i=0;i<json.results.length ;i++){
        const div=document.createElement("div")
        const img=document.createElement("img")
        const p=document.createElement("p")

        div.class="child child"+(i+1);
        img.src=json.results[i].image;
        p.innerText=json.results[i].name;
        par.append(div)
        div.append(img)
        div.append(p)
      
    }
  })
  


