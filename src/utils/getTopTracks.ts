import axios from "axios";
import { getAccessToken } from "./getAccessToken";
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;

const getTopTracks = async () => {
  const { access_token } = await getAccessToken();

  const res = await axios.get(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return res.data;
};

export { getTopTracks };
