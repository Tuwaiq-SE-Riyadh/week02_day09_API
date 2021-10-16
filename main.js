fetch(`https://rickandmortyapi.com/api/character`)
.then(function(response) {
  // it will come back as object because .json
  return response.json()})
  .then(function (json) { 
    // you can access the data only in this code block
    // console.log(json.results)
    const ch = json.results;
    console.log(ch);
    console.log(ch[0].name);
    const myDiv = document.querySelector("#container");
    
    for (let i = 0; i < ch.length; i++) {
        const divs = document.createElement("div");
        // divs.className("x");
        const img = document.createElement("img");
        const text = document.createElement("p");
        text.innerText = ch[i].name;
        img.src = ch[i].image;
        myDiv.append(divs)
        divs.append(img);
        divs.append(text);      
    }
    // you could pass the data to another function or simply write your js code that would modify the html over here
    // example:
    // create a ul list then loop over the data to create li elements and append them to ul
  })