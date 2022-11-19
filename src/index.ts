import express from 'express'
import * as dotenv from "dotenv";

import v1Router from './v1/routes'

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.get('/health', function(req, res) {
    res.status(200).send('server connected !');
});

app.use("/api/v1/", v1Router);

app.listen(PORT, function() {
    console.log('Server is running on PORT:',PORT);
});