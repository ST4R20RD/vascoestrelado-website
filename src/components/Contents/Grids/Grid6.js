import React from "react";
import { Tile } from "../Tile";

export function Grid6() {
  return (
    <>
      <Tile gridColumn={19} gridColumnSpan={6} gridRow={1} gridRowSpan={8}>
        <img src="/images/car37.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={1} gridColumnSpan={9} gridRow={1} gridRowSpan={8}>
        <img src="/images/car32.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={10} gridColumnSpan={5} gridRow={6} gridRowSpan={3}>
        <img src="/images/car33.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={1} gridColumnSpan={9} gridRow={9} gridRowSpan={4}>
        <img src="/images/car34.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={10} gridColumnSpan={9} gridRow={1} gridRowSpan={5}>
        <img src="/images/car38.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={10} gridColumnSpan={5} gridRow={9} gridRowSpan={4}>
        <img src="/images/car36.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={15} gridColumnSpan={4} gridRow={6} gridRowSpan={3}>
        <img src="/images/car39.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={15} gridColumnSpan={10} gridRow={9} gridRowSpan={4}>
        <img src="/images/car40.jpg" alt="car" />
      </Tile>
    </>
  );
}
