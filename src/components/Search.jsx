import { memo } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Form = styled.form`
  div {
    position: relative;
    width: 100%;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    outline: none;
    border-radius: 1rem;
    padding: 0.5rem 3rem;
    color: white;
    width: 100%;
    font-size: 1rem;
  }

  svg {
    color: white;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(100%, -50%);
  }
`;

function Search() {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/searched/${inputRef.current.value}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <FaSearch />
        <input type="text" ref={inputRef} placeholder="Search" />
      </div>
    </Form>
  );
}

export default memo(Search);
