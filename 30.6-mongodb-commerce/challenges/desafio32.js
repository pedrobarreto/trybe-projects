// https://www.tutorialspoint.com/mongodb-query-condition-to-compare-two-fields
db.produtos
.find(
  { $where: "this.vendidos % 5 === 0" },
  { _id: 0, nome: 1, vendidos: 1 },
);