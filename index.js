import express from "express";
import dotenv from "dotenv";
import { getMediaInfo, getPngImage, getSubtitles } from "./worker.js";

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        intro: "Unoffical kisskh API",
        documentation: "use http://localhost:3000/api/:mediaID and http://localhost:3000/api/source/:episodeID",
        author: "This api is developed by Inside4ndroid Studios by request from Xaiiya :)"
    });
});

app.get('/api/:mediaID', async (req, res) => {
    const id = req.params.mediaID;
    try {
        const mediaInfo = await getMediaInfo(id);
        res.status(200).json(mediaInfo);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch media info' });
    }
});

app.get('/api/source/:episodeID', async (req, res) => {
    const episodeID = req.params.episodeID;
    const imageUrl = `${process.env.API_EPISODE}${episodeID}.png?err=false&ts=&time=`;
    console.log(imageUrl);
    try {
        const base64Image = await getPngImage(imageUrl);
        const decodedString = Buffer.from(base64Image, 'base64').toString('utf-8');
        const jsonObject = JSON.parse(decodedString);
        
        delete jsonObject.Type;
        delete jsonObject.id;
        delete jsonObject.dataSaver;
        delete jsonObject.a;
        delete jsonObject.b;
        delete jsonObject.dType;

        jsonObject.Referer = process.env.API_HOST;

        console.log(jsonObject);

        const subtitles = await getSubtitles(episodeID);

        const responseObject = {
            SOURCE: jsonObject,
            SUBS: subtitles
        };

        res.status(200).json(responseObject);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch image' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});