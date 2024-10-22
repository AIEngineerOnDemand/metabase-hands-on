// Imposta la versione di compatibilità
db = db.getSiblingDB('admin');
print("Setting feature compatibility version to 4.4");
db.system.version.updateOne(
  { _id: "featureCompatibilityVersion" },
  { $set: { version: "4.4" } }
);

// Crea l'utente metabase
db = db.getSiblingDB('metabase');
print("Creating user 'metabase'");
try {
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
  print("User 'metabase' created successfully");
} catch (e) {
  print("Error creating user 'metabase': " + e);
}

// Verifica se l'utente è stato creato
var user = db.getUser("metabase");
if (user) {
  print("User 'metabase' exists: " + JSON.stringify(user));
} else {
  print("User 'metabase' does not exist");
  throw new Error("User 'metabase' was not created successfully");
}

// Crea una collezione di esempio e inserisci alcuni documenti
print("Creating collection 'AnagraficheTerritorialiComuni' and inserting documents");
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
print("Creating collection 'PianiDiZona' and inserting documents");
db.createCollection('PianiDiZona');
db.PianiDiZona.insertMany([
  { PianoDiZona: 'Ambito 4', Comune: 'Barletta', Scheda: 'A', Azione: 'A.7', FonteDiFinanziamento: 'Fonte C', ImportoProgrammato: '37829', ImportoImpegnato: '0', ImportoDaImpegnare: '37829', ImportoLiquidato: '0'},
  { PianoDiZona: 'Ambito 7', Comune: 'Martina Franca', Scheda: 'B', Azione: 'A.1', FonteDiFinanziamento: 'Fonte A', ImportoProgrammato: '34556', ImportoImpegnato: '298', ImportoDaImpegnare: '34228', ImportoLiquidato: '0'},
  { PianoDiZona: 'Ambito 8', Comune: 'Corato', Scheda: 'A', Azione: 'E.3', FonteDiFinanziamento: 'Fonte G', ImportoProgrammato: '40000', ImportoImpegnato: '1500', ImportoDaImpegnare: '38500', ImportoLiquidato: '0'},
  { PianoDiZona: 'Ambito 11', Comune: 'San Giovanni Rotondo', Scheda: 'C', Azione: 'D.4', FonteDiFinanziamento: 'Fonte D', ImportoProgrammato: '26000', ImportoImpegnato: '16000', ImportoDaImpegnare: '10000', ImportoLiquidato: '8000'},
  { PianoDiZona: 'Ambito 3', Comune: 'Otranto', Scheda: 'B', Azione: 'D.5', FonteDiFinanziamento: 'Fonte G', ImportoProgrammato: '72000', ImportoImpegnato: '0', ImportoDaImpegnare: '72000', ImportoLiquidato: '0'},
  { PianoDiZona: 'Ambito 12', Comune: 'Toritto', Scheda: 'A', Azione: 'F.5', FonteDiFinanziamento: 'Fonte H', ImportoProgrammato: '142900', ImportoImpegnato: '142900', ImportoDaImpegnare: '0', ImportoLiquidato: '70000'},
  { PianoDiZona: 'Ambito 7', Comune: 'Canosa di Puglia', Scheda: 'C', Azione: 'E.4', FonteDiFinanziamento: 'Fonte T', ImportoProgrammato: '37800', ImportoImpegnato: '7800', ImportoDaImpegnare: '30000', ImportoLiquidato: '0'},
  { PianoDiZona: 'Ambito 11', Comune: 'Capurso', Scheda: 'A', Azione: 'B.5', FonteDiFinanziamento: 'Fonte E', ImportoProgrammato: '73000', ImportoImpegnato: '20000', ImportoDaImpegnare: '53000', ImportoLiquidato: '10000'},
  { PianoDiZona: 'Ambito 9', Comune: 'Conversano', Scheda: 'A', Azione: 'L.5', FonteDiFinanziamento: 'Fonte G', ImportoProgrammato: '46700', ImportoImpegnato: '25000', ImportoDaImpegnare: '21700', ImportoLiquidato: '15000'},
  { PianoDiZona: 'Ambito 9', Comune: 'Valenzano', Scheda: 'B', Azione: 'D.7', FonteDiFinanziamento: 'Fonte E', ImportoProgrammato: '38093', ImportoImpegnato: '15000', ImportoDaImpegnare: '23093', ImportoLiquidato: '0'}
]);