import { Application } from "egg";
import { Bootstrap } from "./owlet";

export default (app: Application) => {
  Bootstrap(app, { prefix: "/owlet" });
};
