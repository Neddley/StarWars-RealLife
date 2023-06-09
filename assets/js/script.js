const index1 = document.getElementById("index1");
const index2 = document.getElementById("index2");
const index3 = document.getElementById("index3");
const primary = document.getElementById("primary");
const secondary = document.getElementById("secondary");
const tertiary = document.getElementById("tertiary");

class Character {
  constructor(name, height, mass) {
    this.name = name;
    this.height = height;
    this.mass = mass;
  }
}

function reveal(num1, num2) {
  
  if (num2 <7) {
    index1.removeAttribute("onmouseenter");
    index1.classList.add("active");
  } else if (num2 < 12) {
    index2.removeAttribute("onmouseenter");
    index2.classList.add("active");
  } else {
    index3.removeAttribute("onmouseenter");
    index3.classList.add("active");
  }

  let count = 0; // contador para retrasar la aparición de los divs

  for (i = num1; i < num2; i++) {
    fetch("https://swapi.dev/api/people/" + i)
      .then((response) => response.json())
      .then(
        (data) => (char = new Character(data.name, data.height, data.mass))
      )
      .then((char) => {
        count++; // incrementar el contador por cada iteración del ciclo
        setTimeout(() => generator(char,num2), count * 500); // llamar a generator con un retraso de 0.5 segundos multiplicado por el contador
      });
  }

  function generator(data, num) {
    console.log(data)
    let name = data.name;
    let height = data.height;
    let mass = data.mass;

    if (num < 7) {
      div1 = primary;
      div2 = "v1";
    } else if (num < 12) {
      div1 = secondary;
      div2 = "v2";
    } else {
      div1 = tertiary;
      div2 = "v3";
    }
    div1.innerHTML += `
    <div class=${div2}>
          <div class="circle"></div>
          <div class="texts">
            <h2>${name}</h2>
            <p>Estatura: ${height} cm. Peso: ${mass} kg.</p>
          </div>
        </div>
    `;
  }
}

