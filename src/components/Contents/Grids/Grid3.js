import React from "react";
import { Tile } from "../Tile";

export function Grid3() {
  return (
    <>
      <Tile
        gridColumn={8}
        gridColumnSpan={9}
        gridRow={9}
        gridRowSpan={4}
        imgSrc="/images/car12.jpg"
      />
      <Tile
        gridColumn={17}
        gridColumnSpan={8}
        gridRow={1}
        gridRowSpan={6}
        imgSrc="/images/car15.jpg"
      />
      <Tile
        gridColumn={8}
        gridColumnSpan={9}
        gridRow={1}
        gridRowSpan={8}
        imgSrc="/images/car16.jpg"
      />
      <Tile
        gridColumn={1}
        gridColumnSpan={7}
        gridRow={9}
        gridRowSpan={4}
        imgSrc="/images/car18.jpg"
      />
      <Tile
        gridColumn={17}
        gridColumnSpan={8}
        gridRow={7}
        gridRowSpan={6}
        imgSrc="/images/car19.jpg"
      />
      <Tile
        gridColumn={1}
        gridColumnSpan={7}
        gridRow={1}
        gridRowSpan={8}
        imgSrc="/images/car20.jpg"
      />
    </>
  );
}
