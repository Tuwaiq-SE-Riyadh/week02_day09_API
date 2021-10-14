fetch('https://rickandmortyapi.com/api/character')
.then(function(response) {
  return response.json()})
  .then(function (json) { 
    
    console.log(json)
    let results=json.results;
    for(let i=0; i<results.length; i++ ){
let n=results[i].name;
let image=results[i].image;  
// create img tag 
const img=document.createElement("img")
//add img src
 img.src=image;
//create p
const para=document.createElement("p")
//add name
para.innerText=n;
//create div
const div=document.createElement("div")
//append img to div
div.append(img);
//append p to div
div.append(para);
//select body
const body=document.querySelector('body');
//add div to the body
body.append(div);
  }
 update(json);
})
