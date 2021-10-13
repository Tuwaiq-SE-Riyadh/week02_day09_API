let name;

fetch("https://rickandmortyapi.com/api/character")
  .then((respond) => respond.json())
  .then(function (json) {
    let name = json.results;
    for (let index = 0; index < 20; index++) {
      const div = document.createElement("div");
      const parent = document.querySelector("#parent");

      const img = document.createElement("img");
      const h = document.createElement("h4");
      console.log(name[index].name);
      img.src = name[index].image;
      h.innerText = name[index].name;

      div.append(img, h);

      div.id = "char";
      parent.append(div);
    }
  });
