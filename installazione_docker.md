# Installazione di Docker e Docker Compose

Questa guida ti aiuterà a installare Docker e Docker Compose sul tuo sistema.

## Installazione di Docker

### Windows

1. **Scarica Docker Desktop per Windows**:
   - Vai al sito ufficiale di Docker e scarica Docker Desktop per Windows: [Docker Desktop per Windows](https://www.docker.com/products/docker-desktop).

2. **Installa Docker Desktop**:
   - Esegui il file di installazione scaricato e segui le istruzioni sullo schermo.

3. **Avvia Docker Desktop**:
   - Dopo l'installazione, avvia Docker Desktop. Potrebbe essere necessario riavviare il computer.

4. **Verifica l'installazione**:
   - Apri il terminale (PowerShell o Command Prompt) e digita: 

```sh
     docker --version
```

- Dovresti vedere la versione di Docker installata.

### macOS

1. **Scarica Docker Desktop per macOS**:
   - Vai al sito ufficiale di Docker e scarica Docker Desktop per macOS: [Docker Desktop per macOS](https://www.docker.com/products/docker-desktop).

2. **Installa Docker Desktop**:
   - Apri il file `.dmg` scaricato e trascina l'icona di Docker nella cartella Applicazioni.

3. **Avvia Docker Desktop**:
   - Dopo l'installazione, avvia Docker Desktop. Potrebbe essere necessario concedere alcune autorizzazioni.

4. **Verifica l'installazione**:
   - Apri il terminale e digita:

```sh
     docker --version
```

- Dovresti vedere la versione di Docker installata.

### Linux

1. **Aggiorna il database dei pacchetti**:
   - Apri il terminale e digita:
   
```sh
     sudo apt-get update
```

1. **Installa i pacchetti necessari**:
   - Digita:
      
```sh
     sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
```

1. **Aggiungi la chiave GPG di Docker**:
   - Digita:

```sh
     curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

2. **Aggiungi il repository di Docker**:
   - Digita:

```sh
     sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```

3. **Installa Docker**:
   - Digita:

     ```sh
     sudo apt-get update
     sudo apt-get install docker-ce
     ```

4. **Verifica l'installazione**:
   - Digita:
     ```sh
     docker --version
     ```
   - Dovresti vedere la versione di Docker installata.





## Installazione di Docker Compose

### Windows e macOS

Docker Compose è incluso in Docker Desktop, quindi non è necessaria un'installazione separata. Puoi verificare l'installazione aprendo il terminale e digitando:

```sh
docker-compose --version
```

### Linux

1. Scarica l'ultima versione di Docker Compose:
```sh
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

2. Rendi eseguibile Docker Compose:

```sh
sudo chmod +x /usr/local/bin/docker-compose
```

3. Verifica l'installazione:

Digita:

```sh
docker-compose --version
```

Dovresti vedere la versione di Docker Compose installata.
