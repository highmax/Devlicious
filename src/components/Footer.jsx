import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: center;
`;

function Footer() {
  return (
    <Container>
      <p>© 2022</p>
    </Container>
  );
}

export default Footer;
