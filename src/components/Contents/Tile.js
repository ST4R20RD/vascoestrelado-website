import React from "react";
import styled from "styled-components";
import { ImagePopup } from "./ImagePopup";

export function Tile({
  gridColumn,
  gridColumnSpan,
  gridRow,
  gridRowSpan,
  imgSrc,
}) {
  return (
    <Wrapper
      gridColumn={gridColumn}
      gridColumnSpan={gridColumnSpan}
      gridRow={gridRow}
      gridRowSpan={gridRowSpan}
    >
      <ImagePopup>
        <Img src={imgSrc} alt="car" />
      </ImagePopup>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${({ gridColumn, gridColumnSpan, gridRow, gridRowSpan }) => {
    return `
  grid-column: ${gridColumn} / span ${gridColumnSpan};
  grid-row: ${gridRow} / span ${gridRowSpan};
  `;
  }}
  overflow: hidden;
  button {
    padding: 0;
    border: 0;
    width: 100%;
    height: 100%;
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
  }
`;

const Img = styled.img`
  width: auto;
  max-width: 97vw;
  height: auto;
  max-height: 97vh;
`;
