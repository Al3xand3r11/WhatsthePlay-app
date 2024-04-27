const PORT = 8000;
import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from 'dotenv'

const today = new Date();
const day = 14;
const month = ("0" + (today.getMonth() + 1)).slice(-2);
const year = today.getFullYear();
const fullDay = year + "-" + month + "-" + day;

dotenv.config();


const app = express()

const corsOption = {
    credentials: true,
    origin: ['http://localhost:5173']
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
