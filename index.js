const express = require("express");
const cron = require("node-cron");
const cors = require("cors");
const winListSchema = require("./models/winList");

const app = express();
app.use(cors());
const connectDb = require("./db/connect");

const PORT = process.env.Port || 5000;

const winList = require("./routes/winList");

app.use("/api", winList);

const start = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log("I am connected");
    });

    cron.schedule("* * * * *", async () => {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      const currentDate = new Date()
      console.log("currentDate",currentDate);
      const getCurrentDate= currentDate.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
      // Get hours, minutes, and seconds
      var hours = currentDate.getHours();
      var minutes = currentDate.getMinutes();
      var seconds = currentDate.getSeconds();

      // Format the time string
      var timeString =
        hours.toString().padStart(2, "0") +
        ":" +
        minutes.toString().padStart(2, "0") +
        ":" +
        seconds.toString().padStart(2, "0");

      console.log("formattedDate",timeString);
      console.log("A cron job that runs every 2 seconds", randomNumber);
      const newWinListSchema= new winListSchema({ randomNumber: randomNumber, createdDate: getCurrentDate,createdTime:timeString});
      await newWinListSchema.save();
    });
  } catch (error) {
    console.log(error);
  }
};
start();
