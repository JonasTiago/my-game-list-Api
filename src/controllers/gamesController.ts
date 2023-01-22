import {Request, Response} from "express";
import { gameValidation } from "../schemas/gameSchema.js";

type Game = {
    name: string,
    platform:string,
    genre:string,
    status:string,
    gameTime:number
};

async function createGame(req:Request, res:Response){
    const game : Game = req.body

    const {error} = gameValidation.validate(game, {abortEarly: false})

    if(error) {
        return res.status(400).send(error.details.map(erro => erro.message))
    }

    res.send(game) 
};



export {
    createGame
};