fetch('https://rickandmortyapi.com/api/character')
.then(function(response) {
  return response.json()})
  .then(function (json) { 
    // you can access the data only in this code block
    //console.log(json)
    // you could pass the data to another function or simply write your js code that would modify the html over here
    // example:
    // create a ul list then loop over the data to create li elements and append them to ul
    const ch = json.results;
    console.log(ch);
    console.log(ch[0].name);
    const myDiv = document.querySelector("#container");

    for(let i=0; i<ch.length; i++){
                                                       //  let n=ch[i].name
        const divs = document.createElement("div");
        const img = document.createElement("img");
        const text = document.createElement("p")
        text.innerText = ch[i].name;
        img.src = ch[i].image

        
        divs.append(img)
        divs.append(text)
        myDiv.append(divs)
    }
    
  })

/*

let resuly =json.results

let body = docuemnt.....

for(let i = 0; i<results.length;i++)
let n = results[i].name
let image = reults[i].image
}

// DOM

//create img tag
//change image src
const img = document.createElement("img")
img src = image

//create p
//add the name
const p=document.createElement("p")
p.innerText=name

//create div
const div = document.createElement("div")
//append img to div
div.append(img)
//append p to div
div.append(p)
//select body above and a ppend it here
body.append (div)
*/

  