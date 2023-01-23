import { Router } from "express";
import {createGame, searchGame} from "../controllers/gamesController.js";

const router = Router();

router.post("/games", createGame);
router.get("/games", searchGame);

export {
     router 
    };
