// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectToMongoDB } from './config/mongoDB.js';  
import balanceRoutes from './routes/balanceRoutes.js'; 
import transactionsRoutes from './routes/transactionsRoutes.js';
import potsRoutes from './routes/potsRoutes.js'
import budgetsRoutes from './routes/budgetsRoutes.js'


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests

connectToMongoDB();

app.use('/api/balance', balanceRoutes); 
app.use('/api/transactions', transactionsRoutes); 
app.use('/api/pots', potsRoutes); 
app.use('/api/budgets', budgetsRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

import { Transaction } from "./models/transactionsModels.js";
const createTransactions = async () => {
  try {
    const transactions = [
      {
        avatar: "https://i.ibb.co/s7kXbNF/emma-richardson.jpg",
        name: "Emma Richardson",
        category: "General",
        date: "2024-08-19T14:23:11Z",
        amount: 75.50,
        recurring: false
      },
      {
        avatar: "https://i.ibb.co/RTJgFx59/savory-bites-bistro.jpg",
        name: "Savory Bites Bistro",
        category: "Dining Out",
        date: "2024-08-19T20:23:11Z",
        amount: -55.50,
        recurring: false
      },
      {
        avatar: "https://i.ibb.co/r2YTTL2d/daniel-carter.jpg",
        name: "Daniel Carter",
        category: "General",
        date: "2024-08-18T09:45:32Z",
        amount: -42.30,
        recurring: false
      },
      {
        avatar: "https://i.ibb.co/gMSVF13q/sun-park.jpg",
        name: "Sun Park",
        category: "General",
        date: "2024-08-17T16:12:05Z",
        amount: 120.00,
        recurring: false
      },
      {
        avatar: "https://i.ibb.co/NdR0RnRh/urban-services-hub.jpg",
        name: "Urban Services Hub",
        category: "General",
        date: "2024-08-17T21:08:09Z",
        amount: -65.00,
        recurring: false
      },
      {
        avatar: "https://i.ibb.co/21xrTh5Q/liam-hughes.jpg",
        name: "Liam Hughes",
        category: "Groceries",
        date: "2024-08-15T18:20:33Z",
        amount: 65.75,
        recurring: false
      },
      {
        avatar: "https://i.ibb.co/RT7HL0j1/lily-ramirez.jpg",
        name: "Lily Ramirez",
        category: "General",
        date: "2024-08-14T13:05:27Z",
        amount: 50.00,
        recurring: false
      },
      {
        avatar: "https://i.ibb.co/wZfWVfWD/ethan-clark.jpg",
        name: "Ethan Clark",
        category: "Dining Out",
        date: "2024-08-13T20:15:59Z",
        amount: -32.50,
        recurring: false
      },
      {
        avatar: "https://i.ibb.co/fGTK9Lsz/james-thompson.jpg",
        name: "James Thompson",
        category: "Entertainment",
        date: "2024-08-11T15:45:38Z",
        amount: -5.00,
        recurring: false
      },
      {
        avatar: "https://i.ibb.co/ccSHrR0Q/pixel-playground.jpg",
        name: "Pixel Playground",
        category: "Entertainment",
        date: "2024-08-11T18:45:38Z",
        amount: -10.00,
        recurring: true
      },
      {
        avatar: "https://i.ibb.co/kspHVy3y/ella-phillips.jpg",
        name: "Ella Phillips",
        category: "Dining Out",
        date: "2024-08-10T19:22:51Z",
        amount: -45.00,
        recurring: false
      },
      {
        avatar: "https://i.ibb.co/bRqxBCkQ/sofia-peterson.jpg",
        name: "Sofia Peterson",
        category: "Transportation",
        date: "2024-08-08T08:55:17Z",
        amount: -15.00,
        recurring: false
      },
      {
        avatar: "https://i.ibb.co/WvGfBFxN/mason-martinez.jpg",
        name: "Mason Martinez",
        category: "Lifestyle",
        date: "2024-08-07T17:40:29Z",
        amount: -35.25,
        recurring: false
      },
      {
        avatar: "https://i.ibb.co/YFjC8Ssp/green-plate-eatery.jpg",
        name: "Green Plate Eatery",
        category: "Groceries",
        date: "2024-08-06T08:25:44Z",
        amount: -78.50,
        recurring: false
      },
      {
        avatar: "https://i.ibb.co/HfpM2sfv/sebastian-cook.jpg",
        name: "Sebastian Cook",
        category: "Transportation",
        date: "2024-08-06T10:05:44Z",
        amount: -22.50,
        recurring: false
      },
      {
        avatar: "https://i.ibb.co/DfkVXx1g/elevate-education.jpg",
        name: "Elevate Education",
        category: "Education",
        date: "2024-08-05T11:12:10Z",
        amount: -90.00,
        recurring: true
      },
      {
        avatar: "https://i.ibb.co/0y6T3C7n/serenity-spa-and-wellness.jpg",
        name: "Serenity Spa & Wellness",
        category: "Health & Wellness",
        date: "2024-08-04T19:30:50Z",
        amount: -55.00,
        recurring: false
      },
      {
        avatar: "https://i.ibb.co/4g5G3dKP/spark-electric-solutions.jpg",
        name: "Spark Electric Solutions",
        category: "Services",
        date: "2024-08-03T16:00:15Z",
        amount: 100.00,
        recurring: true
      },
      {
        avatar: "https://i.ibb.co/wx6Z3w1/rina-sato.jpg",
        name: "Rina Sato",
        category: "General",
        date: "2024-08-02T17:55:30Z",
        amount: -10.00,
        recurring: false
      },
      {
        avatar: "https://i.ibb.co/0jmG7v6H/swift-ride-share.jpg",
        name: "Swift Ride Share",
        category: "Transportation",
        date: "2024-08-01T08:33:29Z",
        amount: -12.00,
        recurring: false
      },
      {
        avatar: "https://i.ibb.co/1fqVN00Y/aqua-flow-utilities.jpg",
        name: "Aqua Flow Utilities",
        category: "Utilities",
        date: "2024-07-31T12:10:00Z",
        amount: -50.00,
        recurring: true
      },
      {
        avatar: "https://i.ibb.co/7hp7RQ2/ecofuel-energy.jpg",
        name: "EcoFuel Energy",
        category: "Energy",
        date: "2024-07-30T14:55:44Z",
        amount: 40.00,
        recurring: false
      },
      {
        avatar: "https://i.ibb.co/D3zpCwk/yuna-kim.jpg",
        name: "Yuna Kim",
        category: "General",
        date: "2024-07-29T11:15:27Z",
        amount: 90.00,
        recurring: true
      },
      {
        avatar: "https://i.ibb.co/7xCkRF6r/flavor-fiesta.jpg",
        name: "Flavor Fiesta",
        category: "Dining Out",
        date: "2024-07-28T19:05:17Z",
        amount: -22.50,
        recurring: false
      },
      {
        avatar: "https://i.ibb.co/Hfk52VzB/harper-edwards.jpg",
        name: "Harper Edwards",
        category: "Entertainment",
        date: "2024-07-27T14:45:50Z",
        amount: 55.00,
        recurring: true
      },
      {
        avatar: "https://i.ibb.co/1G24C4ZY/buzz-marketing-group.jpg",
        name: "Buzz Marketing Group",
        category: "Marketing",
        date: "2024-07-26T11:30:15Z",
        amount: -30.00,
        recurring: false
      },
      {
        avatar: "https://i.ibb.co/hFbFFzww/technova-innovations.jpg",
        name: "Technova Innovations",
        category: "Technology",
        date: "2024-07-25T10:15:30Z",
        amount: -120.00,
        recurring: true
      },
      {
        avatar: "https://i.ibb.co/Q7KgCJnd/bytewise.jpg",
        name: "Bytewise",
        category: "Technology",
        date: "2024-07-24T09:40:15Z",
        amount: 75.00,
        recurring: false
      }
    ];
    await Transaction.insertMany(transactions);
    console.log(`${transactions.length} new transactions added:`);
  } catch (error) {
    console.error('Error creating transactions:', error);
  }
};
createTransactions();

