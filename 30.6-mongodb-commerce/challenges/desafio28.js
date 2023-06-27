// www.mongodb.com/docs/manual/reference/operator/query/size/

db.produtos
.find(
  { ingredientes: { $size: 4 } },
).count();
