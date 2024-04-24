import express from "express";

const router = express.Router();

router.get("/signup", (req, res) => {
    res.json({
        data: "you hit the signup endpoints",
    })
})

export default router;