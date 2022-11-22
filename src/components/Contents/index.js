import React from "react";
import styled from "styled-components";

export function Contents() {
  return (
    <Container>
      <Tile gridColumn={1} gridColumnSpan={12} gridRow={1} gridRowSpan={8}>
        <img src="/images/car1.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={19} gridColumnSpan={6} gridRow={5} gridRowSpan={4}>
        <img src="/images/car2.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={13} gridColumnSpan={6} gridRow={5} gridRowSpan={4}>
        <img src="/images/car3.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={1} gridColumnSpan={12} gridRow={9} gridRowSpan={4}>
        <img src="/images/car4.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={13} gridColumnSpan={12} gridRow={1} gridRowSpan={4}>
        <img src="/images/car5.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={13} gridColumnSpan={12} gridRow={9} gridRowSpan={4}>
        <img src="/images/car6.jpg" alt="car" />
      </Tile>
    </Container>
  );
}

const ROWS = 12;
const COLUMNS = 24;
const GAP = "0.5rem";

const Tile = styled.div`
  ${({ gridColumn, gridColumnSpan, gridRow, gridRowSpan }) => {
    return `
    grid-column: ${gridColumn} / span ${gridColumnSpan};
    grid-row: ${gridRow} / span ${gridRowSpan};
    `;
  }}
  overflow: hidden;
  img {
    filter: grayscale(100%);
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    transform-origin: 50% 50%;
    :hover {
      width: 100%;
      filter: grayscale(0%);
      transition: filter 1s ease;
      transform: scale(1.05);
      transition: transform 0.5s ease;
    }
  }
`;

const Container = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  gap: ${GAP};
  grid-template-columns: repeat(${COLUMNS}, 1fr);
  grid-template-rows: repeat(${ROWS}, 1fr);
  overflow: hidden;
`;
