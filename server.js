const { readdirSync } = require("fs");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const nocache = require("nocache");
const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();

// Middlewares implementation
app.use(cors());
app.use(nocache());
app.use(hpp());
app.use(mongoSanitize());
app.use(xss());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));

// Routes implementation
readdirSync("./routes").map(r => app.use("/api/v1", require(`./routes/${r}`)));

// Request Rate Limit
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

// Undefined routing handler
app.use('*', (req, res) => {
  res.status(404).json({ status: 'failed', data: 'Not Found' });
});

// Server connection
const port = process.env.PORT || 8000;
// Database connection
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => console.log(error));
