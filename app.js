const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");
require("dotenv").config(); 

const app = express();
app.use(express.json());

const dbData = require('./database/dbConn');
dbData();

const PORT = process.env.PORT || 3000;
// const DB_URI = process.env.DB_URI;

mongoose.connection.once('open',()=>{
  app.listen(PORT, ()=>{ console.log(`Server running on port ${PORT}`)})
})

// mongoose
//   .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((error) => console.error("Could not connect to MongoDB", error));

// Product Routes
app.use("/api/products", productRoutes);


app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});
