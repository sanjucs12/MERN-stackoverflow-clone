import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from "./routes/users.js";

const app = express();
app.use(express.json({ limit: "30mb", extended: true })); //Used for parsing JSON-encoded request bodies. When a client sends data to the server with a JSON content type, this middleware parses the JSON data and attaches it to the req.body property of the request object.
app.use(express.urlencoded({ limit: "30mb", extended: true })); //Used for parsing URL-encoded request bodies. URL-encoded data is typically sent in the body of an HTTP POST request and is in the format of key-value pairs, similar to HTML form data. When set to true, it allows parsing of URL-encoded data with nested objects and arrays, providing a more flexible way to handle form submissions.
app.use(cors()); //ALLOWS REQUESTS FROM ALL ORIGINS

app.get("/", (req, res, next) => {
  res.json({ message: "THIS IS A STACKOVERFLOW CLONE API" });
});

app.use("/user", userRoutes);  //USER ROUTES

const PORT = process.env.PORT || 5000; //it's looking for an environment variable named PORT to determine the port on which the server should listen.If the PORT environment variable is not set, the application will use port 5000 as a fallback.

//CONNECTION TO MONGODB CLOUD DATABASE
const CONNECTION_URL =
  "mongodb+srv://sanjucs12:sanjumongo@stack-overflow-clone.ayf27ia.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp";
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`SERVER RUNNING ON PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
