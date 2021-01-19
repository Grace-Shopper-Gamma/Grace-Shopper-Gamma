//checks if user is admin
function isAdmin(req, res, next) {
  if (req.isAuthenticated() && req.user.isAdmin) {
    next()
  } else {
    res.status(404).redirect('/')
  }
}

// you can add another function here that checks if the user is who they say they are
// and add it as middleware for cart editing, etc

module.exports = {
  isAdmin
}
