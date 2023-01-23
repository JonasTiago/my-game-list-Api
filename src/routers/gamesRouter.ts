import { Router } from "express";
import {
     createGame, 
     findGames, 
     searchGames, 
     deleteGame, 
     updateStatusGame
} from "../controllers/gamesController.js";

const router = Router();

router.post("/games", createGame);
router.get("/games", findGames);
router.get("/search", searchGames);
router.delete("/games/:id", deleteGame);
router.put("/games/:id", updateStatusGame)

export {
     router
};
