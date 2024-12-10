# 135: Numero di posti/ore per ambito e servizio

```
[
  {
    "$group": {
      "_id": {
        "ambito_sede": "$ambito_sede",
        "servizio": "$servizio"
      },
      "total_posti_ore": {
        "$sum": {
          "$add": [
            "$3-24mesi", "$lattanti3-12mesi", "$3-36mesi", "$3-23mesi", "$semidivezzi13-23mesi",
            "$24-36mesi", "$divezzi24-36mesi", "$0-18anni", "$3-5anni", "$3-25anni", "$3-6anni",
            "$4-18anni", "$6-12anni", "$6-18anni", "$6-24anni", "$6-17anni", "$7-14anni",
            "$12-25anni", "$13-18anni", "$16-25anni", "$18-64anni", "$maggiori_di_64anni", "$tutti"
          ]
        }
      }
    }
  },
  {
    "$sort": {
      "_id.ambito_sede": 1,
      "_id.servizio": 1
    }
  },
  {
    "$project": {
      "_id": false,
      "ambito_sede": "$_id.ambito_sede",
      "servizio": "$_id.servizio",
      "total_posti_ore": true
    }
  }
]
```

# 136: Numero di posti/ore per fascia di età, ambito e servizio

```
[
  {
    "$group": {
      "_id": {
        "ambito_sede": "$ambito_sede",
        "servizio": "$servizio"
      },
      "total_posti_ore": {
        "$sum": {
          "$add": [
            "$3-24mesi", "$lattanti3-12mesi", "$3-36mesi", "$3-23mesi", "$semidivezzi13-23mesi",
            "$24-36mesi", "$divezzi24-36mesi", "$0-18anni", "$3-5anni", "$3-25anni", "$3-6anni",
            "$4-18anni", "$6-12anni", "$6-18anni", "$6-24anni", "$6-17anni", "$7-14anni",
            "$12-25anni", "$13-18anni", "$16-25anni", "$18-64anni", "$maggiori_di_64anni", "$tutti"
          ]
        }
      }
    }
  },
  {
    "$sort": {
      "_id.ambito_sede": 1,
      "_id.servizio": 1
    }
  },
  {
    "$project": {
      "_id": false,
      "ambito_sede": "$_id.ambito_sede",
      "servizio": "$_id.servizio",
      "total_posti_ore": true
    }
  }
]
```
# 137: Tempo medio di istruttoria comunale/di ambito su tutto il territorio

```
[
  {
    "$addFields": {
      "diff_days": {
        "$dateDiff": {
          "startDate": "$data_iscrizione",
          "endDate": "$data_autorizzazione",
          "unit": "day"
        }
      }
    }
  },
  {
    "$group": {
      "_id": "$ambito_sede",
      "avg_diff_days": {
        "$avg": "$diff_days"
      }
    }
  },
  {
    "$sort": {
      "_id": 1
    }
  },
  {
    "$project": {
      "_id": false,
      "ambito_sede": "$_id",
      "avg_diff_days": true
    }
  }
]
```
# 138: Comuni/ambiti con tempo medio di istruttoria sopra la media regionale


```
[
  {
    "$addFields": {
      "diff_days": {
        "$divide": [
          {
            "$subtract": [
              "$data_autorizzazione",
              "$data_iscrizione"
            ]
          },
          86400000
        ]
      }
    }
  },
  {
    "$group": {
      "_id": "$ambito_sede",
      "avg_diff_days": {
        "$avg": "$diff_days"
      }
    }
  },
  {
    "$group": {
      "_id": null,
      "regional_avg_diff_days": {
        "$avg": "$avg_diff_days"
      },
      "ambiti": {
        "$push": {
          "ambito_sede": "$_id",
          "avg_diff_days": "$avg_diff_days"
        }
      }
    }
  },
  {
    "$unwind": "$ambiti"
  },
  {
    "$addFields": {
      "ambito_sede": "$ambiti.ambito_sede",
      "avg_diff_days": "$ambiti.avg_diff_days",
      "regional_avg_diff_days": "$regional_avg_diff_days"
    }
  },
  {
    "$project": {
      "_id": false,
      "ambito_sede": true,
      "avg_diff_days": true,
      "regional_avg_diff_days": true
    }
  },
  {
    "$sort": {
      "ambito_sede": 1
    }
  }
]
```
## 139: Tempo medio di istruttoria regionale per provincia

```
[
  {
    "$addFields": {
      "diff_days": {
        "$dateDiff": {
          "startDate": "$data_iscrizione",
          "endDate": "$data_autorizzazione",
          "unit": "day"
        }
      }
    }
  },
  {
    "$group": {
      "_id": "$comune_sede",
      "avg_diff_days": {
        "$avg": "$diff_days"
      }
    }
  },
  {
    "$sort": {
      "_id": 1
    }
  },
  {
    "$project": {
      "_id": false,
      "comune_sede": "$_id",
      "avg_diff_days": true
    }
  }
]
```


# 140: Numero di iscrizioni per natura del titolare
```
[
  {
    "$group": {
      "_id": {
        "natura_titolare": "$natura_titolare"
      },
      "count": {
        "$addToSet": "$id_iscrizione"
      }
    }
  },
  {
    "$addFields": {
      "count": {
        "$size": "$count"
      }
    }
  },
  {
    "$sort": {
      "_id": 1
    }
  },
  {
    "$project": {
      "_id": false,
      "natura_titolare": "$_id.natura_titolare",
      "count": true
    }
  }
]

```

# 141: Numero di iscrizioni per le quali gestore e titolare non coincidono

```
[
  {
    "$lookup": {
      "from": "Registri",
      "let": {
        "let_codice_fiscale_titolare___1": "$codice_fiscale_titolare"
      },
      "pipeline": [
        {
          "$match": {
            "$expr": {
              "$ne": [
                "$$let_codice_fiscale_titolare___1",
                "$codice_fiscale_gestore"
              ]
            }
          }
        }
      ],
      "as": "join_alias_Registri"
    }
  },
  {
    "$unwind": {
      "path": "$join_alias_Registri",
      "preserveNullAndEmptyArrays": true
    }
  },
  {
    "$group": {
      "_id": null,
      "count": {
        "$addToSet": "$id_iscrizione"
      }
    }
  },
  {
    "$addFields": {
      "count": {
        "$size": "$count"
      }
    }
  },
  {
    "$sort": {
      "_id": 1
    }
  },
  {
    "$project": {
      "_id": false,
      "count": true
    }
  }
]
```