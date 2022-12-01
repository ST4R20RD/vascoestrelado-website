import React from "react";
import { Tile } from "../Tile";

export function Grid2() {
  return (
    <>
      <Tile
        gridColumn={7}
        gridColumnSpan={11}
        gridRow={5}
        gridRowSpan={8}
        imgSrc="/images/car8.jpg"
      />
      <Tile
        gridColumn={18}
        gridColumnSpan={7}
        gridRow={1}
        gridRowSpan={6}
        imgSrc="/images/car9.jpg"
      />
      <Tile
        gridColumn={7}
        gridColumnSpan={11}
        gridRow={1}
        gridRowSpan={4}
        imgSrc="/images/car10.jpg"
      />
      <Tile
        gridColumn={1}
        gridColumnSpan={6}
        gridRow={1}
        gridRowSpan={6}
        imgSrc="/images/car11.jpg"
      />

      <Tile
        gridColumn={18}
        gridColumnSpan={7}
        gridRow={7}
        gridRowSpan={6}
        imgSrc="/images/car13.jpg"
      />
      <Tile
        gridColumn={1}
        gridColumnSpan={6}
        gridRow={7}
        gridRowSpan={6}
        imgSrc="/images/car14.jpg"
      />
    </>
  );
}
