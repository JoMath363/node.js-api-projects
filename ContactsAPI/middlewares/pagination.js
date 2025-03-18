async function pagination(req, res, next) {
   try {
      const result = req.result;

      let { limit = 10, page = 1, ordenation = "_id:-1" } = req.query;
      let [field, order] = ordenation.split(":");

      limit = parseInt(limit);
      page = parseInt(page);
      order = parseInt(order);

      const contacts = await result.find()
         .skip((page - 1) * limit)
         .limit(limit)
         .sort({[field]: order});

      res.status(200).send(contacts);
   } catch (error) {
      next(error);
   }
}

export default pagination;