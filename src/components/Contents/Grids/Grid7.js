import React from "react";
import { Tile } from "../Tile";

export function Grid7() {
  return (
    <>
      <Tile gridColumn={19} gridColumnSpan={6} gridRow={1} gridRowSpan={8}>
        <img src="/images/car31.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={13} gridColumnSpan={6} gridRow={5} gridRowSpan={4}>
        <img src="/images/car35.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={13} gridColumnSpan={6} gridRow={1} gridRowSpan={4}>
        <img src="/images/car41.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={1} gridColumnSpan={12} gridRow={1} gridRowSpan={6}>
        <img src="/images/car42.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={13} gridColumnSpan={7} gridRow={9} gridRowSpan={4}>
        <img src="/images/car43.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={1} gridColumnSpan={12} gridRow={7} gridRowSpan={6}>
        <img src="/images/car44.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={20} gridColumnSpan={5} gridRow={9} gridRowSpan={4}>
        <img src="/images/car45.jpg" alt="car" />
      </Tile>
    </>
  );
}
