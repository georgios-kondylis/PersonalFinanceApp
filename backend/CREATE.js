// createTransactions.js 
// For some reason it wont load it here so i copy it to the server and activate it there

import { Transaction } from "./models/transactionsModels.js";

// const createTransactions = async () => {
//   try {
//     const transactions = [
//       {
//         avatar: "https://i.ibb.co/s7kXbNF/emma-richardson.jpg",
//         name: "Emma Richardson",
//         category: "General",
//         date: "2024-08-19T14:23:11Z",
//         amount: 75.5,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/RTJgFx59/savory-bites-bistro.jpg",
//         name: "Savory Bites Bistro",
//         category: "Dining Out",
//         date: "2024-08-19T20:23:11Z",
//         amount: -55.5,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/r2YTTL2d/daniel-carter.jpg",
//         name: "Daniel Carter",
//         category: "General",
//         date: "2024-08-18T09:45:32Z",
//         amount: -42.3,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/gMSVF13q/sun-park.jpg",
//         name: "Sun Park",
//         category: "General",
//         date: "2024-08-17T16:12:05Z",
//         amount: 120.0,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/NdR0RnRh/urban-services-hub.jpg",
//         name: "Urban Services Hub",
//         category: "General",
//         date: "2024-08-17T21:08:09Z",
//         amount: -65.0,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/21xrTh5Q/liam-hughes.jpg",
//         name: "Liam Hughes",
//         category: "Groceries",
//         date: "2024-08-15T18:20:33Z",
//         amount: 65.75,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/RT7HL0j1/lily-ramirez.jpg",
//         name: "Lily Ramirez",
//         category: "General",
//         date: "2024-08-14T13:05:27Z",
//         amount: 50.0,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/wZfWVfWD/ethan-clark.jpg",
//         name: "Ethan Clark",
//         category: "Dining Out",
//         date: "2024-08-13T20:15:59Z",
//         amount: -32.5,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/fGTK9Lsz/james-thompson.jpg",
//         name: "James Thompson",
//         category: "Entertainment",
//         date: "2024-08-11T15:45:38Z",
//         amount: -5.0,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/ccSHrR0Q/pixel-playground.jpg",
//         name: "Pixel Playground",
//         category: "Entertainment",
//         date: "2024-08-11T18:45:38Z",
//         amount: -10.0,
//         recurring: true,
//       },
//       {
//         avatar: "https://i.ibb.co/kspHVy3y/ella-phillips.jpg",
//         name: "Ella Phillips",
//         category: "Dining Out",
//         date: "2024-08-10T19:22:51Z",
//         amount: -45.0,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/bRqxBCkQ/sofia-peterson.jpg",
//         name: "Sofia Peterson",
//         category: "Transportation",
//         date: "2024-08-08T08:55:17Z",
//         amount: -15.0,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/WvGfBFxN/mason-martinez.jpg",
//         name: "Mason Martinez",
//         category: "Lifestyle",
//         date: "2024-08-07T17:40:29Z",
//         amount: -35.25,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/YFjC8Ssp/green-plate-eatery.jpg",
//         name: "Green Plate Eatery",
//         category: "Groceries",
//         date: "2024-08-06T08:25:44Z",
//         amount: -78.5,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/HfpM2sfv/sebastian-cook.jpg",
//         name: "Sebastian Cook",
//         category: "Transportation",
//         date: "2024-08-06T10:05:44Z",
//         amount: -22.5,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/zV1F94KT/william-harris.jpg",
//         name: "William Harris",
//         category: "Personal Care",
//         date: "2024-08-05T14:30:56Z",
//         amount: -10.0,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/DfkVXx1g/elevate-education.jpg",
//         name: "Elevate Education",
//         category: "Education",
//         date: "2024-08-04T11:15:22Z",
//         amount: -50.0,
//         recurring: true,
//       },
//       {
//         avatar: "https://i.ibb.co/0y6T3C7n/serenity-spa-and-wellness.jpg",
//         name: "Serenity Spa & Wellness",
//         category: "Personal Care",
//         date: "2024-08-03T14:00:37Z",
//         amount: -30.0,
//         recurring: true,
//       },
//       {
//         avatar: "https://i.ibb.co/4g5G3dKP/spark-electric-solutions.jpg",
//         name: "Spark Electric Solutions",
//         category: "Bills",
//         date: "2024-08-02T09:25:11Z",
//         amount: -100.0,
//         recurring: true,
//       },
//       {
//         avatar: "https://i.ibb.co/wx6Z3w1/rina-sato.jpg",
//         name: "Rina Sato",
//         category: "Bills",
//         date: "2024-08-02T13:31:11Z",
//         amount: -50.0,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/0jmG7v6H/swift-ride-share.jpg",
//         name: "Swift Ride Share",
//         category: "Transportation",
//         date: "2024-08-01T18:40:33Z",
//         amount: -18.75,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/1fqVN00Y/aqua-flow-utilities.jpg",
//         name: "Aqua Flow Utilities",
//         category: "Bills",
//         date: "2024-07-30T13:20:14Z",
//         amount: -100.0,
//         recurring: true,
//       },
//       {
//         avatar: "https://i.ibb.co/7hp7RQ2/ecofuel-energy.jpg",
//         name: "EcoFuel Energy",
//         category: "Bills",
//         date: "2024-07-29T11:55:29Z",
//         amount: -35.0,
//         recurring: true,
//       },
//       {
//         avatar: "https://i.ibb.co/D3zpCwk/yuna-kim.jpg",
//         name: "Yuna Kim",
//         category: "Dining Out",
//         date: "2024-07-29T13:51:29Z",
//         amount: -28.5,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/7xCkRF6r/flavor-fiesta.jpg",
//         name: "Flavor Fiesta",
//         category: "Dining Out",
//         date: "2024-07-27T20:15:06Z",
//         amount: -42.75,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/Hfk52VzB/harper-edwards.jpg",
//         name: "Harper Edwards",
//         category: "Shopping",
//         date: "2024-07-26T09:43:23Z",
//         amount: -89.99,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/1G24C4ZY/buzz-marketing-group.jpg",
//         name: "Buzz Marketing Group",
//         category: "General",
//         date: "2024-07-26T14:40:23Z",
//         amount: 3358.0,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/hFbFFzww/technova-innovations.jpg",
//         name: "TechNova Innovations",
//         category: "Shopping",
//         date: "2024-07-25T16:25:37Z",
//         amount: -29.99,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/Q7KgCJnd/bytewise.jpg",
//         name: "ByteWise",
//         category: "Lifestyle",
//         date: "2024-07-23T09:35:14Z",
//         amount: -49.99,
//         recurring: true,
//       },
//       {
//         avatar: "https://i.ibb.co/DHzHPx0f/nimbus-data-storage.jpg",
//         name: "Nimbus Data Storage",
//         category: "Bills",
//         date: "2024-07-21T10:05:42Z",
//         amount: -9.99,
//         recurring: true,
//       },
//       {
//         avatar: "https://i.ibb.co/s7kXbNF/emma-richardson.jpg",
//         name: "Emma Richardson",
//         category: "General",
//         date: "2024-07-20T17:30:55Z",
//         amount: -25.0,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/r2YTTL2d/daniel-carter.jpg",
//         name: "Daniel Carter",
//         category: "General",
//         date: "2024-07-19T12:45:09Z",
//         amount: 50.0,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/gMSVF13q/sun-park.jpg",
//         name: "Sun Park",
//         category: "General",
//         date: "2024-07-18T19:20:23Z",
//         amount: -38.5,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/Hfk52VzB/harper-edwards.jpg",
//         name: "Harper Edwards",
//         category: "Shopping",
//         date: "2024-07-17T14:55:37Z",
//         amount: -29.99,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/21xrTh5Q/liam-hughes.jpg",
//         name: "Liam Hughes",
//         category: "Groceries",
//         date: "2024-07-16T10:10:51Z",
//         amount: -52.75,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/RT7HL0j1/lily-ramirez.jpg",
//         name: "Lily Ramirez",
//         category: "General",
//         date: "2024-07-15T16:35:04Z",
//         amount: 75.0,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/wZfWVfWD/ethan-clark.jpg",
//         name: "Ethan Clark",
//         category: "Dining Out",
//         date: "2024-07-14T20:50:18Z",
//         amount: -41.25,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/wx6Z3w1/rina-sato.jpg",
//         name: "Rina Sato",
//         category: "Entertainment",
//         date: "2024-07-13T09:15:32Z",
//         amount: -10.0,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/fGTK9Lsz/james-thompson.jpg",
//         name: "James Thompson",
//         category: "Bills",
//         date: "2024-07-12T13:40:46Z",
//         amount: -95.5,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/kspHVy3y/ella-phillips.jpg",
//         name: "Ella Phillips",
//         category: "Dining Out",
//         date: "2024-07-11T18:05:59Z",
//         amount: -33.75,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/D3zpCwk/yuna-kim.jpg",
//         name: "Yuna Kim",
//         category: "Dining Out",
//         date: "2024-07-10T12:30:13Z",
//         amount: -27.5,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/bRqxBCkQ/sofia-peterson.jpg",
//         name: "Sofia Peterson",
//         category: "Transportation",
//         date: "2024-07-09T08:55:27Z",
//         amount: -12.5,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/WvGfBFxN/mason-martinez.jpg",
//         name: "Mason Martinez",
//         category: "Lifestyle",
//         date: "2024-07-08T15:20:41Z",
//         amount: -65.0,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/HfpM2sfv/sebastian-cook.jpg",
//         name: "Sebastian Cook",
//         category: "Transportation",
//         date: "2024-07-07T11:45:55Z",
//         amount: -20.0,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/zV1F94KT/william-harris.jpg",
//         name: "William Harris",
//         category: "General",
//         date: "2024-07-06T17:10:09Z",
//         amount: 20.0,
//         recurring: false,
//       },
//       {
//         avatar: "https://i.ibb.co/DfkVXx1g/elevate-education.jpg",
//         name: "Elevate Education",
//         category: "Education",
//         date: "2024-07-05T11:15:22Z",
//         amount: -50.0,
//         recurring: true,
//       },
//       {
//         avatar: "https://i.ibb.co/0y6T3C7n/serenity-spa-and-wellness.jpg",
//         name: "Serenity Spa & Wellness",
//         category: "Personal Care",
//         date: "2024-07-03T14:00:37Z",
//         amount: -30.0,
//         recurring: true,
//       },
//       {
//         avatar: "https://i.ibb.co/4g5G3dKP/spark-electric-solutions.jpg",
//         name: "Spark Electric Solutions",
//         category: "Bills",
//         date: "2024-07-02T09:25:51Z",
//         amount: -100.0,
//         recurring: true,
//       },
//       {
//         avatar: "https://i.ibb.co/0jmG7v6H/swift-ride-share.jpg",
//         name: "Swift Ride Share",
//         category: "Transportation",
//         date: "2024-07-02T19:50:05Z",
//         amount: -16.5,
//         recurring: false,
//       },
//     ];
//     await Transaction.insertMany(transactions);
//     console.log(`${transactions.length} new transactions added:`);
//   } catch (error) {
//     console.error("Error creating transactions:", error);
//   }
// };
//  createTransactions();
let ________ = ''

