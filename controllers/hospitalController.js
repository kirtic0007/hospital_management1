let doctors = [];

exports.dashboard = (req, res) => {
  res.render('dashboard', { doctors });
};

exports.addDoctorForm = (req, res) => {
  res.render('add-doctor');
};

exports.addDoctor = (req, res) => {
  const { name, specialization, image } = req.body;
  doctors.push({ name, specialization, image });
  res.redirect('/');
};
