const winListSchema = require("../models/winList");

const getAllWinList = async (req, res) => {
  const data = await winListSchema.find();
  res.status(200).json(data);
};

const getTenRecords = async (req, res) => {
  const data = await winListSchema
    .find()
    .sort({ createdTime: -1 }) // Sort by createdTime in descending order
    .limit(10);
  res.status(200).json(data);
};
module.exports = { getAllWinList, getTenRecords };
