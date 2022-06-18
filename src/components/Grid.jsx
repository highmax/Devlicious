import { motion } from "framer-motion";
import { memo } from "react";
import styled from "styled-components";

const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 3rem;
`;

function Grid({ children }) {
  return (
    <Container
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </Container>
  );
}

export default memo(Grid);
