function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    Delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructions = document.getElementById("text");

  let apiKey = "23e2742eef1f1bc7tod430e337aaf4bd";
  context =
    "You are a romatic poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML. Make sure to follow. Make sure to follow the user instructions below. sign the poem with shecodes AI in bold and remove the HTML on the top";
  prompt = `User instructions:Generate an English poem about ${instructions.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayPoem);
}

let formPoem = document.getElementById("poem-form");
formPoem.addEventListener("submit", generatePoem);
