import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSearched } from "../services";
import useApi from "../hooks/useApi";
import Card from "../components/Card";
import Grid from "../components/Grid";
import Loading from "../components/Loading";
import EmptyScreen from "../components/EmptyScreen";

function Searched() {
  const results = useApi(getSearched);
  const params = useParams();

  useEffect(() => {
    results.request({ query: params.query });
  }, [params.query]);

  return (
    <>
      {results.loading && <Loading />}
      {(!results?.data || results.error) && (
        <EmptyScreen
          renderMessage={() => (
            <>
              <h3>
                Oh no! There aren't results for <b>{params.query}</b>.
              </h3>
              <span>try looking for other recipes</span>
            </>
          )}
        />
      )}
      <Grid>
        {results?.data &&
          results.data.length > 0 &&
          results.data.map(({ id, title, image }) => (
            <Card key={id} id={id} title={title} image={image}></Card>
          ))}
      </Grid>
    </>
  );
}

export default Searched;
