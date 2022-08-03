const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const express = require("express");
const app = express();

const logger = require("morgan");
const {routes}  = require("./routes/routes");
const cors = require("cors");
const port = parseInt(process.env.PORT || 3001);
app.use(cors());
app.use(express.json());
app.use(logger("dev"));

app.use("/", routes);

// app.get("/", (req, res) => {
//     res.send("HEllow human");
// });

app.listen(port, (err, res) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(`Server listening on http://localhost:${port}`);
    }
});


