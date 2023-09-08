db.produtos.updateMany(
  { },
  { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } },
);

db.produtos.updateMany(
  { nome: { $eq: "Big Mac" } },
  { $push: {
    vendasPorDia: { 
    $each: [60],
    $position: 3,
    $slice: 7,
     } } },
);

db.produtos.updateMany(
  { tags: { $eq: "bovino" } },
  { $push: {
    vendasPorDia: { 
    $each: [120],
    $position: 6,
    $slice: 7,
     } } },
);

db.produtos
.find({ }, { _id: 0, nome: 1, vendasPorDia: 1 });
