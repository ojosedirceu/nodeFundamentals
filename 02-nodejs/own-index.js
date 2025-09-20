function get2Phone() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      return resolve({
        phone1: "1111111",
        phone2: "2222222",
      });
    }, 1000);
  });
}

function getName() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      return resolve({
        name: "José Neto",
      });
    }, 1000);
  });
}

console.time("Promise all");
const data = await Promise.all([get2Phone(), getName()]);
console.log("All", data);
console.timeEnd("Promise all");

console.time("then");
get2Phone()
  .then(function (phones) {
    return getName().then(function (names) {
      return {
        name: names.name,
        phone1: phones.phone1,
        phone2: phones.phone2,
      };
    });
  })
  .then(function (data) {
    return {
      name: data.name,
      phone1: data.phone1,
      phone2: data.phone2,
      age: 30,
    };
  })
  .then(function (data) {
    console.log("Then", data);
  });
console.timeEnd("then");
