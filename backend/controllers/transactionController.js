const Transaction = require("../models/Transaction");

const addTransaction = async (req, res) => {
  try {
    const { amount, type, description, date } = req.body;

    const transaction = await Transaction.create({
      userId: req.user.id,
      amount,
      type,
      description,
      date,
    });

    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      userId: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getSummary = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      userId: req.user.id,
    });

    const totalIncome = transactions
      .filter((t) => t.type === "income")
      .reduce((acc, curr) => acc + curr.amount, 0);

    const totalExpense = transactions
      .filter((t) => t.type === "expense")
      .reduce((acc, curr) => acc + curr.amount, 0);

    const balance = totalIncome - totalExpense;

    res.status(200).json({
      totalIncome,
      totalExpense,
      balance,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  addTransaction,
  getTransactions,
  getSummary,
};