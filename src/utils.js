import { genreMap } from "./constants/constants";

export const getGenreFromGenreIds = (genreIdsArr) => {
  let res = [];
  for (let i = 0; i < genreIdsArr.length; i++) {
    res.push(genreMap[genreIdsArr[i]]);
  }
  return res.join(", ");
};
