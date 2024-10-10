Questa repository contiene una serie di esercizi e tutorial per imparare a usare Metabase con PostgreSQL, utilizzando Docker per l'ambiente di sviluppo. L'obiettivo è rendere il processo il più semplice possibile per chi non ha familiarità con Docker.
# Metabase e PostgreSQL Tutorial Hands-On

Questa repository contiene una serie di esercizi e tutorial per imparare a usare Metabase con PostgreSQL, utilizzando Docker per l'ambiente di sviluppo. L'obiettivo è rendere il processo il più semplice possibile per chi non ha familiarità con Docker.

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

```sh
docker-compose up -d
```

4. Accedi a Metabase su http://localhost:3000 e segui le istruzioni per configurare la connessione a PostgreSQL. Utilizza le seguenti credenziali di connessione:

- Host: ```postgres```
- Porta: ```5432```
- Database: ```metabase```
- Username: ```metabase```
- Password: ```metabase```

5. Tutorial
 Prossimametne svilupperó dei tutorial che saranno disponibili nella cartella tutorials
