const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 35,  "name": "Clefairy",   "types": ["normal"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);


//Pokémon Objects Where the ID is Evenly Divisible by 3:
const divisibl3 = pokemon.filter(p => p.id % 3 === 0);
console.log(divisibl3);

//Pokémon Objects That Are "Fire" Type:
const firepkmn = pokemon.filter(p => p.types.includes("fire"));
console.log(firepkmn);

//Pokémon Objects That Have More Than One Type:
const multitypePkmn = pokemon.filter(p => p.types.length > 1);
console.log(multitypePkmn);

//Array with Just the Names of the Pokémon:
const pkmnNames = pokemon.map(p => p.name);
console.log(pkmnNames);

//Array with Just the Names of Pokémon with an ID Greater Than 99:
const namesAbove99 = pokemon.filter(p => p.id > 99).map(p => p.name);
console.log(namesAbove99);

//Array with Just the Names of Pokémon Whose Only Type is "Poison":
const poisonOnlyNames = pokemon.filter(p => p.types.length === 1 && p.types.includes("poison")).map(p => p.name);
console.log(poisonOnlyNames);

//Array Containing Just the First Type of All Pokémon Whose Second Type is "Flying":
const firstTypeFlyingSecond = pokemon.filter(p => p.types[1] === "flying").map(p => p.types[0]);
console.log(firstTypeFlyingSecond);

//CCount of the Number of Pokémon That Are "Normal" Type":
const normalCount = pokemon.filter(p => p.types.includes("normal")).length;
console.log(normalCount);

//Array with All Pokémon Except the Pokémon with the ID of 148:
const excludeId148 = pokemon.filter(p => p.id !== 148);
console.log(excludeId148);

//Array with All Pokémon and for Pokémon ID: 35, Replace "Normal" with "Fairy":
const replaceNormalWithFairy = pokemon.map(p => {
    if (p.id === 35) {
        return { ...p, types: p.types.map(t => t === "normal" ? "fairy" : t) };
    }
    return p;
});
console.log(replaceNormalWithFairy);
