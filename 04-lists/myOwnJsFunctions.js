Array.prototype.myOwnMap = function (callbackFn) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    const value = callbackFn(this[i], i, this);
    newArray.push(value);
  }

  return newArray;
};

const doubleOfIt = [1, 2, 3, 4].myOwnMap((item, index) => item * 2);
// console.log("Double of It", doubleOfIt);
const itemToIndex = doubleOfIt.myOwnMap((item, index) => item * index);
// console.log("Item to Index", itemToIndex);

Array.prototype.myOwnFilter = function (callbackFn) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    const value = callbackFn(this[i], i, this);

    if (!value) continue;

    newArray.push(this[i]);
  }

  return newArray;
};

const Jnames = ["José", "Joana", "Cleiton", "Rafael", "Josué"].myOwnFilter(
  (name, index) => {
    // if (name.includes("J")) return name;
    if (name.indexOf("J") !== -1) return name;
  }
);
// console.log(Jnames);

Array.prototype.myOwnReduce = function (callbackFn, initValue) {
  let initialValue = typeof initValue !== undefined ? initValue : this[0];

  for (let i = 0; i < this.length; i++) {
    initialValue = callbackFn(initialValue, this[i], i, this);
  }

  return initialValue;
};

const totalValue = [2, 4, 8, 16, 32, 64].myOwnReduce((acc, current) => {
  return acc + current;
}, 0);
// console.log(totalValue);
const fullName = ["José", "Dirceu", "Neto"].reduce((acc, current) => {
  return `${acc} ${current}`;
}, "");
console.log(fullName);
