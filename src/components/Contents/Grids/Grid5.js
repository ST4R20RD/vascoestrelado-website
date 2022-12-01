import React from "react";
import { Tile } from "../Tile";

export function Grid5() {
  return (
    <>
      <Tile
        gridColumn={10}
        gridColumnSpan={5}
        gridRow={9}
        gridRowSpan={4}
        imgSrc="/images/car26.jpg"
      />
      <Tile
        gridColumn={15}
        gridColumnSpan={10}
        gridRow={1}
        gridRowSpan={8}
        imgSrc="/images/car27.jpg"
      />
      <Tile
        gridColumn={1}
        gridColumnSpan={9}
        gridRow={9}
        gridRowSpan={4}
        imgSrc="/images/car28.jpg"
      />
      <Tile
        gridColumn={1}
        gridColumnSpan={14}
        gridRow={1}
        gridRowSpan={8}
        imgSrc="/images/car29.jpg"
      />
      <Tile
        gridColumn={15}
        gridColumnSpan={10}
        gridRow={9}
        gridRowSpan={4}
        imgSrc="/images/car30.jpg"
      />
    </>
  );
}
