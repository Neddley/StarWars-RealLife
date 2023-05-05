function reveal1() {
  for (i = 1; i < 6; i++) {
    fetch("https://swapi.dev/api/people/" + i)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  document.getElementById("index1").removeAttribute("onmouseenter");
  if (document.getElementById("primary").clientHeight > 300) {
    document.getElementById("index1").classList.add("active");
  }
}

function reveal2() {
  for (i = 6; i < 11; i++) {
    fetch("https://swapi.dev/api/people/" + i)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  document.getElementById("index2").removeAttribute("onmouseenter");
  if (document.getElementById("secondary").clientHeight > 300) {
    document.getElementById("index2").classList.add("active");
  }
}

function reveal3() {
  for (i = 11; i < 16; i++) {
    fetch("https://swapi.dev/api/people/" + i)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  document.getElementById("index3").removeAttribute("onmouseenter");
  if (document.getElementById("tertiary").clientHeight > 300) {
    document.getElementById("index3").classList.add("active");
  }
}
