import { Controller } from "egg";
import { Get } from "../owlet/decorator";

export default class DemoController extends Controller {
  @Get("/hi")
  public async index() {
    const { ctx } = this;
    ctx.body = 123;
  }
}
