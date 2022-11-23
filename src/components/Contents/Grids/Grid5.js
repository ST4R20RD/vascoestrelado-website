import React from "react";
import { Tile } from "../Tile";

export function Grid5() {
  return (
    <>
      <Tile gridColumn={10} gridColumnSpan={5} gridRow={9} gridRowSpan={4}>
        <img src="/images/car26.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={15} gridColumnSpan={10} gridRow={1} gridRowSpan={8}>
        <img src="/images/car27.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={1} gridColumnSpan={9} gridRow={9} gridRowSpan={4}>
        <img src="/images/car28.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={1} gridColumnSpan={14} gridRow={1} gridRowSpan={8}>
        <img src="/images/car29.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={15} gridColumnSpan={10} gridRow={9} gridRowSpan={4}>
        <img src="/images/car30.jpg" alt="car" />
      </Tile>
    </>
  );
}
