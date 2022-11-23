import React from "react";
import { Tile } from "../Tile";

export function Grid2() {
  return (
    <>
      <Tile gridColumn={7} gridColumnSpan={11} gridRow={5} gridRowSpan={8}>
        <img src="/images/car8.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={18} gridColumnSpan={7} gridRow={1} gridRowSpan={6}>
        <img src="/images/car9.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={7} gridColumnSpan={11} gridRow={1} gridRowSpan={4}>
        <img src="/images/car10.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={1} gridColumnSpan={6} gridRow={1} gridRowSpan={6}>
        <img src="/images/car11.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={18} gridColumnSpan={7} gridRow={7} gridRowSpan={6}>
        <img src="/images/car13.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={1} gridColumnSpan={6} gridRow={7} gridRowSpan={6}>
        <img src="/images/car14.jpg" alt="car" />
      </Tile>
    </>
  );
}
