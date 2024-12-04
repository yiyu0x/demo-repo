const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB 
mongoose.connect("mongodb://mongo:27017/itineraryDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create MongoDB Schema
const ItinerarySchema = new mongoose.Schema({
  name: String,
  review_stars: Number,
  suggested_time: String,
  price: String,
  ai_generated: Boolean,
  image: String,
});

const Itinerary = mongoose.model("Itinerary", ItinerarySchema);

// API Routes
// POST /itinerary
app.post("/itinerary", async (req, res) => {
  try {
    const { name, review_stars, suggested_time, price, ai_generated, image } = req.body;

    const newItinerary = new Itinerary({
      name,
      review_stars,
      suggested_time,
      price,
      ai_generated,
      image,
    });

    await newItinerary.save();
    res.status(201).json({ message: "Itinerary added successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /itinerary
app.get("/itinerary", async (req, res) => {
  try {
    const itineraries = await Itinerary.find();
    res.status(200).json(itineraries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /itinerary/:id
app.get("/itinerary/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const itinerary = await Itinerary.findById(id);

    if (!itinerary) {
      return res.status(404).json({ message: "Itinerary not found" });
    }

    res.status(200).json(itinerary);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Run API Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});