import authRouter from "./auth";
import insertRouter from "./insert.js";
import categoryRouter from "./category.js";
import postRouter from "./post.js";

const initRoutes = (app) => {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/insert", insertRouter);
  app.use("/api/v1/category", categoryRouter);
  app.use("/api/v1/post", postRouter);

  return app.use("/", (req, res) => {
    res.send("server on ....");
  });
};

export default initRoutes;
