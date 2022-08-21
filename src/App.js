import styled from "styled-components";
import AdviceGenerator from "./components/AdviceGenerator";

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const App = () => {
  return (
    <AppContainer>
      <AdviceGenerator />
    </AppContainer>
  );
};

export default App;
