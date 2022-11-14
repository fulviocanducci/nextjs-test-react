import axios from "axios";
import https from "https";

const request = axios.create({
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
});

export default request;
