function handle404(req, res, next) {
   res.status(404).send("Path Not Found. Try a valid request.");
}

export default handle404;