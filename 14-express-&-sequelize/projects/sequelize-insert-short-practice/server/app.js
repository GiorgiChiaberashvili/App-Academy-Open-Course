// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

// Error handling, env variables, and json middleware - DO NOT MODIFY
require('express-async-errors');
require('dotenv').config();
app.use(express.json());

// Import the models used in these routes - DO NOT MODIFY
const { Puppy } = require('./db/models');

// Index of all puppies - DO NOT MODIFY
app.get('/puppies', async (req, res, next) => {
    const allPuppies = await Puppy.findAll({ order: [['name', 'ASC']] });

    res.json(allPuppies);
});


// STEP 1
// Capture the name, ageYrs, breed, weightLbs, and microchipped attributes
// from the body of the request.
// Use these values to BUILD a new Puppy in the database.
// Respond to the request by sending a success message
app.post('/puppies/build', async (req, res, next) => {
    // Your code here
    const { name, ageYrs, breed, weightLbs, microchipped } = req.body;

    const puppy = new Puppy({
        name,
        ageYrs,
        breed,
        weightLbs,
        microchipped
    });

    try {
        const savedPuppy = await puppy.save(); // save the new Puppy record to the database
        res.status(201).json({ message: 'Puppy record created successfully', data: savedPuppy }); // return a JSON response indicating success and the newly created Puppy record
    } catch (err) {
        res.status(500).json({ message: 'Error creating Puppy record', error: err }); // handle any errors that occur during saving
    }

})

// STEP 2
// Capture the name, ageYrs, breed, weightLbs, and microchipped attributes
// from the body of the request.
// Use these values to CREATE a new Puppy in the database.
// Respond to the request by sending a success message
app.post('/puppies/create', async (req, res, next) => {
    // Your code here
    try {
        const puppy = await Puppy.create({
            name: req.body.name,
            age_yrs: req.body.age_yrs,
            breed: req.body.breed,
            weight_lbs: req.body.weight_lbs,
            microchipped: req.body.microchipped
        });
        res.json({ message: 'Puppy successfully build and saved to the database', data: puppy })
    } catch (error) {
        console.error('Error creating and saving puppy:', error);
        res.status(500).json({ message: 'Error creating puppy.' });
    }
})


// Root route - DO NOT MODIFY
app.get('/', (req, res) => {
    res.json({
        message: "API server is running"
    });
});

// Set port and listen for incoming requests - DO NOT MODIFY
if (require.main === module) {
    const port = 8000;
    app.listen(port, () => console.log('Server is listening on port', port));
} else {
    module.exports = app;
}
