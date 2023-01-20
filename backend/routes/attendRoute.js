const express = require("express");
const router = express.Router();
const Attendance = require("../models/attendance");

router.get("/attend", async (req, res) => {
  try {
    Attendance.find({}, function (e, attend) {
      res.json(attend)
    })
  } catch (err) {
    res.status(500).send({
      success: false,
      error: err
    });
  }
})

router.get("/attendances/:mis", async (req, res) => {

  const { mis } = req.params;

  try {
    Attendance.find({mis: mis}, function (e, attend) {
      res.json(attend)
    })
  } catch (err) {
    res.status(500).send({
      success: false,
      error: err
    });
  }
})

module.exports = router;