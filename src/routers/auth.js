import express from "express";

const router = express.Router();

router.get("/login", (req, res) => {
  res.status(200).json("OK");
});

export default router;
