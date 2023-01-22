import {Request, Response} from "express"
import Joi from "joi"

const gameValidation = Joi.object({
    name: Joi.string(),
    platform:Joi.string().valid("xbox","ps","pc"),
    genre:Joi.string(),
    status:Joi.string().valid("playing", "finished"),
    gameTime:Joi.number()
})

export default async function createGame(req:Request, res:Response){
    const game = req.body

    const {error} = gameValidation.validate(game, {abortEarly: false})

    if(error) {
        return res.status(400).send(error.details.map(erro => erro.message))
    }

    res.send(game) 
}