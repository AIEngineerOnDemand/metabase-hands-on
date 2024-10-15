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
db.createCollection('AnagraficheTerritorialiComuni');
db.AnagraficheTerritorialiComuni.insertMany([
  { Comune: 'Bari', Provincia: 'Bari', Ambito: 'Ambito 1' },
  { Comune: 'Brindisi', Provincia: 'Brindisi', Ambito: 'Ambito 6' },
  { Comune: 'Foggia', Provincia: 'Foggia', Ambito: 'Ambito 2' },
  { Comune: 'Taranto', Provincia: 'Taranto', Ambito: 'Ambito 5' },
  { Comune: 'Lecce', Provincia: 'Lecce', Ambito: 'Ambito 13' },
  { Comune: 'Barletta', Provincia: 'BAT', Ambito: 'Ambito 4' },
  { Comune: 'Andria', Provincia: 'BAT', Ambito: 'Ambito 4' },
  { Comune: 'Trani', Provincia: 'BAT', Ambito: 'Ambito 4' },
  { Comune: 'Otranto', Provincia: 'Lecce', Ambito: 'Ambito 3' },
  { Comune: 'Manfredonia', Provincia: 'Foggia', Ambito: 'Ambito 9' }
]);

// Crea una collezione di esempio e inserisci alcuni documenti
db.createCollection('PianiDiZona');
db.PianiDiZona.insertMany([
  { Piano Di Zona: 'Ambito 4', Comune: 'Barletta', Scheda: 'A', Azione: 'A.7', Fonte Di Finanziamento: 'Fonte C', Importo Programmato: '37829', Importo Impegnato: '0', Importo Da Impegnare: '37829', Importo Liquidato: '0'}
  { Piano Di Zona: 'Ambito 7', Comune: 'Martina Franca', Scheda: 'B', Azione: 'A.1', Fonte Di Finanziamento: 'Fonte A', Importo Programmato: '34556', Importo Impegnato: '298', Importo Da Impegnare: '34228', Importo Liquidato: '0'}
  { Piano Di Zona: 'Ambito 8', Comune: 'Corato', Scheda: 'A', Azione: 'E.3', Fonte Di Finanziamento: 'Fonte G', Importo Programmato: '40000', Importo Impegnato: '1500', Importo Da Impegnare: '38500', Importo Liquidato: '0'}
  { Piano Di Zona: 'Ambito 11', Comune: 'San Giovanni Rotondo', Scheda: 'C', Azione: 'D.4', Fonte Di Finanziamento: 'Fonte D', Importo Programmato: '26000', Importo Impegnato: '16000', Importo Da Impegnare: '10000', Importo Liquidato: '8000'}
  { Piano Di Zona: 'Ambito 3', Comune: 'Otranto', Scheda: 'B', Azione: 'D.5', Fonte Di Finanziamento: 'Fonte G', Importo Programmato: '72000', Importo Impegnato: '0', Importo Da Impegnare: '72000', Importo Liquidato: '0'}
  { Piano Di Zona: 'Ambito 12', Comune: 'Toritto', Scheda: 'A', Azione: 'F.5', Fonte Di Finanziamento: 'Fonte H', Importo Programmato: '142900', Importo Impegnato: '142900', Importo Da Impegnare: '0', Importo Liquidato: '70000'}
  { Piano Di Zona: 'Ambito 7', Comune: 'Canosa di Puglia', Scheda: 'C', Azione: 'E.4', Fonte Di Finanziamento: 'Fonte T', Importo Programmato: '37800', Importo Impegnato: '7800', Importo Da Impegnare: '30000', Importo Liquidato: '0'}
  { Piano Di Zona: 'Ambito 11', Comune: 'Capurso', Scheda: 'A', Azione: 'B.5', Fonte Di Finanziamento: 'Fonte E', Importo Programmato: '73000', Importo Impegnato: '20000', Importo Da Impegnare: '53000', Importo Liquidato: '10000'}
  { Piano Di Zona: 'Ambito 9', Comune: 'Conversano', Scheda: 'A', Azione: 'L.5', Fonte Di Finanziamento: 'Fonte G', Importo Programmato: '46700', Importo Impegnato: '25000', Importo Da Impegnare: '21700', Importo Liquidato: '15000'}
  { Piano Di Zona: 'Ambito 9', Comune: 'Valenzano', Scheda: 'B', Azione: 'D.7', Fonte Di Finanziamento: 'Fonte E', Importo Programmato: '38093', Importo Impegnato: '15000', Importo Da Impegnare: '23093', Importo Liquidato: '0'}
]);

