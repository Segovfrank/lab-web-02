const userModel = require('../models/User');


exports.index = (req, res) => {
  //console.log(user);
  userModel.getUsersWithRoles()
  .then((data) => {
    console.log(data[0])
    res.render('dashboard/userIndex', {users: data[0]});
  })
  .catch((error) => console.log(error));
}
