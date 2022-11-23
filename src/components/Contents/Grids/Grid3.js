import React from "react";
import { Tile } from "../Tile";

export function Grid3() {
  return (
    <>
      <Tile gridColumn={8} gridColumnSpan={9} gridRow={9} gridRowSpan={4}>
        <img src="/images/car12.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={17} gridColumnSpan={8} gridRow={1} gridRowSpan={6}>
        <img src="/images/car15.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={8} gridColumnSpan={9} gridRow={1} gridRowSpan={8}>
        <img src="/images/car16.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={1} gridColumnSpan={7} gridRow={9} gridRowSpan={4}>
        <img src="/images/car18.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={17} gridColumnSpan={8} gridRow={7} gridRowSpan={6}>
        <img src="/images/car19.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={1} gridColumnSpan={7} gridRow={1} gridRowSpan={8}>
        <img src="/images/car20.jpg" alt="car" />
      </Tile>
    </>
  );
}
