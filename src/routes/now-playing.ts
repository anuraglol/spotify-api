import { Router } from "express";
import { getNowPlaying } from "../utils/getNowPlaying";

const router = Router();

router.get("/", async (req, res) => {
  const data = await getNowPlaying();
  const { item } = data;

  const artists = item.artists.map((artist: any) => artist.name).join(", ");

  res.status(200).json({
    is_playing: data.is_playing,
    name: item.name,
    song_url: item.external_urls.spotify,
    artists: artists,
    album: item.album.name,
    album_cover: item.album.images[0].url,
  });
});

export default router;
