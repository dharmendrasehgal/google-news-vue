import axios from "axios";
import store from "../store";
import constants from "../config";

export default (country, category, mutationRef) => {
  const countryStr = country ? "?country=" + country : "",
    categoryStr = category ? "&category=" + category : "",
    apiKeyStr = constants.apiKey ? "&apiKey=" + constants.apiKey : "";

  const apiUrl = constants.baseUrl + countryStr + categoryStr + apiKeyStr;
  return axios
    .get(apiUrl)
    .then(res => {
      let data = res.data.articles;
      store.commit(mutationRef, data);
    })
    .catch(err => {
      console.log("Error in API!", err);
    });
};
