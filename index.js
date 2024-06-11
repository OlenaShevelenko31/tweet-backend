import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import tweetsRouter from './routes/tweets.js'
import cors  from 'cors'


// env variable & connect to MongoDB
dotenv.config();
mongoose.connect(process.env.ATLAS_URI);
// console.log(process.env.ATLAS_URI);

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json()); // <--- MIDLEWARE __________
app.use('/tweets' , tweetsRouter)

app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});



app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));









