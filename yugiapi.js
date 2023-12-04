const cardName = [
"Blue-Eyes White Dragon",
"Dark Magician",
"Red-Eyes B. Dragon",
"Summoned Skull",
"D.D. Trainer",
"Gaia the Fierce Knight",
"Giant Soldier of Stone",
"Gogiga Gagagigo",
"Millennium Shield",
"Neo Aqua Matador",
"Oppressed People",
"Acrobat Monkey",
"Aqua Matador",
"Curse of Dragon",
"Earthbound Spirit",
"Inapchi",
"Island Turtle",
"People Running About",
"Prevent Rat",
"Skull Dog Marron",
"United Resistance",
"Ushi Oni",
"Ancient Jar",
"Ancient Lizard Warrior",
"Ancient Tree of Enlightenment",
"Bean Soldier",
"Beaver Warrior",
"Big Insect",
"Blocker",
"Bone Mouse",
"Change Slime",
"Dark King of Abyss",
"Dark Plant",
"Dark Rabbit",
"Destroyer Golem",
"Fiend Scorpion",
"Fungi of the Mask",
"Garvas",
"Giant Flea",
"Gigobyte",
"Goblin Calligrapher",
"Golgoil",
"Grand Tiki Elder",
"Griffore",
"Headless Knight",
"Jellyfish",
"Kappa Avenger",
"Kattapillar",
"King of Yamimakai",
"Kojikocy",
"Laughing Flower",
"Mammoth Graveyard",
"Melchid the Four-Face Beast",
"Pale Beast",
"Red Archery Girl",
"Saggi the Dark Clown",
"Shadow Specter",
"Sleeping Lion",
"Souls of the Forgotten",
"Tao the Chanter",
"The 13th Grave",
"The Earl of Demise",
"The Gross Ghost of Fled Dreams",
"The Judgement Hand",
"The Portrait's Secret",
"Toon Alligator",
"Torike",
"Turtle Tiger",
"Uraby",
"Water Omotics",
"Wolf",
"Yormungarde"
];

const requestDelay = 50; // 50 milisegundos (20 peticiones por segundo)

function fetchCardInfo(cardName) {
  const encodedName = encodeURI(cardName);
  const apiUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${encodedName}`;

  return fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(`Información de la carta "${cardName}":`, data);
      // Aquí puedes realizar acciones con la información obtenida de la carta
    })
    .catch(error => {
      console.error(`Error al obtener información de la carta "${cardName}":`, error);
      // Manejar errores específicos o mostrar mensajes más informativos según sea necesario
    });
}

async function executeRequests() {
  for (let i = 0; i < cardNames.length; i++) {
    await fetchCardInfo(cardNames[i]);
    await delay(requestDelay);
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

executeRequests();
