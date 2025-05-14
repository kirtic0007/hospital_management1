const express = require('express');
const router = express.Router();
const hospitalController = require('../controllers/hospitalController');

router.get('/', hospitalController.dashboard);
router.get('/add-doctor', hospitalController.addDoctorForm);
router.post('/add-doctor', hospitalController.addDoctor);

module.exports = router;
