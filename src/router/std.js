import {Router} from "express";
import stdController from "../controller/std.js";

const stdRouter=new Router();
stdRouter.get("/stdlist", stdController.getAll);
stdRouter.post("/stdpost",stdController.create);
stdRouter.get("/stddelete/:id",stdController.delete);
stdRouter.get("/stdid/:id",stdController.getSingle);
stdRouter.post("/stdupdate/:id",stdController.update);
export default stdRouter;