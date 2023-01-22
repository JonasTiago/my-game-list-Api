import Joi from "joi";

const gameValidation = Joi.object({
    name: Joi.string(),
    platform:Joi.string().valid("xbox","ps","pc"),
    genre:Joi.string(),
    status:Joi.string().valid("playing", "finished"),
    gameTime:Joi.number()
});

export {
    gameValidation
}