import handleErrors from "./handleErrors.js";

const setMiddlewares = (app) => {
  app.use(handleErrors);
};

export default setMiddlewares;