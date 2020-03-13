const userModel = require('../models/User');


exports.index = (req, res) => {
  let user = req.user;
  //console.log(user);
  userModel.getUserRole(user.id)
  .then((data) => {
    console.log(data)
    res.render('dashboard/index', {user: user, role: data[0].role});
  })
  .catch((error) => console.log(error));
}
