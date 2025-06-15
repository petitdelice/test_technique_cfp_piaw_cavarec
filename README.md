
# Test technique CFP Piaw Cavarec

  

```bash

git clone git@github.com:petitdelice/test_technique_cfp_piaw_cavarec.git

```

  

## Instruction pour lancer le backend  / frontend

```bash

cd test_technique_cfp_piaw_cavarec/ && docker-compose down --volumes && docker-compose build --no-cache && docker-compose up

```



## Stack technique utilisée

  

| Couche | Outils utilises |
|----------|---------------|
| Frontend | React + TypeScript + Tailwind |
| Backend | Express.js + TypeScript |
| API | REST |
| Base de donnees | Aucune - stockage en memoire (liste) |
| Conteneurisation | Docker + Docker Compose |
| Configuration | `.env` + `Dockerfile` + `docker-compose.yml` |
| Documentation | SwaggerUI |
| Appels API | Fetch API isolé dans `api.ts` |
| Style | Tailwind CSS |

  

## Frontend

  

J'ai décidé d'utiliser la librairie `shadcn` pour avoir un résultat propre rapidement.
