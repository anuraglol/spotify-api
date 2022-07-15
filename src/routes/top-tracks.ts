import { Router } from "express";
import { getTopTracks } from "../utils/getTopTracks";

const router = Router();

router.get("/", async (req, res) => {
  const { items } = await getTopTracks();

  const tracks = items.slice(0, 5).map((track: any) => ({
    artist: track.artists.map((_artist: any) => _artist.name).join(", "),
    songUrl: track.external_urls.spotify,
    title: track.name,
  }));

  res.status(200).json({ tracks: tracks });
});

export default router;