import { Pots } from './models/pots.js';
// const createPots = async () => {
//   try {
//     const newPots = [
//       { name: "Savings", target: 2000.00, total: 159.00, theme: "#277C78" },
//       { name: "Concert Ticket", target: 150.00, total: 110.00, theme: "#626070" },
//       { name: "Gift", target: 150.00, total: 110.00, theme: "#82C9D7" },
//       { name: "New Laptop", target: 1000.00, total: 10.00, theme: "#F2CDAC" },
//       { name: "Holiday", target: 1440.00, total: 531.00, theme: "#826CB0" }
//     ];

//     await Pots.insertMany(newPots); 
//     console.log("✅ Pots successfully created");
//   } catch (err) {
//     console.error("❌ POTS WEREN'T CREATED", err);
//   }
// };
// createPots();
let _________ = ''

import { Budgets } from './models/budgets.js';
// const createBudgets = async () => {
//   try {
//     const newBudgets = [
//       {
//           category: "Entertainment",
//           maximum: 50.00,
//           theme: "#277C78"
//       },
//       {
//           category: "Bills",
//           maximum: 750.00,
//           theme: "#82C9D7"
//       },
//       {
//           category: "Dining Out",
//           maximum: 75.00,
//           theme: "#F2CDAC"
//       },
//       {
//           category: "Personal Care",
//           maximum: 100.00,
//           theme: "#626070"
//       }
//     ];

//     await Budgets.insertMany(newBudgets); 
//     console.log(`✅ ${newBudgets.length} Budgets successfully created`);
//   } catch (err) {
//     console.error("❌ Budgets WEREN'T CREATED", err);
//   }
// };
// createBudgets();

