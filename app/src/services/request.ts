import { extend } from "umi-request";

const request = extend({
  prefix: "http://localhost:8080/api",
  timeout: 1000,
});

export default request;
