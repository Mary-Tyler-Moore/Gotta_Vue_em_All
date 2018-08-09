const images = {
  bulbasaur: process.env.BULBASAUR || "https://upload.wikimedia.org/wikipedia/en/2/28/Pok%C3%A9mon_Bulbasaur_art.png",
  ivysaur: process.env.IVYSAUR || "https://upload.wikimedia.org/wikipedia/en/2/28/Pok%C3%A9mon_Bulbasaur_art.png",
  venusaur: process.env.VENUSAUR || "https://upload.wikimedia.org/wikipedia/en/2/28/Pok%C3%A9mon_Bulbasaur_art.png",
  charmander: process.env.CHARMANDER || "https://upload.wikimedia.org/wikipedia/en/2/28/Pok%C3%A9mon_Bulbasaur_art.png",
  charmeleon: process.env.CHARMELEON || "https://upload.wikimedia.org/wikipedia/en/2/28/Pok%C3%A9mon_Bulbasaur_art.png",
  charizard: process.env.CHARIZARD || "https://upload.wikimedia.org/wikipedia/en/2/28/Pok%C3%A9mon_Bulbasaur_art.png",
  squirtle: process.env.SQUIRTLE || "https://upload.wikimedia.org/wikipedia/en/2/28/Pok%C3%A9mon_Bulbasaur_art.png",
  wartortle: process.env.WARTORTLE || "https://upload.wikimedia.org/wikipedia/en/2/28/Pok%C3%A9mon_Bulbasaur_art.png",
  blastoise: process.env.BLASTOISE || "https://upload.wikimedia.org/wikipedia/en/2/28/Pok%C3%A9mon_Bulbasaur_art.png",
}

const pokedex = process.env.POKEDEX || "https://data.pixiz.com/output/user/frame/preview/400x400/2/3/0/0/2200032_50ba6.jpg";

export { images, pokedex };