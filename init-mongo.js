db.createCollection('esempio');
db.esempio.insertMany([
  { nome: 'Esempio 1', valore: 100 },
  { nome: 'Esempio 2', valore: 200 },
  { nome: 'Esempio 3', valore: 300 }
]);