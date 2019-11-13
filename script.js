const ENTER = 13;
const SPACEBAR = 32;

const arrayOfFacts = [
  "Octopuses lay 56,000 eggs at a time",
  "The longest recorded flight of a chicken is thirteen seconds",
  "Elephants are the only mammals that can't jump",
  "A sneeze travels out your mouth at over 160 kph",
  "Otters sleep holding hands",
  "The average person walks the equivalent of three times around the world in a lifetime",
  "Guinness Book of Records holds the record for being the book most often stolen from Public Libraries",
  "Starfish can re-grow their arms. In fact, a single arm can regenerate a whole body",
  "You have a 1 in 200 chance of being related to Genghis Khan",
  "Humans share 50% of their DNA with bananas",
  "A Blue Whale's heart is the size of a VW Beetle and large enough that you could swim through it's arteries",
  "The average person spends 6 months of their lifetime waiting on a red light to turn green",
  "It would take a sloth one month to travel one km",
  "10% of the World’s population is left handed",
  "About 150 people per year are killed by coconuts",
  "Honey never spoils",
  "Cherophobia is the fear of happiness",
  "The bloodhound is the only animal whose evidence is admissible in court",
  "'E' is the most common letter and appears in 11 percent of all english words",
  "Sea lions can dance to a beat"
];

const facts = document.querySelector("#facts");

function generateRandomFact() {
  let randomFact = Math.floor(Math.random() * arrayOfFacts.length);
  facts.innerHTML = arrayOfFacts[randomFact];
}

document.addEventListener("keydown", event => {
  if (event.keyCode === ENTER) {
    generateRandomFact();
  } else if (event.keyCode === SPACEBAR) {
    generateRandomFact();
  }
});

facts.addEventListener("click", event => {
  generateRandomFact();
});
