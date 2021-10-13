// saving to local storage
localStorage.setItem('ourKey', "the value of our key")

const usersArray = ["John", "Jane"]
    // must stringify arrays and objects before saving to local storage
localStorage.setItem('users', JSON.stringify(usersArray))
const users = localStorage.getItem('users')
    // parse the value to turn it back to its original state (array in this case) 
    //console.log(JSON.parse(users)[0])

// use fetch to get data from another website
// add the url as an argument to get data from that provided URL
fetch('https://rickandmortyapi.com/api/character')
    .then(function(response) {
        return response.json()
    })
    .then(function(json) {
        // you can access the data only in this code block
        let b = document.body
        let d = document.getElementById('div1')

        console.log(json.results)
        for (let i = 0; i < 20; i++) {
            let image = console.log(json.results[i].image)
            let name1 = console.log(json.results[i].name)
            let div = document.createElement('div')


            // let h = document.createElement(h2)
            //  div.innerText = json.results[i].name
            d.appendChild(div)
            let img = document.createElement('img')
            img.src = json.results[i].image
            img.style = 'width:80%'
            div.appendChild(img)
            let h = document.createElement('h3')
            h.innerText = json.results[i].name
            div.appendChild(h)



        }

    })