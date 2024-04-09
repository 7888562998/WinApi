const express = require("express");
const router = express.Router();
const { getAllWinList,getTenRecords } = require("../controllers/winList");

router.route("/win-list").get(getAllWinList);
router.route("/get-ten-records").get(getTenRecords);

module.exports = router;
