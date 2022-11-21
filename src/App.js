import styled from "styled-components";
import "./App.css";
import { Navbar } from "./components";

function App() {
  return (
    <AppContainer>
      <Navbar />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  background-color: black;
  height: 100vh;
`;
