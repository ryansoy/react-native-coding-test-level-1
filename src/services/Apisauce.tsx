import apisauce from "apisauce";

const API_BASE_URL = "https://pokeapi.co/api/v2";

const request = apisauce.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export function getData(response) {
  return response.data;
}

export default request;
