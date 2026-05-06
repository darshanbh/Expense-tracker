const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");

const {
  addTransaction,
  getTransactions,
  getSummary,
} = require("../controllers/transactionController");

const router = express.Router();

router.post("/add", authMiddleware, addTransaction);

router.get("/", authMiddleware, getTransactions);

router.get("/summary", authMiddleware, getSummary);

module.exports = router;