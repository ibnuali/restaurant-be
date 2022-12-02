const express = require("express");
const foodRouter = require("./v1/routes/foodRoutes");
const categoriesRouter = require("./v1/routes/categoriesRoute");
const orderRouter = require("./v1/routes/orderRoute");
const orderItemsRouter = require("./v1/routes/orderItemRoute");
const cors = require("cors");
const sequelize = require("./config/db.config");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");

sequelize.sync({ force: true }).then(() => {
  console.log("Database connected");
});

app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1/food", foodRouter);
app.use("/api/v1/category", categoriesRouter);
app.use("/api/v1/order", orderRouter);
app.use("/api/v1/order-item", orderItemsRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});