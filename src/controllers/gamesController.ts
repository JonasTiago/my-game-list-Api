import { Request, Response } from "express";
import { string } from "joi";
import { prismaClient } from "../database/database.js";
import { gameValidation } from "../schemas/gameSchema.js";

type Game = {
    id?: number,
    name: string,
    platform: string,
    genre: string,
    status: string,
    gameTime: number,
    createdAt?: string
};

async function createGame(req: Request, res: Response) : Promise<Response<string, Record<string, object>> | void>{
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
        );

        res.sendStatus(201)

    } catch (error) {
        res.status(400).send(error)
    }

};

async function findGames(req: Request, res: Response) {

    try {

        const games = await prismaClient.game.findMany()

        res.status(200).send(games);

    } catch (error) {
        res.status(400).send(error)
    }

};

async function searchGames(req: Request, res: Response) {
    const { search } = req.query;

    try {

        const searchResult = await prismaClient.$queryRawUnsafe(
            `SELECT * FROM games WHERE (platform ILIKE $1 OR genre ILIKE $1);`,
            `${search}%`
        );

        res.status(200).send(searchResult);

    } catch (error) {
        res.status(500).send(error)
    }

};

async function deleteGame(req: Request, res: Response) {
    const { id } = req.params;

    try {

        await prismaClient.game.delete({
            where: {
                id: Number(id)
            }
        });

        res.sendStatus(200);

    } catch (error) {
        res.status(400).send(error);
    }

};

type UpGame = {
    status: string,
    gameTime: number,
}

async function updateStatusGame(req: Request, res: Response): Promise<Response<string, Record<string, object>> | void> {
    const { id } = req.params;
    const newStatusGame: UpGame = req.body;

    try {

        const game = await prismaClient.game.findUnique({
            where: {
                id: Number(id)
            }
        })

        if(!game) return res.sendStatus(404)

        await prismaClient.game.update({
            where: {
                id: Number(id)
            },
            data: {
                name: game.name,
                platform: game.platform,
                genre: game.genre,
                status: newStatusGame.status,
                gameTime: newStatusGame.gameTime,
            }
        });

        res.sendStatus(200);

    } catch (error) {
        res.status(400).send(error);
    }

};


export {
    createGame,
    findGames,
    searchGames,
    deleteGame,
    updateStatusGame
};