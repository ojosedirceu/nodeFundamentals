const { get } = require("axios");

const URL = "https://swapi.dev/api/people";

async function getPeople(name) {
  const url = `${URL}/?search=${name}`;
  const people = await get(url);
  return people.data.results.map(formatPeople);
}

function formatPeople(currentPeople) {
  const { name, height } = currentPeople;

  return {
    nome: name,
    peso: height,
  };
}

module.exports = {
  getPeople,
  URL,
};
