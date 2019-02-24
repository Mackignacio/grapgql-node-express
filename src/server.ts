import { app } from "./index";
import { load } from "dotenv";
load();

const PORT = process.env.PORT || 5000;

function listenPort() {
  console.log(`Listening for request on port ${PORT}`);
}

const server = app.listen(PORT, listenPort);
