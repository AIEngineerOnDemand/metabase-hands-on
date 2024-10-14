// Imposta la versione di compatibilità
db = db.getSiblingDB('admin');
db.system.version.updateOne(
  { _id: "featureCompatibilityVersion" },
  { $set: { version: "4.4" } }
);

// Crea l'utente metabase
db = db.getSiblingDB('metabase');
db.createUser({
  user: "metabase",
  pwd: "metabase",
  roles: [
    {
      role: "readWrite",
      db: "metabase"
    }
  ]
});

// Crea una collezione di esempio e inserisci alcuni documenti
db.createCollection('esempio');
db.esempio.insertMany([
  { nome: 'Esempio 1', valore: 100 },
  { nome: 'Esempio 2', valore: 200 },
  { nome: 'Esempio 3', valore: 300 }
]);