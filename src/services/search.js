import { BASE_URL } from "../constants";

export const getSearched = async ({ query }) => {
  try {
    const response = await fetch(
      `${BASE_URL}/complexSearch/?apiKey=${process.env.REACT_APP_API_KEY}&number=12&query=${query}`
    );
    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error(error);
  }
};
