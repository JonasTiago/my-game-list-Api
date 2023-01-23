# my-game-list-Api
Um organizador de games, de diferentes plataformas.


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
 * Adicionar um game a lista
 * Deve receber um corpo (body) no formato:

    ```javaScript
        {
            name:"God of War",
            platform:"playStation",
            genre:"sport",
            status:"playing",
            gameTime:60
        }
    ```
 * Regras de negocios

    * platform disponiveis : "xbox","playStation" ou "pc"
    
    * status do game: "playing" ou "finished"

### GET /games

* Retorna um lista com os games ja cadastrados:

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

* Realiza uma pesquisa no banco, usando o valor de search.
* A pesquisa é feita por genre ou platform
* O resultado corresponde ao nome completo ou o inicio do nome.

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

* Remove um game da lista, usando o Id

### PUT /games/:id

* Atualiza o status ou e gametime

* Espera o id do game, alem receber um corpo (body) no formato:

    ```javaScript
        {
            status:"finished",
            gameTime:1200
        }
    ```







