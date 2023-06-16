const nouns = ["The turkey", "Mom", "Dad", "The dog", "My Teacher", "The elephant", "The Cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const nounspart2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const places = ["on the moon", "on the chair", "in my pizza", "in my soup", "on the grass", "in my shoes"];

function getRandomWord(words) {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

function generatePhrase(category) {
  let word;

  switch (category) {
    case "nouns":
      word = getRandomWord(nouns);
      break;
    case "verbs":
      word = getRandomWord(verbs);
      break;
    case "adjectives":
      word = getRandomWord(adjectives);
      break;
    case "nounspart2":
      word = getRandomWord(nounspart2);
      break;
    case "places":
      word = getRandomWord(places);
      break;
    default:
      word = "";
  }

  document.getElementById("phrase").textContent += word + " ";
  speakNow(word);
}

function generateFullPhrase() {
  document.getElementById("phrase").textContent = "";
  generatePhrase("nouns");
  generatePhrase("verbs");
  generatePhrase("adjectives");
  generatePhrase("nounspart2");
  generatePhrase("places");
}

function readPhrase() {
  const phrase = document.getElementById("phrase").textContent;
  speakNow(phrase);
}

// Create a new speechSynthesis object
var synth = window.speechSynthesis;

function speakNow(string) {
  // Create a new speech object, attaching the string of text to speak
  var utterThis = new SpeechSynthesisUtterance(string);
  // Actually speak the text
  synth.speak(utterThis);
}

function clearText() {
  document.getElementById("phrase").textContent = "";
}

document.getElementById("generateButton").addEventListener("click", generateFullPhrase);
document.getElementById("readButton").addEventListener("click", readPhrase);
