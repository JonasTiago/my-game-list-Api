# my-game-list-Api
A game organizer, from different platforms.
#

## How to run for development



1. Clone this repository
```bash
cd my-game-list-Api/
```
2. Install all dependencies

```bash
npm i
```

3. Create a PostgreSQL database with whatever name you want

4. Configure the `.env` file using the `.env.example` file 

5. Run prisma migrate

```bash
npx prisma migrate dev
```
6. Run the back-end in a development environment:

```bash
npm run dev
```

## Doc api


### POST /games
* Add a game to the list
* Must receive a body in the format:
    * platforms available: "xbox","playStation" or "pc"
    
     * game status: "playing" or "finished"

    ```javaScript
        {
            name:"God of War",
            platform:"playStation",
            genre:"sport",
            status:"playing",
            gameTime:60
        }
    ```


### GET /games

* Returns a list of games already registered:

    ```javaScript
        [
            {
                "id": 1,
                "name": "Halo",
                "platform": "xbox",
                "genre": "fps",
                "status": "finished",
                "gameTime": 120,
                "createdAt": "2023-01-23T14:49:44.562Z"
            },
            {
                "id": 8,
                "name": "God of War",
                "platform": "playStation",
                "genre": "action",
                "status": "playing",
                "gameTime": 60,
                "createdAt": "2023-01-23T18:04:59.478Z"
            }
        ]
    ```

### GET /search?search=xbox

* Perform a database search, using the search value.
* Search is done by genre or platform.
* The result matches the full name or the beginning of the name.

    ```javaScript
        [
            {
                "id": 1,
                "name": "Halo",
                "platform": "xbox",
                "genre": "fps",
                "status": "finished",
                "gameTime": 120,
                "createdAt": "2023-01-23T14:49:44.562Z"
            }
        ]
    ```

### DELETE /games/:id

* Remove a game from the list, using the game id

### PUT /games/:id

* Updates status or and gametime
* Expects the game id, in addition to receiving a body in the format:

    ```javaScript
        {
            status:"finished",
            gameTime:1200
        }
    ```







