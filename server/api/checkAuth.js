//returns true if user is logged in
function checkAuthentication(req, res, next) {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.redirect('/login')
  }
}

//checks if user is admin
function isAdmin(req, res, next) {
  if (req.user.isAdmin) {
    next()
  } else {
    res.redirect('/')
  }
}

module.exports = {
  checkAuthentication,
  isAdmin
}
