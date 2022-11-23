import styled from "styled-components";
import "./App.css";
import { Navbar, Contents } from "./components";
import { Routes, Route } from "react-router-dom";
import { Profile } from "./pages";

function App() {
  return (
    <AppContainer>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Contents />
              <Navbar position="bottom" />
            </>
          }
        />
        <Route
          path="/Profile"
          element={
            <>
              <Navbar position="top" />
              <Profile />
            </>
          }
        />
      </Routes>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100vh;
  overflow-x: hidden;
`;
