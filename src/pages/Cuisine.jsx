import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import { getCuisine } from "../services";
import Card from "../components/Card";
import Grid from "../components/Grid";
import Loading from "../components/Loading";
import EmptyScreen from "../components/EmptyScreen";

function Cuisine() {
  const cuisine = useApi(getCuisine);
  const { type } = useParams();

  useEffect(() => {
    cuisine.request({ type });
  }, [type]);

  console.log(cuisine);

  return (
    <>
      {cuisine.loading && <Loading />}
      {(!cuisine?.data || cuisine.error) && (
        <EmptyScreen
          renderMessage={() => (
            <>
              <h3>Oh no! The results were eaten.</h3>
              <span>try looking for other recipes</span>
            </>
          )}
        />
      )}
      <Grid>
        {cuisine?.data &&
          cuisine.data.length > 0 &&
          cuisine.data.map(({ id, title, image }) => (
            <Card key={id} id={id} title={title} image={image}></Card>
          ))}
      </Grid>
    </>
  );
}

export default Cuisine;
