let intelligence = 0;
let inventory = [];
let treasureInventory = [];

const character = document.getElementById('character');

function moveCharacter(event) {
    const newX = event.clientX - character.clientWidth / 2; 
    const newY = event.clientY - character.clientHeight / 2; 

    document.addEventListener('mousemove', moveCharacter);

    character.style.left = newX + 'px';
    character.style.top = newY + 'px';
}
function handleTreasureClick() {
    var treasureWords = [
        { word: "Ephemeral", meaning: "Lasting for a very short time." },
        { word: "Quixotic", meaning: "Exceedingly idealistic; unrealistic and impractical." },
        { word: "Nefarious", meaning: "Wicked, villainous, or criminal in nature." },
        { word: "Sagacious", meaning: "Having or showing keen mental discernment and good judgment." },
        { word: "Ubiquitous", meaning: "Present, appearing, or found everywhere." }
    ];

    var randomIndex = Math.floor(Math.random() * treasureWords.length);
    var wordObj = treasureWords[randomIndex];
    var word = wordObj.word;
    var meaning = wordObj.meaning;

    var intelligencePoints = parseInt(localStorage.getItem('intelligencePoints')) || 0;
    intelligencePoints += 20;
    localStorage.setItem('intelligencePoints', intelligencePoints);
    
    if (intelligence < 200) {
        intelligence += 20;
        if (intelligence > 200) {
            intelligence = 200; // Cap intelligence at 200
            alert("You found a treasure and gained 20 intelligence points, but you've reached the maximum intelligence of 200!");
        } else {
            alert("You found a treasure and gained 20 intelligence points!");
        }
   
    addToInventory(word, meaning );

    alert("You found a treasure!\nWord: " + word + "\nMeaning: " + meaning + "\nIntelligence Points: " + intelligencePoints);
} 
else {
    alert("You've reached the maximum intelligence of 200! No additional intelligence points gained.");
}
}

function addToInventory(name, word, meaning) { 
    if (inventory.some(item => item.word === word)) {
        alert("You already have the word in your inventory!");
    } else {
        let item = { name: name, word: word, meaning: meaning };
        inventory.push(item);
        alert("You have collected the word and its meaning to your inventory!");
    }
}


function displayInventory() {
    if (inventory.length === 0) {
        alert("Your inventory is empty!");
    } else {
        let inventoryList = "Inventory:\n";
        for (let i = 0; i < inventory.length; i++) {
            inventoryList += (i + 1) + ". " + inventory[i].name + ": " + inventory[i].word + "\n";
        }
        alert(inventoryList);
    }
}

function placeTreasure() {
    var treasure = document.createElement('div');
    treasure.className = 'treasure';
    treasure.style.top = Math.random() * window.innerHeight + 'px';
    treasure.style.left = Math.random() * window.innerWidth + 'px';

    var removeTreasure = setTimeout(function() {
        treasure.remove();
    }, 10000); // 10 seconds

    treasure.addEventListener('click', function() {
        clearTimeout(removeTreasure); // Clear the timeout if treasure is clicked
        handleTreasureClick();
        treasure.remove(); // Remove the treasure after it's been clicked
    });

    document.body.appendChild(treasure);
}

placeTreasure();

setInterval(placeTreasure, 30000);