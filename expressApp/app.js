import express from 'express';
const app = express();
import databaseConnection from './models/db.js';
import router from './routes/productRoute.js';
const port = 3000;

// databse connection
databaseConnection();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/product", router);

// server start
app.listen(port, () => {
    console.log(`Application Listening on port ${port}`);
});
