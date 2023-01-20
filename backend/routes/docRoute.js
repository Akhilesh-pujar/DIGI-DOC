const express = require("express");
const router = express.Router();
const Document = require("../models/document");

router.get("/", async (req, res) => {
  try {
    Document.find({}, function (e, doc) {
      res.json(doc)
    })
  } catch (err) {
    res.status(500).send({
      success: false,
      error: err
    });
  }
})

router.get("/documents/:category", async (req, res) => {

  const { category } = req.params;

  try {
    Document.find({category: category}, function (e, doc) {
      res.json(doc)
    })
  } catch (err) {
    res.status(500).send({
      success: false,
      error: err
    });
  }
})

module.exports = router;