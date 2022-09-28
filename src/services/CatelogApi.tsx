import Apisauce, { getData } from "./Apisauce";

export const getCatalogList = async (offset = 0) => {
  return Apisauce.get(`/pokemon?limit=10&offset=${offset}`).then(getData);
};

export const getCatalogDetail = async (id) => {
  return Apisauce.get(`/pokemon/${id}`).then(getData);
};
