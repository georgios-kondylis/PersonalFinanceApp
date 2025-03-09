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
//         amount: 75.50,
//         recurring: false
//       },
//       {
//         avatar: "https://i.ibb.co/RTJgFx59/savory-bites-bistro.jpg",
//         name: "Savory Bites Bistro",
//         category: "Food & Dining",
//         date: "2024-08-20T18:12:47Z",
//         amount: 32.75,
//         recurring: false
//       },
//       {
//         avatar: "https://i.ibb.co/r2YTTL2d/daniel-carter.jpg",
//         name: "Daniel Carter",
//         category: "General",
//         date: "2024-08-21T09:45:20Z",
//         amount: 50.00,
//         recurring: true
//       },
//       {
//         avatar: "https://i.ibb.co/gMSVF13q/sun-park.jpg",
//         name: "Sun Park",
//         category: "Utilities",
//         date: "2024-08-22T10:00:01Z",
//         amount: 120.00,
//         recurring: true
//       },
//       {
//         avatar: "https://i.ibb.co/NdR0RnRh/urban-services-hub.jpg",
//         name: "Urban Services Hub",
//         category: "Services",
//         date: "2024-08-23T16:54:29Z",
//         amount: 99.99,
//         recurring: false
//       },
//       {
//         avatar: "https://i.ibb.co/21xrTh5Q/liam-hughes.jpg",
//         name: "Liam Hughes",
//         category: "General",
//         date: "2024-08-24T17:23:10Z",
//         amount: 150.00,
//         recurring: false
//       },
//       {
//         avatar: "https://i.ibb.co/RT7HL0j1/lily-ramirez.jpg",
//         name: "Lily Ramirez",
//         category: "Personal",
//         date: "2024-08-25T14:20:30Z",
//         amount: 45.75,
//         recurring: false
//       },
//       {
//         avatar: "https://i.ibb.co/wZfWVfWD/ethan-clark.jpg",
//         name: "Ethan Clark",
//         category: "General",
//         date: "2024-08-26T11:45:02Z",
//         amount: 78.90,
//         recurring: false
//       },
//       {
//         avatar: "https://i.ibb.co/fGTK9Lsz/james-thompson.jpg",
//         name: "James Thompson",
//         category: "Utilities",
//         date: "2024-08-27T12:12:15Z",
//         amount: 90.50,
//         recurring: false
//       },
//       {
//         avatar: "https://i.ibb.co/ccSHrR0Q/pixel-playground.jpg",
//         name: "Pixel Playground",
//         category: "Services",
//         date: "2024-08-28T08:30:10Z",
//         amount: 60.00,
//         recurring: false
//       },
//       {
//         avatar: "https://i.ibb.co/kspHVy3y/ella-phillips.jpg",
//         name: "Ella Phillips",
//         category: "General",
//         date: "2024-08-29T15:42:05Z",
//         amount: 50.00,
//         recurring: true
//       },
//       {
//         avatar: "https://i.ibb.co/bRqxBCkQ/sofia-peterson.jpg",
//         name: "Sofia Peterson",
//         category: "Personal",
//         date: "2024-08-30T17:55:45Z",
//         amount: 80.25,
//         recurring: false
//       },
//       {
//         avatar: "https://i.ibb.co/WvGfBFxN/mason-martinez.jpg",
//         name: "Mason Martinez",
//         category: "General",
//         date: "2024-08-31T10:10:33Z",
//         amount: 100.00,
//         recurring: false
//       },
//       {
//         avatar: "https://i.ibb.co/YFjC8Ssp/green-plate-eatery.jpg",
//         name: "Green Plate Eatery",
//         category: "Food & Dining",
//         date: "2024-09-01T13:29:00Z",
//         amount: 25.50,
//         recurring: false
//       },
//       {
//         avatar: "https://i.ibb.co/HfpM2sfv/sebastian-cook.jpg",
//         name: "Sebastian Cook",
//         category: "General",
//         date: "2024-09-02T12:14:45Z",
//         amount: 120.00,
//         recurring: true
//       },
//       {
//         avatar: "https://i.ibb.co/DfkVXx1g/elevate-education.jpg",
//         name: "Elevate Education",
//         category: "Services",
//         date: "2024-09-03T09:33:20Z",
//         amount: 250.00,
//         recurring: true
//       },
//       {
//         avatar: "https://i.ibb.co/0y6T3C7n/serenity-spa-and-wellness.jpg",
//         name: "Serenity Spa & Wellness",
//         category: "Health & Wellness",
//         date: "2024-09-04T11:11:00Z",
//         amount: 150.00,
//         recurring: false
//       },
//       {
//         avatar: "https://i.ibb.co/4g5G3dKP/spark-electric-solutions.jpg",
//         name: "Spark Electric Solutions",
//         category: "Services",
//         date: "2024-09-05T17:28:19Z",
//         amount: 90.00,
//         recurring: true
//       },
//       {
//         avatar: "https://i.ibb.co/wx6Z3w1/rina-sato.jpg",
//         name: "Rina Sato",
//         category: "General",
//         date: "2024-09-06T16:49:05Z",
//         amount: 65.00,
//         recurring: false
//       },
//       {
//         avatar: "https://i.ibb.co/0jmG7v6H/swift-ride-share.jpg",
//         name: "Swift Ride Share",
//         category: "Transportation",
//         date: "2024-09-07T14:24:51Z",
//         amount: 40.00,
//         recurring: false
//       },
//       {
//         avatar: "https://i.ibb.co/1fqVN00Y/aqua-flow-utilities.jpg",
//         name: "Aqua Flow Utilities",
//         category: "Utilities",
//         date: "2024-09-08T10:50:35Z",
//         amount: 85.00,
//         recurring: true
//       },
//       {
//         avatar: "https://i.ibb.co/7hp7RQ2/ecofuel-energy.jpg",
//         name: "EcoFuel Energy",
//         category: "Utilities",
//         date: "2024-09-09T12:05:12Z",
//         amount: 55.00,
//         recurring: false
//       },
//       {
//         avatar: "https://i.ibb.co/D3zpCwk/yuna-kim.jpg",
//         name: "Yuna Kim",
//         category: "General",
//         date: "2024-09-10T18:23:43Z",
//         amount: 110.00,
//         recurring: true
//       },
//       {
//         avatar: "https://i.ibb.co/7xCkRF6r/flavor-fiesta.jpg",
//         name: "Flavor Fiesta",
//         category: "Food & Dining",
//         date: "2024-09-11T14:45:19Z",
//         amount: 25.99,
//         recurring: false
//       },
//       {
//         avatar: "https://i.ibb.co/Hfk52VzB/harper-edwards.jpg",
//         name: "Harper Edwards",
//         category: "General",
//         date: "2024-09-12T15:38:04Z",
//         amount: 65.00,
//         recurring: true
//       },
//       {
//         avatar: "https://i.ibb.co/1G24C4ZY/buzz-marketing-group.jpg",
//         name: "Buzz Marketing Group",
//         category: "Marketing",
//         date: "2024-09-13T10:55:21Z",
//         amount: 200.00,
//         recurring: false
//       },
//       {
//         avatar: "https://i.ibb.co/hFbFFzww/technova-innovations.jpg",
//         name: "TechNova Innovations",
//         category: "Technology",
//         date: "2024-09-14T17:14:50Z",
//         amount: 170.00,
//         recurring: true
//       },
//       {
//         avatar: "https://i.ibb.co/Q7KgCJnd/bytewise.jpg",
//         name: "ByteWise",
//         category: "Technology",
//         date: "2024-09-15T09:20:39Z",
//         amount: 85.00,
//         recurring: false
//       },
//       {
//         avatar: "https://i.ibb.co/DHzHPx0f/nimbus-data-storage.jpg",
//         name: "Nimbus Data Storage",
//         category: "Technology",
//         date: "2024-09-16T12:13:58Z",
//         amount: 150.00,
//         recurring: false
//       },
//       {
//         avatar: "https://i.ibb.co/zV1F94KT/william-harris.jpg",
//         name: "William Harris",
//         category: "General",
//         date: "2024-09-17T11:10:43Z",
//         amount: 100.00,
//         recurring: false
//       }
//     ];
    

//     await Transaction.insertMany(transactions);
//     console.log(`${transactions.length} new transactions added:`);
//   } catch (error) {
//     console.error('Error creating transactions:', error);
//   }
// };
// createTransactions();
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

