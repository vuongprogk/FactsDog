let factElement = document.getElementById("fact");
const ENDPOINT = "https://dogapi.dog/api/v1/facts";
document.addEventListener("DOMContentLoaded", getFact);

async function getFact() {
  let fact = await fetch(ENDPOINT);
  if (fact.ok) {
    fact
      .json()
      .then((value) => display(value["facts"]))
      .catch((error) => display("Something wrong"));
  }
}
function display(value) {
  factElement.textContent = value;
}
