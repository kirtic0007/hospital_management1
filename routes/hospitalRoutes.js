const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor'); // Assuming you have a Doctor model

// Route for Home Page
router.get('/', (req, res) => {
  res.render('home');
});

// Route for About Us Page
router.get('/about', (req, res) => {
  res.render('about');
});

// Route for Contact Us Page
router.get('/contact', (req, res) => {
  res.render('contact');
});
// Show appointment form
router.get('/book-appointment', (req, res) => {
  res.render('bookAppointment');
});

// Handle appointment submission
router.post('/appointments', (req, res) => {
  const { name, email, phone, date, department, message } = req.body;

  // TODO: Save to MongoDB (optional)
  console.log('New appointment booked:', req.body);

  res.send(`<h2>Thank you, ${name}! Your appointment for ${date} has been booked.</h2>`);
});


router.get('/doctors', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.render('doctors', { doctors });
  } catch (err) {
    console.error('Error fetching doctors:', err);
    res.status(500).send('Internal Server Error');
  }
});





// Route for Login Page
router.get('/login', (req, res) => {
  res.render('login');
});

// Route for Dashboard
router.get('/dashboard', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.render('dashboard', { doctors });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});
// Show register page
router.get('/register', (req, res) => {
  res.render('register');
});

// Handle registration
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  // You should hash the password and save user to database
  // Example only:
  try {
    const user = new User({ name, email, password }); // Add bcrypt for real app
    await user.save();
    res.redirect('/login');
  } catch (err) {
    console.error(err);
    res.send('Error registering user.');
  }
});
// Show appointment form
router.get('/appointment', (req, res) => {
  res.render('appointment'); // This refers to views/appointment.ejs
});

// Handle appointment form submission
router.post('/appointment', async (req, res) => {
  const { name, email, date, time, doctor, reason } = req.body;

  try {
    // Save to MongoDB (make sure Appointment model is defined)
    const appointment = new Appointment({ name, email, date, time, doctor, reason });
    await appointment.save();
    res.redirect('/dashboard'); // Or show success page
  } catch (err) {
    console.error('Error saving appointment:', err);
    res.status(500).send('Something went wrong');
  }
});



module.exports = router;
