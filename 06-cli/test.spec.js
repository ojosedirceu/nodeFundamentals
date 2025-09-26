const { ok, deepEqual } = require("assert");
const database = require("./database");

const DEFAULT_HEROES = {
  name: "Flash",
  power: "Speed",
  id: 1,
};

describe("Suite de manipulação de Heróis", () => {
  before(async () => {
    await database.addHeroIntoFile(DEFAULT_HEROES);
  });

  it("Deve pesquisar um herói usando arquivos", async () => {
    const expected = DEFAULT_HEROES;
    const [hero] = await database.getAllHeroes(expected.id);

    deepEqual(hero, expected);
  });

  it("Deve cadastrar um herói usando arquivos", async () => {
    const expected = DEFAULT_HEROES;
    await database.addHeroIntoFile(DEFAULT_HEROES);

    const [actual] = await database.getAllHeroes(DEFAULT_HEROES.id);

    ok.deepEqual(actual, expected);
  });
});
