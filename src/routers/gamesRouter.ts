import { Router } from "express";
import {createGame} from "../controllers/gamesController.js";

const router = Router();

router.post("/games", createGame);

export {
     router 
    };
