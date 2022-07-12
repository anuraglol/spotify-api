import { Router } from "express";
import { getNowPlaying } from "../utils/getNowPlaying";

const router = Router();

router.get("/", (req, res) => {
    const data = getNowPlaying();

    res.json(200).send(data);
    }
);

export default router;