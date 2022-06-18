import { useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "../components/Slider";
import useApi from "../hooks/useApi";
import { getTrending } from "../services";
import EmptyScreen from "../components/EmptyScreen";
import Loading from "../components/Loading";

function Home() {
  const recipes = useApi(getTrending);
  const getRecipes = useCallback(() => recipes.request(), [recipes]);

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      {recipes.loading && <Loading />}
      {!recipes.data && (
        <EmptyScreen
          renderMessage={() => (
            <>
              <h3>Oops! We couldn't find the recipes you're looking for.</h3>
            </>
          )}
        />
      )}
      {recipes.data && (
        <>
          <Slider
            title="Veggies picks"
            perPage={3}
            items={recipes.data?.trending}
            loading={recipes.loading}
          />
          <Slider
            title="Trending picks"
            perPage={4}
            items={recipes.data?.veggies}
            loading={recipes.loading}
          />
        </>
      )}
    </motion.div>
  );
}

export default Home;
