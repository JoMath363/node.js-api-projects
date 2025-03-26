function handleErrors (error, req, res, next) {
  res.status(500).send({ message: error.message });
}

export default handleErrors;