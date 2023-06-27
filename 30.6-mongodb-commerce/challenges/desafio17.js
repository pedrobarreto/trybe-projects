db.produtos.updateMany(
  { },
  {
    $addToSet: { 
    resumoProdutos: {
      $each: [{ franquia: "McDonalds", totalProdutos: db.produtos.count() }],
     }, 
  } },
);

 // https://www.youtube.com/watch?v=V4UoZvb-YW8
 // https://stackoverflow.com/questions/54440636/the-field-name-must-be-an-accumulator-object
 // https://www.mongodb.com/docs/manual/reference/method/db.collection.aggregate/
 // https://www.mongodb.com/docs/manual/reference/operator/aggregation/limit/
 // https://stackoverflow.com/questions/15776453/how-to-hide-id-from-aggregation

db.produtos.aggregate(
{ $unwind: "$resumoProdutos" },
{ $limit: 1 },
{ $group: {
_id: "$_id",
franquia: { $first: "$resumoProdutos.franquia" },
totalProdutos: { $first: "$resumoProdutos.totalProdutos" },
} },
{ $unset: ["_id"] },

);
