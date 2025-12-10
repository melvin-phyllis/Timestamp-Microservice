import express from "express";

import path from 'path';
import { fileURLToPath } from 'url';


const routes = express.Router()
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// http://expressjs.com/en/starter/basic-routing.html

routes.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});


// your first API endpoint...
routes.get("/api/hello", function (req, res) {

    res.json({ greeting: 'hello API' });
});



routes.get("/api/:date", function (req, res) {

    const { date } = req.params


    if (!Date.parse(date)) {


        const time = new Date(Number(date)).toUTCString()
        if (time == "Invalid Date") return res.json({ error: "Invalid Date" })
        return res.json({ "unix": Number(date), "utc": time });

    }
    else {
        const unix = Date.parse(date)

        const time = new Date(unix).toUTCString()

        return res.json({ "unix": Number(unix), "utc": time });
    }


});

routes.get("/api", function (req, res) {

    const time = new Date()
    // res.send(`${time.valueOf()} ${time.toUTCString()}`)
    return res.json({ "unix": time.valueOf(), "utc": time.toUTCString() });

});

export default routes
