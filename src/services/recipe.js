import { BASE_URL } from "../constants";

export const getRecipe = async ({ id }) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${id}/information/?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
