import express from "express";

const router = express.Router();

router.post("/signup", (req, res) => {
    res.json({
        data: "you hit the signup endpoints",
    })
})

router.post("/login", (req, res) => {
    res.json({
        data: "you hit the login endpoints",
    })
})

router.post("/logout", (req, res) => {
    res.json({
        data: "you hit the logout endpoints",
    })
})

export default router;