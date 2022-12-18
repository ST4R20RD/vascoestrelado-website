import React from "react";
import { Tile } from "../Tile";

export function Grid1() {
  return (
    <>
      <Tile
        gridColumn={1}
        gridColumnSpan={12}
        gridRow={1}
        gridRowSpan={8}
        imgSrc="/images/car1.jpg"
      />
      <Tile
        gridColumn={19}
        gridColumnSpan={6}
        gridRow={5}
        gridRowSpan={4}
        imgSrc="/images/car2.jpg"
      />
      <Tile
        gridColumn={13}
        gridColumnSpan={6}
        gridRow={5}
        gridRowSpan={4}
        imgSrc="/images/car3.jpg"
      />
      <Tile
        gridColumn={1}
        gridColumnSpan={12}
        gridRow={9}
        gridRowSpan={4}
        imgSrc="/images/car4.jpg"
      />
      <Tile
        gridColumn={13}
        gridColumnSpan={12}
        gridRow={1}
        gridRowSpan={4}
        imgSrc="/images/car5.jpg"
      />
      <Tile
        gridColumn={13}
        gridColumnSpan={12}
        gridRow={9}
        gridRowSpan={4}
        imgSrc="/images/car6.jpg"
      />
    </>
  );
}
