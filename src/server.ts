import express from "express";
import cors from "cors";
import { config } from "dotenv";
// import routes from "./routes/index";

config();

const server = express();

server.use(express.json());
server.use(cors());

server.listen(process.env.PORT || "3000", () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
