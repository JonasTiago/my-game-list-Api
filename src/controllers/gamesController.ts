import { Request, Response } from "express";
import { prismaClient } from "../database/database.js";
import { gameValidation } from "../schemas/gameSchema.js";

type Game = {
    id?:number,
    name: string,
    platform: string,
    genre: string,
    status: string,
    gameTime: number,
    createdAt?:string
};

async function createGame(req: Request, res: Response) {
    const game: Game = req.body;

    const { error } = gameValidation.validate(game, { abortEarly: false })

    if (error) {
        return res.status(400).send(error.details.map(erro => erro.message))
    }

    try {

        await prismaClient.game.create({
            data: {
                name: game.name,
                platform: game.platform,
                genre: game.genre,
                status: game.status,
                gameTime: game.gameTime,
            }
        }
        )

        res.send(game)

    } catch (error) {
        res.status(500).send(error)
    }

};

async function searchGame(req: Request, res: Response) {
    const {search} = req.query;
    
    try {

        const searchResult = await prismaClient.$queryRawUnsafe(
            `SELECT * FROM games WHERE (platform ILIKE $1 OR genre ILIKE $1)`,
            `%${search}%`
        );

        res.status(200).send(searchResult);

    } catch (error) {
        res.status(500).send(error)
    }

};


export {
    createGame,
    searchGame
};