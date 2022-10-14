import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import auth_routes from "./routes/auth.routes.js";
import url_routes from "./routes/url.routes.js";

const app = express();
dotenv.config();
const port = process.env.SERVER_URL;

app.use(cors());
app.use(express.json());

app.use(auth_routes);
app.use(url_routes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
