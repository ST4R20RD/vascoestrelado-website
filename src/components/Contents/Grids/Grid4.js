import React from "react";
import { Tile } from "../Tile";

export function Grid4() {
  return (
    <>
      <Tile
        gridColumn={18}
        gridColumnSpan={7}
        gridRow={1}
        gridRowSpan={4}
        imgSrc="/images/car17.jpg"
      />
      <Tile
        gridColumn={10}
        gridColumnSpan={5}
        gridRow={9}
        gridRowSpan={4}
        imgSrc="/images/car21.jpg"
      />
      <Tile
        gridColumn={1}
        gridColumnSpan={9}
        gridRow={9}
        gridRowSpan={4}
        imgSrc="/images/car22.jpg"
      />
      <Tile
        gridColumn={1}
        gridColumnSpan={14}
        gridRow={1}
        gridRowSpan={8}
        imgSrc="/images/car23.jpg"
      />
      <Tile
        gridColumn={15}
        gridColumnSpan={10}
        gridRow={5}
        gridRowSpan={8}
        imgSrc="/images/car24.jpg"
      />
      <Tile
        gridColumn={15}
        gridColumnSpan={3}
        gridRow={1}
        gridRowSpan={4}
        imgSrc="/images/car25.jpg"
      />
    </>
  );
}
