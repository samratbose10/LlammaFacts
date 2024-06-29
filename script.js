const facts = [
    "Llamas are social animals and live in herds.",
    "Llamas communicate with each other by humming.",
    "Llamas can carry about 25 to 30 percent of their body weight.",
    "Llamas are used as guard animals for sheep herds.",
    "A llama’s wool is very soft and lanolin-free.",
    "Llamas can live up to 20 years.",
    "Llamas are native to South America.",
    "Llamas have three stomach compartments.",
    "Llamas can be trained to pull carts and carry packs.",
    "Llamas are closely related to alpacas, vicuñas, and guanacos.",
    "Llamas are domesticated animals and have been used by humans for thousands of years.",
    "Llamas have a split upper lip that helps them graze on various types of vegetation.",
    "Llamas are known for their gentle and calm demeanor.",
    "Llamas are intelligent and can learn simple tasks after a few repetitions.",
    "Llamas are often used in animal-assisted therapy programs due to their gentle nature.",
    "Llamas can produce a variety of vocalizations, including a 'mwa' sound used to express irritation.",
    "Llamas are members of the camel family.",
    "Llamas have large eyes with long lashes to help protect against the sun and debris.",
    "Llamas can grow up to 6 feet tall and weigh between 250 and 450 pounds.",
    "Llamas have padded, two-toed feet that are well adapted for walking on rough terrain."
];

function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
}

function updateFact() {
    document.getElementById('fact').innerText = getRandomFact();
}

function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById('datetime').innerText = dateTimeString;
}

document.getElementById('newFactButton').addEventListener('click', updateFact);

updateFact();
updateDateTime();
setInterval(updateFact, 3600000); 
setInterval(updateDateTime, 1000); 
