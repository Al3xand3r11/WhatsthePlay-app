const PORT = 8000;
import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from 'dotenv';
import date from 'date-and-time';

const now = new Date();
const fullDay = date.format(now,'YYYY-MM-DD')

dotenv.config();


const app = express()

const corsOption = {
    credentials: true,
    origin: "*",
}

app.use(cors(corsOption));


app.get('/', (req,res) => {
    const config = {
        method: 'get',
        url: `https://v2.nba.api-sports.io/games?date=${fullDay}`,
        headers: {
          'x-rapidapi-key': process.env.REACT_API_KEY,
          'x-rapidapi-host': 'v2.nba.api-sports.io'
        }
      };
      
      axios(config)
      .then(function (response) {
        res.json(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
})

app.listen(8000, () => console.log(`Server is running on port ${PORT}`))
