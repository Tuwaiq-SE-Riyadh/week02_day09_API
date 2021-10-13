
// use fetch to get data from another website
// add the url as an argument to get data from that provided URL
fetch('https://rickandmortyapi.com/api/character')
.then(function(response) {
  return response.json()})
  .then(function (json) { 
    // you can access the data only in this code block
    console.log(json)

    // you could pass the data to another function or simply write your js code that would modify the html over here
    // example:
    // create a ul list then loop over the data to create li elements and append them to ul
    
    let ul = json.results;
    console.log(ul);
 

    for (let i = 0; i < ul.length; i++) {
        
        let div2=document.createElement("div")
        let li = document.createElement("img");
        li.src = ul[i].image;
        li.p = ul[i].name;
       let div=document.querySelector(".grid-container");
        div2.appendChild(li)
        console.log(ul[i].image)
        let s = document.createElement("p");
        s.innerText=ul[i].name;
        div2.appendChild(s);
        div.appendChild(div2);

    }
  })