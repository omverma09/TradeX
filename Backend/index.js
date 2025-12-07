require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors')

const { HoldingsModel } = require("./schemas/HoldingsSchema");
const { PositionsModel } = require("./schemas/PositionsSchema");
const { OrdersModel } = require("./schemas/OrdersSchema");

const PORT = process.env.PORT || 3002;
const URL = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose.connect(URL)
    .then(() => {
        console.log("Connected to MongoDB Atlas");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });

// app.get("/addHoldings", async (req, res) => {
//     const tempHoldings = [
//         {
//             name: "BHARTIARTL",
//             qty: 2,
//             avg: 538.05,
//             price: 541.15,
//             net: "+0.58%",
//             day: "+2.99%",
//         },
//         {
//             name: "HDFCBANK",
//             qty: 2,
//             avg: 1383.4,
//             price: 1522.35,
//             net: "+10.04%",
//             day: "+0.11%",
//         },
//         {
//             name: "HINDUNILVR",
//             qty: 1,
//             avg: 2335.85,
//             price: 2417.4,
//             net: "+3.49%",
//             day: "+0.21%",
//         },
//         {
//             name: "INFY",
//             qty: 1,
//             avg: 1350.5,
//             price: 1555.45,
//             net: "+15.18%",
//             day: "-1.60%",
//             isLoss: true,
//         }
//     ];

//     tempHoldings.forEach((item) => {
//         let newHolding = new HoldingsModel({
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.day,
//             day: item.day,
//         });

//         newHolding.save();
//     });
//     res.send("Done!");
// })

// app.get("/addpositions", async (req, res) => {
//     await PositionsModel.deleteMany({})
//     const tempPositions = [
//         {
//             product: "CNC",
//             name: "EVEREADY",
//             qty: 2,
//             avg: 316.27,
//             price: 312.35,
//             net: "+0.58%",
//             day: "-1.24%",
//             isLoss: true,
//         },
//         {
//             product: "Tata",
//             name: "UBLkOOD",
//             qty: 3,
//             avg: 2124.75,
//             price: 4082.65,
//             net: "+9.04%",
//             day: "-1.35%",
//             isLoss: true,
//         },
//         {
//             product: "CNC",
//             name: "JUBLFOOD",
//             qty: 1,
//             avg: 3124.75,
//             price: 3082.65,
//             net: "+10.04%",
//             day: "-1.35%",
//             isLoss: true,
//         },
//     ];

//     tempPositions.forEach((item) => {
//         let newPositions = new PositionsModel({
//             product: item.product,
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//             isLoss: item.isLoss,
//         });
//         newPositions.save();
//     })
//     res.send("Positions is saved");
// })
// Start server

app.get("/allholdings",async (req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get("/allpositions", async (req, res) => {
    let allpositions = await PositionsModel.find({});
    res.json(allpositions);
})

app.post("/newOrder", async (req, res) => {
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });

    newOrder.save();

    res.send("Order saved!");
});

app.get("/order", async(req, res) => {
    const allorder = await OrdersModel.find({});
    res.json(allorder);
    res.send("This is order");
})

// Routes Import
const authRoutes = require("./routes/authRoute");
app.use(express.json()); // Add this to parse JSON bodies
app.use("/", authRoutes); // Direct path


app.get("/", (req, res) => {
    res.send("Root is working");
})

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
