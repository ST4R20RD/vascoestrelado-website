import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Grid1,
  Grid2,
  Grid3,
  Grid4,
  Grid5,
  Grid6,
  Grid7,
  Grid8,
} from "./Grids";

export function Contents() {
  const [randomGrid, setRandomGrid] = useState(1);

  const pickRandom = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    console.log(array[Math.floor(Math.random() * array.length)]);
    return setRandomGrid(array[Math.floor(Math.random() * array.length)]);
  };

  useEffect(() => {
    pickRandom();
  }, []);

  return (
    <Container>
      {randomGrid === 1 && <Grid1 />}
      {randomGrid === 2 && <Grid2 />}
      {randomGrid === 3 && <Grid3 />}
      {randomGrid === 4 && <Grid4 />}
      {randomGrid === 5 && <Grid5 />}
      {randomGrid === 6 && <Grid6 />}
      {randomGrid === 7 && <Grid7 />}
      {randomGrid === 8 && <Grid8 />}
    </Container>
  );
}

const ROWS = 12;
const COLUMNS = 24;
const GAP = "0.5rem";

const Container = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  gap: ${GAP};
  grid-template-columns: repeat(${COLUMNS}, 1fr);
  grid-template-rows: repeat(${ROWS}, 1fr);
  overflow: hidden;
`;
