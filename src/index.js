import 'dotenv/config'; // USED TO SAVE ENVIRONMENTAL VARIABLES IN AN .env FILE
                        // (we can save sensitive data like passwords and users)
import cors from 'cors;'
import express from 'express';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT} ...`);
});

//console.log(process.env.MY_SECRET); // THIS IS HOW WE ACCESS THE DATA SAVED