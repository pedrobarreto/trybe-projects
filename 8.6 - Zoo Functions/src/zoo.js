const data = require('./data');

function getSpeciesByIds(...ids) {
  // defino o spread operator para receber +1 parâmetro
  // Utilizo a HOF filter para comparar com o id do objeto e retornar a espécie
  // Aproveito o index do filter para percorrer o array do parâmetro e fazer a comparação
  return data.species.filter((animal, index) => animal.id === ids[index]);
}
function getAnimalsOlderThan(animal, age) {
  // Utilizo a HOF find para buscar o species.name igual ao parâmetro definido e armazeno
  // na variável filteredAnimal
  // Chamo a variável na HOF every para fazer a comparação com o parametro de idade.
  const filteredAnimal = data.species.find((zooAnimal) => zooAnimal.name === animal);
  return filteredAnimal.residents.every((value) => value.age >= age);
}

function getEmployeeByName(employeeName) {
  // Utilizo a HOF find para comparar o parametro com o employee firstname ou lastname
  // e armazeno na variável f ( filter )
  // Utilizo um operador ternário para retornar o objeto vazio ou a variável f
  const f = data.employees.find((x) => x.firstName === employeeName || x.lastName === employeeName);
  return (employeeName === undefined) ? {} : f;
}

function createEmployee(personalInfo, associatedWith) {
  // Como aprendi a usar o spread operator para fazer o merge de objetos
  // https://www.javascripttutorial.net/object/javascript-merge-objects/
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // Filtro as manager keys com array maior que 1
  // Faço um map para capturar os valores do array de managers
  // utilizo a hof some para comparar se o parâmetro está incluído dentro do array de managers
  const filterCred = data.employees.filter((employee) => employee.managers.length >= 1);
  const managers = filterCred.map((value) => value.managers);
  return managers.some((credential) => credential.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // Declaro o default para os parâmetros que estão faltando
  // Crio o newEmployee e faço um push para dentro do array de employees
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployee);
}

function countAnimals(species) {
  // declaro um objeto vazio
  // percorro a hof forEach preenchendo o animalsObj declarado anteriormente com o
  // o animals.name e o length do array de residents para saber o numero de animais.
  // operador ternario para caso o parametro species seja especificado, filtrando pela
  // variavel animalsObj ou filteredAnimal.

  const animalsObj = {};
  data.species.forEach((animals) => {
    animalsObj[animals.name] = animals.residents.length;
  });
  const filteredAnimal = data.species.find((zooAnimal) => zooAnimal.name === species);
  return (species === undefined) ? animalsObj : filteredAnimal.residents.length;
}

function calculateEntry(entrants = 0) {
  // seu código aqui
  let total = 0;
  const calc = Object.entries(entrants).reduce((acc, [person, qty]) => {
    const filterPrice = Object.entries(data.prices).filter(([ticket, price]) => ticket === person);
    const mapPrice = filterPrice.map(([ticket, price]) => price);
    total = qty * mapPrice;
    return acc + total;
  }, 0);
  return (Object.keys(entrants).length === 0) ? 0 : calc;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // Utilizo a Hof reduce para reagrupar o objeto de acordo com os parâmetros passados
  // Utilizo template literals para concatenar o hours.open e hours.close em uma string,
  // além disso com ele também já consigo fazer o ajuste de am/pm
  // A váriavel 'dt' serve para ser redeclarada e passar o paramêtro de DayName caso ele seja espeficicado
  // o acumulador retorna a key dt(dayName/date) e a string do HourInfo.
  let hourInfo;
  let dt;
  return Object.keys(data.hours).reduce((acc, date) => {
    dt = date;
    if (dayName !== undefined) { dt = dayName; }
    hourInfo = `Open from ${data.hours[dt].open}am until ${data.hours[dt].close - 12}pm`;
    if (dt === 'Monday') { hourInfo = 'CLOSED'; }
    acc[dt] = hourInfo;
    return acc;
  }, {});
}

function getOldestFromFirstSpecies(id) {
  // Utilizo o find para encontrar o objeto com employee.id é igual ao parametro
  // Utilizo o map com desestruturação ( ensinada pelo Matheus na mentoria técnica) para filtrar
  // o id do animais que os employees sao responsáveis e comparo eles em um filter com o animal.id
  // do data.species.Faço um map do array de residents e um sort dos valores para ordená-los
  const filteredId = data.employees.find((employee) => employee.id === id);
  const [rAnimal] = Object.entries(filteredId.responsibleFor).map(([value1, value2]) => value2);
  const residents = data.species.filter((animal) => animal.id === rAnimal);
  const finalObj = residents.map((resident) => resident.residents);
  return Object.values(finalObj[0].sort((a, b) => b.age - a.age)[0]);
}

function increasePrices(percentage) {
  // Utilizo a HOF reduce para trabalhar com os valores do data.prices
  // redeclaro newPrice até que ele esteja de acordo com o especicidado no test
  // Faço um push do valor para dentro do acumulador e retorno o acc.
  // Utilizo um forEach para alterar o valor de cada key do data.prices com
  // os novos valores de preços e faço um assign para alterá-los no data.prices
  const newPriceArray = Object.values(data.prices).reduce((acc, preco) => {
    let newPrice = preco;
    newPrice *= (1 + percentage / 100);
    newPrice += 0.001;
    newPrice = Number(newPrice.toFixed(2));
    acc.push(newPrice);
    return acc;
  }, []);
  const newPriceObj = {};
  Object.keys(data.prices).forEach((key, index) => {
    newPriceObj[key] = newPriceArray[index];
  });
  return Object.assign(data.prices, newPriceObj);
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
  const p = idOrName;
  let f = [data.employees.find((x) => x.firstName === p || x.lastName === p || x.id === p)];
  if (p === undefined) { f = data.employees; }
  return f.reduce((acc, emp) => {
    const idFind = emp.responsibleFor.map((id) => data.species.find((animal) => animal.id === id));
    const idtoName = idFind.map((value) => value.name);
    const fullName = `${emp.firstName} ${emp.lastName}`;
    acc[fullName] = idtoName;
    return acc;
  }, {});
}
console.log(getEmployeeCoverage());

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
