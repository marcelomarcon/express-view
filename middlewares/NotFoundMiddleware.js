function handleNotFound(req, res, next) {
  res.status(404);
  res.render("404");
}

module.exports = handleNotFound;
