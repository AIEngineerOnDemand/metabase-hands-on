# Metabase e MongoDB Tutorial Hands-On

Questa repository contiene una serie di esercizi e tutorial per imparare a usare Metabase con MongoDB, utilizzando Docker per l'ambiente di sviluppo. Allego anche delle spiegazioni dettagliate per rendere il processo il più semplice possibile per chi non ha familiarità con Github e Docker.

## Prerequisiti

- Docker e Docker Compose installati. Se non li hai già installati, segui le istruzioni in [installazione_docker.md](installazione_docker.md).

## Avvio rapido

1. Installazione di GitHub

- Windows: Scarica e installa GitHub Desktop.
- macOS: Scarica e installa GitHub Desktop.
- Linux: Installa Git utilizzando il gestore di pacchetti della tua distribuzione (ad esempio, sudo apt-get install git per Ubuntu).

2. Clona questo repository

```sh
git clone https://github.com/tuo-username/metabase-hands-on.git
cd metabase-hands-on
```

3. Avvia i servizi Docker

Prima fai pulizia dei container

```sh
docker-compose down --remove-orphans 
docker volume rm metabase-hands-on_mongo-data
```

Dopo avvia i servizi

```sh
docker-compose up -d
```

**Successivamente per evitare il problema della connessione a MongoDB é necessario per il momento eseguire manualemnte la connessione di tutti i servizi al `metabase-network`** 

```sh
docker network connect metabase-network mongodb
docker network connect metabase-network metabase
docker network connect metabase-network postgres
```

4. Accedi a Metabase su http://localhost:3000

5. Configura la connessione a MongoDB in Metabase

6. Una volta che Metabase è in esecuzione, puoi configurare MongoDB come fonte di dati:

Vai su 
- Admin Settings > Databases.
- Aggiungi un nuovo database e scegli MongoDB.
- Inserisci i dettagli di connessione:
```
Host: mongodb
Porta: 27017
Database Name: Mongo
Username: metabase
Password: metabase
Connection String: mongodb://metabase:metabase@mongodb:27017/metabase?authSource=metabase
```



### Spiegazione delle Modifiche

- **Passaggio 4**: Aggiornato per riflettere l'uso di PostgreSQL come database di backend per Metabase.
- **Passaggio 5**: Aggiunte istruzioni dettagliate per configurare MongoDB come fonte di dati in Metabase.

Seguendo queste istruzioni, dovresti essere in grado di configurare correttamente Metabase per utilizzare PostgreSQL come database di backend e MongoDB come fonte di dati.

### Automazione con la REST API di Metabase

Se sei uno sviluppatore e preferisci evitare di fare troppi clic nell'interfaccia utente, puoi utilizzare la REST API di Metabase insieme a Python per automatizzare la creazione di funzionalità. Ad esempio, puoi creare domande e salvarle in collezioni specifiche utilizzando uno script Python.

Abbiamo incluso un esempio di script Python che mostra come autenticarsi, creare una collezione e aggiungere domande utilizzando i dati di MongoDB. Puoi trovare lo script qui: [create_metabase_questions.py](create_metabase_questions.py)

Utilizzando la REST API di Metabase, è possibile automatizzare la creazione e la gestione di reportistica di qualsiasi tipo e stile. Questo approccio consente di risparmiare tempo e di iterare rapidamente con i clienti, senza dover fare clic manualmente su ogni singolo tasto dell'interfaccia utente, migliorando l'efficienza e la produttività del tuo team. Puoi trovare una lista generica delle funzionalitá qui :  [guida-automazione-metabase.md](guida-automazione-metabase.md) 