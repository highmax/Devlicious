import { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  .card__image {
    border-radius: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card__title {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
  }

  .card__gradient {
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  }
`;

function Card({ id, title, image }) {
  return (
    <Box>
      <Link to={`/recipe/${id}`}>
        <h3 className="card__title">{title}</h3>
        <img className="card__image" src={image} alt={title} />
        <div className="card__gradient"></div>
      </Link>
    </Box>
  );
}

export default memo(Card);
