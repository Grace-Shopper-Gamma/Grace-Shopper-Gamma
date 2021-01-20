//checks if user is admin
function isAdmin(req, res, next) {
  if (req.isAuthenticated() && req.user.isAdmin) {
    next()
  } else {
    res.status(404).redirect('/')
  }
}

function isUser(req, res, next) {
  if (req.user.id !== req.session.passport.user) {
    res.status(404).redirect('/')
  } else {
    next()
  }
}

module.exports = {
  isAdmin,
  isUser
}
