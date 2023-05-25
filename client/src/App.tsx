import styled from "styled-components";
import tw from "twin.macro";
import "./App.css";
import { HomePage } from "./app/containers/main/main";

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
    background-color[#f6f6f6]
  `};
`;

function App() {
  return (
    <AppContainer>
      <HomePage />
    </AppContainer>
  );
}

export default App;
