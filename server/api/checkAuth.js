//checks if user is admin
function isAdmin(req, res, next) {
  if (req.isAuthenticated() && req.user.isAdmin) {
    next()
  } else {
    res.status(404).redirect('/')
  }
}

module.exports = {
  isAdmin
}
