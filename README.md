# Unoffical kisskh API! 👋

## NOTE:

This is an api for id's provided at https://kisskh.co/ and NOT Tmdb or Imdb

you must use the ID from the kisskh url like this :

so 
```
https://kisskh.co/Drama/Love-Next-Door?id=9301
```
would be 
```
http://localhost:port/api/9301
```

---

## How To Install
### To install locally or on any vps/dedicated server do the following :
```
git clone https://github.com/Inside4ndroid/Unofficial-Kisskh-API.git
```
```
cd Unofficial-Kisskh-API
```
```
npm install
```

Rename .env.example to .env and edit the values :
```
PORT=3000
```
---

## Usage

### Endpoint GET /api/:mediaID

This will retrieve the media info in json format.
mediaID is the id from the kisskh url eg: https://kisskh.co/Drama/The-Judge-from-Hell?id=9441

### Endpoint GET /api/source/:episodeID

This will retrieve the media source links and subtitles in json format.
episodeID is the id from the previous get request eg episode 2 would be 163633

```
"episodes": [
    {
      "id": 163633,
      "number": 2,
      "sub": 5
    },
    {
      "id": 163623,
      "number": 1,
      "sub": 5
    }
  ],
```

Thank you for visiting! Hope to see you again soon. 😊
