const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");

// Here the order of files is IMPORTANT
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
