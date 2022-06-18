import { BASE_URL } from "../constants";

const getURL = (options = {}) => {
  const { params } = options;
  let baseUrl = `${BASE_URL}/random/?apiKey=${process.env.REACT_APP_API_KEY}&number=9`;
  if (params) {
    baseUrl = `${baseUrl}&${params}`;
  }
  return baseUrl;
};

export const getTrending = async () => {
  try {
    const trendingRequest = await fetch(getURL());
    const veggiesRequest = await fetch(getURL({ params: "tags=vegetarian" }));

    const trending = await trendingRequest.json();
    const veggies = await veggiesRequest.json();

    return { trending: trending.recipes, veggies: veggies.recipes };
  } catch (error) {
    console.error(error);
  }
};
