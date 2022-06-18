import { BASE_URL } from "../constants";

export const getCuisine = async ({ type = "italian" }) => {
  try {
    const response = await fetch(
      `${BASE_URL}/complexSearch/?apiKey=${process.env.REACT_APP_API_KEY}&number=12&cuisine=${type}`
    );
    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error(error);
  }
};
