import { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import AdviceGenerator from "./components/AdviceGenerator";

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const App = () => {
  const [mobile, setMobile] = useState(false);

  function handleResize() {
    if (window.innerWidth <= 600) setMobile(true);
    else setMobile(false);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <AppContainer>
      <GlobalStyle />
      <AdviceGenerator mobile={mobile} />
    </AppContainer>
  );
};

export default App;
