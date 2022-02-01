require("dotenv").config();
const express = require("express");
const app = express();
const apiEndpoint = require("./routes/api");

app.use(express.json());

app.use("/api", apiEndpoint);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
