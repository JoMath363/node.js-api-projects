import projectRoute from "./projectRoute.js";
import taskRoute from "./taskRoute.js";

const router = (app) => {
  app.use("/", projectRoute);
  app.use("/", taskRoute);
};

export default router;