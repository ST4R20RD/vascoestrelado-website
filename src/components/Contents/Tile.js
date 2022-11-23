import styled from "styled-components";

export const Tile = styled.div`
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
