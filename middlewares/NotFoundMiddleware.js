function handleNotFound(req, res, next) {
  res.status(404);
  res.render("404", { title: "Page Not Found" });
}

module.exports = handleNotFound;
