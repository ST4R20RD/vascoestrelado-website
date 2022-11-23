import React from "react";
import { Tile } from "../Tile";

export function Grid1() {
  return (
    <>
      <Tile gridColumn={1} gridColumnSpan={12} gridRow={1} gridRowSpan={8}>
        <img src="/images/car1.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={19} gridColumnSpan={6} gridRow={5} gridRowSpan={4}>
        <img src="/images/car2.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={13} gridColumnSpan={6} gridRow={5} gridRowSpan={4}>
        <img src="/images/car3.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={1} gridColumnSpan={12} gridRow={9} gridRowSpan={4}>
        <img src="/images/car4.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={13} gridColumnSpan={12} gridRow={1} gridRowSpan={4}>
        <img src="/images/car5.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={13} gridColumnSpan={12} gridRow={9} gridRowSpan={4}>
        <img src="/images/car6.jpg" alt="car" />
      </Tile>
    </>
  );
}
