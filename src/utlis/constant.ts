import { getBaseUrl } from "../../config";


const baseUrl = getBaseUrl();

export default {
  loginUrl: `${baseUrl}/login`,
  homeUrl: `${baseUrl}/`,
};
 // https://automationexercise.com/login         >> loginUrl
 // https://automationexercise.com/               >> homeUrl 