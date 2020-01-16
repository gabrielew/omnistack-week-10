module.exports = function parseStringAsArray(arrayAsString) {
  return arrayAsString.split(",").map(tech => tech.trim()); // trim tira espaços antes e depois
};
