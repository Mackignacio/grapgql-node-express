import { app } from "./index";
import { load } from "dotenv";
import { connect, connection } from "mongoose";
load();

// Connect to mongodb database
connect(
  process.env.MONGODB_CONNECTION || "MONGODB_CONNECTION",
  { useNewUrlParser: true }
);

// When connection is successful
connection.once("open", () => console.log("Connected to mongodb database"));

// When connection is failed
connection.once("error", error => console.log("Failed connecting to database. \nError:", error.errors[0].err.errmsg));

// Get port on env
const PORT = process.env.PORT;

function listenPort() {
  console.log(`Listening for request on port ${PORT}`);
}

// Start the server
const server = app.listen(PORT, listenPort);
