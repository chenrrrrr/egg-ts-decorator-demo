import { Application, Context } from "egg";
import { routeHub } from "./hub";

/**
 * @param {string} prefix 项目全局api前缀
 */
interface IOptions {
  prefix?: string;
}

export const Bootstrap = (app: Application, options?: IOptions) => {
  const { router } = app;
  // 1. 项目全局api 前缀
  const globalPrefix = options?.prefix;

  // 2. 注册路由
  Object.keys(routeHub).forEach((apiPrefix: string) => {
    const { clazz, httpMethodType, handlerName } = routeHub[apiPrefix];
    // 拼接完成的 api 前缀
    const fullPrefix = globalPrefix + apiPrefix;
    // 使用 router 对象添加 route
    router[httpMethodType.toLowerCase()](fullPrefix, async (ctx: Context) => {
      // 类的示例构造方法传入ctx对象
      const instance = new clazz(ctx);
      // 类的成员方法同步执行
      await instance[handlerName]();
    });
  });
};