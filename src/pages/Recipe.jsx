import { useEffect, useState, useMemo, useCallback } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getRecipe } from "../services";
import useApi from "../hooks/useApi";
import Loading from "../components/Loading";

const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  position: relative;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h2 {
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 600;
  }

  li {
    font-size: 0.9rem;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
`;

const Info = styled.div`
  margin-left: 5rem;
`;

const RecipeImg = styled.div`
  min-width: 34rem;
`;

function Recipe() {
  const [activeTab, setActiveTab] = useState("instructions");
  const recipe = useApi(getRecipe);
  const { id } = useParams();

  useEffect(() => {
    recipe.request({ id });
  }, [id]);

  const onClickInstruction = useCallback(() => {
    setActiveTab("instructions");
  }, []);

  const onClickIngredients = useCallback(() => {
    setActiveTab("ingredients");
  }, []);

  const instructionsProps = useMemo(
    () => ({
      className: activeTab === "instructions" ? "active" : "",
      onClick: onClickInstruction,
    }),
    [activeTab, onClickInstruction]
  );

  const ingredientsProps = useMemo(
    () => ({
      className: activeTab === "ingredients" ? "active" : "",
      onClick: onClickIngredients,
    }),
    [activeTab, onClickIngredients]
  );

  return (
    <DetailWrapper>
      {recipe.loading && <Loading />}
      <RecipeImg>
        <h2>{recipe?.data?.title}</h2>
        <img src={recipe?.data?.image} alt={recipe?.data?.title} />
      </RecipeImg>
      <Info>
        <Button {...instructionsProps}>Instructions</Button>
        <Button {...ingredientsProps}>Ingredients</Button>
        {activeTab === "instructions" && (
          <div>
            <h3
              dangerouslySetInnerHTML={{ __html: recipe?.data?.summary }}
            ></h3>
            <h3
              dangerouslySetInnerHTML={{ __html: recipe?.data?.instructions }}
            ></h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {recipe?.data?.extendedIngredients.map((ingredient) => {
              return <li key={ingredient?.id}>{ingredient?.original}</li>;
            })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

export default Recipe;
