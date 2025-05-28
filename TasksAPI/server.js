import express from "express";
import dotenv from "dotenv";
import router from "./src/routes/index.js";

const app = express();
app.use(express.json());
dotenv.config();

const port = process.env.PORT || 3000;

router(app);

app.listen(port, () => {
  console.log(`listening on https: http://localhost:${port}`);  
});

export default app;

