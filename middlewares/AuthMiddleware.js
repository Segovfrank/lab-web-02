exports.isAuth = (req, res, next) => {
  console.log("Is Auth?");
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).json({ msg: 'You are not authorized to view this resource' });
  }
}

exports.isAdmin = (req, res, next) => {
  if(!req.isAuthenticated()){
    res.status(403).json({ msg: 'Error 403: Not authorized to view this resource.' });
  }else{
    let user = req.user
    console.log("Checking if admin? " + user.role_id);
    if(user.role_id == 3){
      next();
    }else{
      res.status(403).json({ msg: 'Error 403: Not authorized to view this resource.' , status: 403});
    }
  }

}

exports.isUserOrAdmin = (req, res, next) => {
  if(!req.isAuthenticated()){
    res.redirect('/register');
  }
  let user = req.user
  if(user.role_id == 3 || user.role_id == 2){
    next();
  }else{
    //res.status(401).json({ msg: 'You are not authorized to view this resource' });
    res.redirect('/register');

  }
}

