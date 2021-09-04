import { extend } from "umi-request";

const request = extend({
  prefix: "http://192.168.1.98:8080/api",
  timeout: 3000,
});

export default request;
