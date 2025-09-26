const { readFile, writeFile } = require("fs");
const { promisify } = require("util");

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

class Database {
  constructor() {
    this.file = "heroes.json";
  }

  async getHeroFromFile() {
    const file = await readFileAsync(this.file, "utf8");
    return JSON.parse(file.toString());
  }

  async writeFile(data) {
    await writeFileAsync(this.file, JSON.stringify(data));
    return true;
  }

  async addHeroIntoFile(hero) {
    const id = hero.id <= 2 ? hero.id : Date.now();
    const heroWithID = { ...hero, id };

    const heroesList = await this.getHeroFromFile();
    const updatedHeroesList = [...heroesList, heroWithID];

    const result = await this.writeFile(updatedHeroesList);
    return result;
  }

  async getAllHeroes(id) {
    const heroes = await this.getHeroFromFile();
    const hero = heroes.filter((item) => (id ? item.id === id : true));

    return hero;
  }
}

module.exports = new Database();
