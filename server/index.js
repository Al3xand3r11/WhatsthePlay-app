const PORT = 8000;
import express from "express";
import cors from "cors";
import axios from "axios";
import RSSParser from "rss-parser";

const feedUrl = "https://www.espn.com/espn/rss/news"
const parser = new RSSParser();
const articles = [];

const parse = async url => {
    const feed = await parser.parseURL(url);

    feed.items.forEach(item => {
      articles.push({ item })
    })
}
parse(feedUrl);

const app = express()
app.use(cors());

app.get('/', (req, res) => {
    res.send(articles);
})





app.listen(8000, () => console.log(`Server is running on port ${PORT}`))
