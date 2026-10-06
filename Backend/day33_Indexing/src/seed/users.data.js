import connectDB from "../config/db.js";
import userModel from "../models/user.model.js";

const TOTAL_USERS = 10_000_000;
const BATCH_SIZE = 10_000;

const firstNames = [
  "Aarav",
  "Vivaan",
  "Aditya",
  "Arjun",
  "Rohan",
  "Rahul",
  "Karan",
  "Vikram",
  "Ananya",
  "Priya",
  "Neha",
  "Sneha",
  "Pooja",
  "Kavya",
  "Isha",
  "Aditi",
];

const lastNames = [
  "Sharma",
  "Patel",
  "Kumar",
  "Verma",
  "Gupta",
  "Singh",
  "Joshi",
  "Yadav",
  "Mehta",
  "Shah",
  "Jain",
  "Deshmukh",
];

const cities = [
  "Mumbai",
  "Pune",
  "Nagpur",
  "Nashik",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Jaipur",
  "Indore",
  "Bhopal",
  "Surat",
  "Ahmedabad",
];

const countries = [
  "India",
  "USA",
  "Canada",
  "Australia",
  "UK",
  "Germany",
];

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function randomAge() {
  return Math.floor(Math.random() * 63) + 18;
}

function generateUser(index) {
  const firstName = randomItem(firstNames);
  const lastName = randomItem(lastNames);

  return {
    name: `${firstName} ${lastName}`,

    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${index}@example.com`,

    age: randomAge(),

    city: randomItem(cities),

    country: randomItem(countries),
  };
}

const seedUsers = async () => {
  try {
    console.log("Connecting to MongoDB...");

    await connectDB();

    console.log("Starting 10M users insertion...");

    const startTime = Date.now();

    let insertedUsers = 0;

    while (insertedUsers < TOTAL_USERS) {
      const currentBatchSize = Math.min(
        BATCH_SIZE,
        TOTAL_USERS - insertedUsers,
      );

      const users = [];

      for (let i = 0; i < currentBatchSize; i++) {
        users.push(
          generateUser(insertedUsers + i),
        );
      }

      await userModel.insertMany(users, {
        ordered: false,
      });

      insertedUsers += currentBatchSize;

      const percentage =
        ((insertedUsers / TOTAL_USERS) * 100).toFixed(2);

      console.log(
        `${insertedUsers.toLocaleString()} / ${TOTAL_USERS.toLocaleString()} (${percentage}%)`,
      );
    }

    const endTime = Date.now();

    const timeTaken =
      (endTime - startTime) / 1000;

    console.log("\n==============================");
    console.log("10M USERS INSERTED SUCCESSFULLY");
    console.log("==============================");

    console.log(
      `Total users: ${insertedUsers.toLocaleString()}`,
    );

    console.log(
      `Time taken: ${timeTaken.toFixed(2)} seconds`,
    );

    process.exit(0);
  } catch (error) {
    console.error("Error while inserting users:");
    console.error(error);

    process.exit(1);
  }
};

seedUsers();