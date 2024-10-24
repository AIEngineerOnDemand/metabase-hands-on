### Tutorial MongoDB: Imparare la Sintassi di Base e Analizzare Dati di Welfare

Benvenuti in questo tutorial su MongoDB! In questo tutorial, raggiungeremo due obiettivi principali:
1. **Obiettivo 1**: Imparare la sintassi di base di MongoDB.
2. **Obiettivo 2**: Comunicare qualcosa di interessante sui dati di welfare.

### Indice
1. [Introduzione a MongoDB](#introduzione-a-mongodb)
2. [Connessione a MongoDB](#connessione-a-mongodb)
3. [Creazione e Inserimento di Dati](#creazione-e-inserimento-di-dati)
4. [Query di Base](#query-di-base)
5. [Operazioni di Aggregazione](#operazioni-di-aggregazione)
6. [Analisi dei Dati di Welfare](#analisi-dei-dati-di-welfare)
7. Conclusione

### Introduzione a MongoDB

MongoDB è un database NoSQL orientato ai documenti che utilizza documenti simili a JSON con schemi dinamici. Questo lo rende molto flessibile e adatto a una vasta gamma di applicazioni.

### Connessione a MongoDB

Per connetterti a MongoDB, puoi utilizzare la shell di MongoDB. Se stai utilizzando Docker, puoi eseguire un container temporaneo per connetterti al tuo database MongoDB.

```sh
docker run -it --rm --network metabase-network mongo:4.4 mongo -u metabase -p metabase --authenticationDatabase metabase --host mongodb
```

### Creazione e Inserimento di Dati

Nel file `init-mongo.js`, abbiamo definito uno script per creare un utente, collezioni e inserire dati. Vediamo come fare questo passo per passo.

#### Creazione di un Utente

```javascript
db = db.getSiblingDB('metabase');
db.createUser({
 

 user

: "metabase",
  pwd: "metabase",
  roles: [
    {
      role: "readWrite",
      db: "metabase"
    }
  ]
});
```

#### Creazione di Collezioni e Inserimento di Dati

##### Collezione [`AnagraficheTerritorialiComuni`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fgiopl%2FOneDrive%2FDesktop%2FFreeLancingDataScientist%2Fmetabase-hands-on%2Finit-mongo.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A39%2C%22character%22%3A3%7D%7D%5D%2C%22dbcf11c0-ca26-4efb-95f8-5b7487e62214%22%5D "Go to definition")

```javascript
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
```

##### Collezione [`PianiDiZona`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fgiopl%2FOneDrive%2FDesktop%2FFreeLancingDataScientist%2Fmetabase-hands-on%2Finit-mongo.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A55%2C%22character%22%3A3%7D%7D%5D%2C%22dbcf11c0-ca26-4efb-95f8-5b7487e62214%22%5D "Go to definition")

```javascript
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
```

##### Collezione [`BeneficiariWelfare`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fgiopl%2FOneDrive%2FDesktop%2FFreeLancingDataScientist%2Fmetabase-hands-on%2Finit-mongo.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A71%2C%22character%22%3A3%7D%7D%5D%2C%22dbcf11c0-ca26-4efb-95f8-5b7487e62214%22%5D "Go to definition")

```javascript
db.createCollection('BeneficiariWelfare');
db.BeneficiariWelfare.insertMany([
  { Nome: 'Mario Rossi', Età: 45, Comune: 'Bari', Programma: 'Reddito di Dignità', StatoOccupazionale: 'Disoccupato', TitoloDiStudio: 'Diploma', Disabilità: 'Nessuna' },
  { Nome: 'Giulia Bianchi', Età: 30, Comune: 'Brindisi', Programma: 'Reddito di Dignità', StatoOccupazionale: 'Occupato', TitoloDiStudio: 'Laurea', Disabilità: 'Nessuna' },
  { Nome: 'Luca Verdi', Età: 50, Comune: 'Foggia', Programma: 'Reddito di Dignità', StatoOccupazionale: 'Disoccupato', TitoloDiStudio: 'Licenza Media', Disabilità: 'Fisica' },
  { Nome: 'Anna Neri', Età: 35, Comune: 'Taranto', Programma: 'Reddito di Dignità', StatoOccupazionale: 'Occupato', TitoloDiStudio: 'Laurea', Disabilità: 'Nessuna' },
  { Nome: 'Paolo Gialli', Età: 40, Comune: 'Lecce', Programma: 'Reddito di Dignità', StatoOccupazionale: 'Disoccupato', TitoloDiStudio: 'Diploma', Disabilità: 'Nessuna' },
  { Nome: 'Sara Blu', Età: 28, Comune: 'Barletta', Programma: 'Reddito di Dignità', StatoOccupazionale: 'Occupato', TitoloDiStudio: 'Laurea', Disabilità: 'Nessuna' },
  { Nome: 'Marco Neri', Età: 55, Comune: 'Andria', Programma: 'Reddito di Dignità', StatoOccupazionale: 'Disoccupato', TitoloDiStudio: 'Licenza Media', Disabilità: 'Fisica' },
  { Nome: 'Elena Rossi', Età: 32, Comune: 'Trani', Programma: 'Reddito di Dignità', StatoOccupazionale: 'Occupato', TitoloDiStudio: 'Laurea', Disabilità: 'Nessuna' },
  { Nome: 'Giorgio Bianchi', Età: 60, Comune: 'Otranto', Programma: 'Reddito di Dignità', StatoOccupazionale: 'Disoccupato', TitoloDiStudio: 'Diploma', Disabilità: 'Nessuna' },
  { Nome: 'Francesca Verdi', Età: 42, Comune: 'Manfredonia', Programma: 'Reddito di Dignità', StatoOccupazionale: 'Occupato', TitoloDiStudio: 'Laurea', Disabilità: 'Nessuna' }
]);
```

### Query di Base

#### Trovare Tutti i Documenti in una Collezione

```javascript
db.AnagraficheTerritorialiComuni.find().pretty();
```

#### Trovare Documenti con un Criterio Specifico

```javascript
db.BeneficiariWelfare.find({ Comune: 'Bari' }).pretty();
```

#### Contare il Numero di Documenti in una Collezione

```javascript
db.BeneficiariWelfare.countDocuments();
```

### Operazioni di Aggregazione

Le operazioni di aggregazione in MongoDB permettono di eseguire operazioni complesse sui dati, simili a quelle che si possono fare con SQL. La struttura di una query di aggregazione è la seguente:

```json
[
  { operazione1 },
  { operazione2 },
  ...,
  { operazionen }
]
```

#### $group

Il `$group` è analogo al `GROUP BY` in SQL e permette di ottenere risultati di operazioni statistiche sui dati.

Esempio di utilizzo di `$group`:

```javascript
db.PianiDiZona.aggregate([
  {
    $group: {
      _id: { Azione: "$Azione", PianoDiZona: "$PianoDiZona" },
      avgImportoProgrammato: { $avg: "$ImportoProgrammato" }
    }
  }
]);
```

#### $match

Il `$match` è analogo al `WHERE` in SQL e permette di filtrare i dati in base a criteri specifici.

Esempio di utilizzo di `$match`:

```javascript
db.PianiDiZona.aggregate([
  {
    $match: {
      $and: [
        { Scheda: { $in: ["A", "B"] } },
        { ImportoProgrammato: { $gte: 0, $lte: 12000 } }
      ]
    }
  }
]);
```

#### $project

Il `$project` è analogo al `SELECT` in SQL e permette di selezionare le colonne da mostrare nell'output della query.

Esempio di utilizzo di `$project`:

```javascript
db.PianiDiZona.aggregate([
  {
    $project: {
      _id: false,
      Azione: true,
      PianoDiZona: true,
      avgImportoProgrammato: true
    }
  }
]);
```

### Analisi dei Dati di Welfare

#### Numero di Beneficiari per Comune

```javascript
db.BeneficiariWelfare.aggregate([
  { $group: { _id: "$Comune", count: { $sum: 1 } } }
]);
```

#### Numero di Beneficiari per Programma

```javascript
db.BeneficiariWelfare.aggregate([
  { $group: { _id: "$Programma", count: { $sum: 1 } } }
]);
```

#### Distribuzione dei Beneficiari per Stato Occupazionale

```javascript
db.BeneficiariWelfare.aggregate([
  { $group: { _id: "$StatoOccupazionale", count: { $sum: 1 } } }
]);
```

### Conclusione

In questo tutorial, abbiamo imparato la sintassi di base di MongoDB e abbiamo eseguito alcune analisi sui dati di welfare. Abbiamo creato collezioni, inserito dati e eseguito query per estrarre informazioni significative. MongoDB è uno strumento potente per la gestione e l'analisi dei dati, e speriamo che questo tutorial ti abbia fornito una buona introduzione alle sue capacità.