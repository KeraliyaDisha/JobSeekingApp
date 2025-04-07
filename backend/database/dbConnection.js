import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "JOB_SEEKING",
    })
    .then(() => {
      console.log("Database Connected Successfully");
    })
    .catch((err) => {
      console.log(`error occured while connecting to database: ${err}`);
    });
};

export default dbConnection;