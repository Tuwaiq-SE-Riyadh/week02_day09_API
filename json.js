
fetch('https://rickandmortyapi.com/api/character')
.then(function(response) {
  return response.json()})
  .then(function (json) { 
    
  
    console.log(json.results)
    const charcters = json.results

    for(let i=0 ;i<charcters.length ; i++){
        
        console.log(charcters[i].image)
        console.log(charcters[i].name)
        const image =document.createElement('img');
        image.src =charcters[i].image
        const paragraph = document.createElement('p');
       paragraph.innerText = charcters[i].name
       const div = document.createElement("div");
       div.append(image)
       div.append(paragraph)
      
      const body = document.querySelector("body");
      body.append(div)


          
    }
  })
  