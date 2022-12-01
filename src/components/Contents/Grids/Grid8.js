import React from "react";
import { Tile } from "../Tile";

export function Grid8() {
  return (
    <>
      <Tile
        gridColumn={1}
        gridColumnSpan={10}
        gridRow={1}
        gridRowSpan={6}
        imgSrc="/images/car46.jpg"
      />
      <Tile
        gridColumn={11}
        gridColumnSpan={7}
        gridRow={1}
        gridRowSpan={6}
        imgSrc="/images/car47.jpg"
      />
      <Tile
        gridColumn={18}
        gridColumnSpan={7}
        gridRow={1}
        gridRowSpan={12}
        imgSrc="/images/car48.jpg"
      />
      <Tile
        gridColumn={1}
        gridColumnSpan={10}
        gridRow={7}
        gridRowSpan={6}
        imgSrc="/images/car49.jpg"
      />
      <Tile
        gridColumn={11}
        gridColumnSpan={7}
        gridRow={7}
        gridRowSpan={6}
        imgSrc="/images/car50.jpg"
      />
    </>
  );
}
