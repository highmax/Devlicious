import styled from "styled-components";
import { BiLoader } from "react-icons/bi";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Loading() {
  return (
    <Overlay>
      <BiLoader />
    </Overlay>
  );
}

export default Loading;
