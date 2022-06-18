import { memo } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { splideOptions } from "../constants";
import Card from "./Card";
import styled from "styled-components";
import Loading from "./Loading";

const Heading = styled.h3`
  margin: 1rem 0;
  font-weight: 300;
`;

const SliderWrapper = styled.div`
  margin: 3rem 0;
  min-height: 18rem;
  position: relative;

  .splide__dots-container {
    bottom: -2rem;

    .splide__pagination__page.is-active {
      background: #414141;
    }
  }
`;

function Slider({ title, perPage = 4, items, loading }) {
  return (
    <SliderWrapper>
      {loading && <Loading />}
      <Heading>{title}</Heading>
      <Splide options={{ ...splideOptions, perPage }}>
        {items &&
          items.length &&
          items.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card
                  id={recipe.id}
                  title={recipe.title}
                  image={recipe.image}
                />
              </SplideSlide>
            );
          })}
      </Splide>
    </SliderWrapper>
  );
}

export default memo(Slider);
