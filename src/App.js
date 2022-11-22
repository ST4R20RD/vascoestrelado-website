import styled from "styled-components";
import "./App.css";
import { Navbar, Contents } from "./components";

function App() {
  return (
    <AppContainer>
      <Contents />
      <Navbar />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  background-color: black;
  height: 100vh;
`;
