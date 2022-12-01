import React from "react";
import { Tile } from "../Tile";

export function Grid7() {
  return (
    <>
      <Tile
        gridColumn={19}
        gridColumnSpan={6}
        gridRow={1}
        gridRowSpan={8}
        imgSrc="/images/car31.jpg"
      />
      <Tile
        gridColumn={13}
        gridColumnSpan={6}
        gridRow={5}
        gridRowSpan={4}
        imgSrc="/images/car35.jpg"
      />
      <Tile
        gridColumn={13}
        gridColumnSpan={6}
        gridRow={1}
        gridRowSpan={4}
        imgSrc="/images/car41.jpg"
      />
      <Tile
        gridColumn={1}
        gridColumnSpan={12}
        gridRow={1}
        gridRowSpan={6}
        imgSrc="/images/car42.jpg"
      />
      <Tile
        gridColumn={13}
        gridColumnSpan={7}
        gridRow={9}
        gridRowSpan={4}
        imgSrc="/images/car43.jpg"
      />
      <Tile
        gridColumn={1}
        gridColumnSpan={12}
        gridRow={7}
        gridRowSpan={6}
        imgSrc="/images/car44.jpg"
      />
      <Tile
        gridColumn={20}
        gridColumnSpan={5}
        gridRow={9}
        gridRowSpan={4}
        imgSrc="/images/car45.jpg"
      />
    </>
  );
}
