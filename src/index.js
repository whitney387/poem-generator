function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: ["The poem goes here...."],
    autoStart: true,
    Delay: 1,
    cursor: "",
  });
  poemElement.innerHTML = "The poem goes here....";
}

let formPoem = document.getElementById("poem-form");
formPoem.addEventListener("submit", generatePoem);
