        fetch('https://rickandmortyapi.com/api/character')
        .then(function(response) {
        return response.json()})
        .then(function (json) { 
            
            // you can access the data only in this code block
            console.log(json['results'])
            getTheData(json['results'])
            // you could pass the data to another function or simply write your js code that would modify the html over here
            // example:
            // create a ul list then loop over the data to create li elements and append them to ul
        })


        function getTheData(date)
        {
            for(let i = 0 ; i<date.length ; i++)
            {
                appendElemnt(date[i])
            }
        }


        function appendElemnt(index)
        {
        const ImageDiv = document.querySelector("#grid-container");

        const ChildDiv = document.createElement("div");
        ChildDiv.classList.add("grid-item");
        ImageDiv.append(ChildDiv);

        const img = document.createElement("img");
        const paragraf = document.createElement("p");

        img.src=index['image']
        paragraf.innerText=index['name']

        ChildDiv.append(img);
        ChildDiv.append(paragraf);
        }