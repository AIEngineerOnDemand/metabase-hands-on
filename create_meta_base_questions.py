import requests
import json

# Configurazione
metabase_url = "http://localhost:3000"
username = "your_metabase_username"
password = "your_metabase_password"
collection_name = "esempi-generati-con-script"

# Funzione per autenticarsi e ottenere un token di sessione
def get_session_token():
    url = f"{metabase_url}/api/session"
    payload = {
        "username": username,
        "password": password
    }
    response = requests.post(url, json=payload)
    response.raise_for_status()
    return response.json()["id"]

# Funzione per creare una nuova collezione
def create_collection(session_token, collection_name):
    url = f"{metabase_url}/api/collection"
    headers = {
        "Content-Type": "application/json",
        "X-Metabase-Session": session_token
    }
    payload = {
        "name": collection_name,
        "color": "#509EE3",
        "description": "Collezione di esempi generati automaticamente"
    }
    response = requests.post(url, headers=headers, json=payload)
    response.raise_for_status()
    return response.json()["id"]

# Funzione per creare una domanda
def create_question(session_token, collection_id, question_name, query):
    url = f"{metabase_url}/api/card"
    headers = {
        "Content-Type": "application/json",
        "X-Metabase-Session": session_token
    }
    payload = {
        "name": question_name,
        "dataset_query": {
            "database": 2,  # ID del database MongoDB in Metabase
            "native": {
                "query": query
            },
            "type": "native"
        },
        "display": "table",
        "collection_id": collection_id
    }
    response = requests.post(url, headers=headers, json=payload)
    response.raise_for_status()
    return response.json()

# Script principale
def main():
    session_token = get_session_token()
    collection_id = create_collection(session_token, collection_name)
    
    # Esempio di query MongoDB
    query = """
    {
        "find": "orders",
        "filter": {
            "total": { "$gt": 100 }
        },
        "sort": {
            "order_date": -1
        },
        "limit": 50
    }
    """
    
    question_name = "Ordini con totale superiore a 100"
    create_question(session_token, collection_id, question_name, query)
    print(f"Domanda '{question_name}' creata e salvata nella collezione '{collection_name}'.")

if __name__ == "__main__":
    main()