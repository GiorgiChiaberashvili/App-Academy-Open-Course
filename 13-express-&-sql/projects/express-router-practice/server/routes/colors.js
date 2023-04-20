const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
    res.json("GET /colors");
});

router.get("/:name", (req, res) => {
    res.json("GET /colors/:name");
});

router.post("/colors/:name/css-styles", (req, res) => {
    res.json("POST /colors/:name/css-styles")
})

router.delete("DELETE /colors/:name/css-styles/:style", (req, res) => {
    res.json("DELETE /colors/:name/css-styles/styles")
})

module.exports = router;
