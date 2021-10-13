fetch('https://rickandmortyapi.com/api/character')
.then(function(response) {
  return response.json()})
  .then(function (json) { 
    // console.log(json.results[1])
    const result = json.results
    for (let i = 0; i < result.length; i++) {
        // console.log(json.results[i].name);
        const jsonname = result[i].name
        const jsonimg = result[i].image
        // Result(jsonname,jsonimg);  

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

//   function Result(names , images) {
//       console.log(names);
//       console.log(images);

//       for (let i = 0; i < names.length; i++) {
        
//       }

// }