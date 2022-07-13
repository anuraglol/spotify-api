import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await axios.post(TOKEN_ENDPOINT, {
    headers: {
      Authorization: `Basic ${basic}`,
    },
    grant_type: "refresh_token",
    refresh_token,
  });

  return response.data;
};

export { getAccessToken };
