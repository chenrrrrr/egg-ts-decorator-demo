type ThttpMethod = "GET" | "POST";

interface IRouteMeta {
  clazz: any;
  clazzName: string;
  httpMethodType: ThttpMethod;
  handlerName: string;
}

interface IRouteHub {
  [key: string]: IRouteMeta;
}

// 收集Get、Post等http请求装饰器
export const routeHub: IRouteHub = {};
