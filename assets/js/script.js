const index1 = document.getElementById("index1");
const index2 = document.getElementById("index2");
const index3 = document.getElementById("index3");
const primary = document.getElementById("primary");
const secondary = document.getElementById("secondary");
const tertiary = document.getElementById("tertiary");
const mainChars = document.querySelector("#main-chars")

class Character {
  constructor(name, height, mass) {
    this.name = name;
    this.height = height;
    this.mass = mass;
  }
}

function reveal1() {
  for (i = 1; i < 6; i++) {
    fetch("https://swapi.dev/api/people/" + i)
      .then((response) => response.json())
      .then(
        (data) => (primaryChar = new Character(data.name, data.height, data.mass))
      )
      .then((primaryChar) => generator(primaryChar));
  }

  function generator(data){

    let name = data.name
    let height = data.height
    let mass = data.mass

    primary.innerHTML +=`
    <div class="v1">
          <div class="circle"></div>
          <div class="texts">
            <h2>${name}</h2>
            <p>Estatura: ${height} cm. Peso: ${mass} kg.</p>
          </div>
        </div>
    `
  }

  index1.removeAttribute("onmouseenter");
  if (primary.clientHeight > 300) {
    index1.classList.add("active");
  }
}

function reveal2() {
  for (i = 6; i < 11; i++) {
    fetch("https://swapi.dev/api/people/" + i)
      .then((response) => response.json())
      .then((data) => (secondaryChar = new Character(data.name, data.height, data.mass))
      )
      .then((secondaryChar) => generator(secondaryChar));
  }
  index2.removeAttribute("onmouseenter");
  if (secondary.clientHeight > 300) {
    index2.classList.add("active");
  }
}

function reveal3() {
  for (i = 11; i < 16; i++) {
    fetch("https://swapi.dev/api/people/" + i)
      .then((response) => response.json())
      .then((data) => (tertiaryChar = new Character(data.name, data.height, data.mass))
      )
      .then((tertiaryChar) => generator(tertiaryChar));
  }
  index3.removeAttribute("onmouseenter");
  if (tertiary.clientHeight > 300) {
    index3.classList.add("active");
  }
}
