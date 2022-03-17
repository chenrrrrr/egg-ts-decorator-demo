import { routeHub } from "./hub";

/**
 * @param {string} path api 前缀
 */
export const Get = (path: string): MethodDecorator => {
  /**
   * @param {BaseContextClass} target 方法装饰所属类
   * @param {string} 控制器方法名
   */
  return (target: any, handlerName: any) => {
    const proto = target.constructor;
    // 把元信息存到routeHub中，key就是接口 api 前缀
    routeHub[path] = {
      clazz: proto,
      clazzName: proto.name,
      httpMethodType: "GET",
      handlerName,
    };
  };
};
