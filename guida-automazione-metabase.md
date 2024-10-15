# Automazione delle Funzionalità di Metabase tramite REST API

Metabase offre una potente REST API che consente di automatizzare molte delle sue funzionalità, riducendo la necessità di interagire manualmente con l'interfaccia utente. Questo è particolarmente utile per creare reportistica in modo automatico e iterativo, risparmiando tempo e migliorando l'efficienza. Di seguito sono elencate le principali funzionalità di Metabase che possono essere sviluppate tramite la REST API.

## 1. Autenticazione

- **Ottenere un Token di Sessione**: Autenticarsi con Metabase per ottenere un token di sessione necessario per effettuare ulteriori richieste API.
  - **Endpoint**: `/api/session`
  - **Metodo**: `POST`
  - **Payload**: `{ "username": "your_username", "password": "your_password" }`

## 2. Gestione delle Collezioni

- **Creare una Collezione**: Organizzare le domande e i dashboard in collezioni.
  - **Endpoint**: `/api/collection`
  - **Metodo**: `POST`
  - **Payload**: `{ "name": "collection_name", "color": "#color_code", "description": "description" }`

- **Elencare le Collezioni**: Ottenere una lista di tutte le collezioni.
  - **Endpoint**: `/api/collection`
  - **Metodo**: `GET`

## 3. Creazione e Gestione delle Domande

- **Creare una Domanda**: Creare nuove domande (query) utilizzando SQL o il linguaggio di query nativo di MongoDB.
  - **Endpoint**: `/api/card`
  - **Metodo**: `POST`
  - **Payload**: `{ "name": "question_name", "dataset_query": { "database": database_id, "native": { "query": "your_query" }, "type": "native" }, "display": "table", "collection_id": collection_id }`

- **Elencare le Domande**: Ottenere una lista di tutte le domande.
  - **Endpoint**: `/api/card`
  - **Metodo**: `GET`

- **Aggiornare una Domanda**: Modificare una domanda esistente.
  - **Endpoint**: `/api/card/:id`
  - **Metodo**: `PUT`
  - **Payload**: `{ "name": "new_question_name", "dataset_query": { "database": database_id, "native": { "query": "your_updated_query" }, "type": "native" }, "display": "table", "collection_id": collection_id }`

## 4. Creazione e Gestione dei Dashboard

- **Creare un Dashboard**: Creare nuovi dashboard per visualizzare le domande.
  - **Endpoint**: `/api/dashboard`
  - **Metodo**: `POST`
  - **Payload**: `{ "name": "dashboard_name", "description": "description", "collection_id": collection_id }`

- **Elencare i Dashboard**: Ottenere una lista di tutti i dashboard.
  - **Endpoint**: `/api/dashboard`
  - **Metodo**: `GET`

- **Aggiornare un Dashboard**: Modificare un dashboard esistente.
  - **Endpoint**: `/api/dashboard/:id`
  - **Metodo**: `PUT`
  - **Payload**: `{ "name": "new_dashboard_name", "description": "new_description", "collection_id": collection_id }`

## 5. Aggiungere Domande ai Dashboard

- **Aggiungere una Domanda a un Dashboard**: Inserire una domanda esistente in un dashboard.
  - **Endpoint**: `/api/dashboard/:dashboard_id/cards`
  - **Metodo**: `POST`
  - **Payload**: `{ "cardId": question_id, "sizeX": 4, "sizeY": 4, "row": 0, "col": 0 }`

## 6. Gestione dei Filtri

- **Aggiungere Filtri a un Dashboard**: Aggiungere filtri interattivi ai dashboard.
  - **Endpoint**: `/api/dashboard/:dashboard_id/parameters`
  - **Metodo**: `POST`
  - **Payload**: `{ "name": "filter_name", "type": "category", "target": ["dimension", ["field-id", field_id]] }`