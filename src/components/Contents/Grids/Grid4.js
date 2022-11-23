import React from "react";
import { Tile } from "../Tile";

export function Grid4() {
  return (
    <>
      <Tile gridColumn={18} gridColumnSpan={7} gridRow={1} gridRowSpan={4}>
        <img src="/images/car17.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={10} gridColumnSpan={5} gridRow={9} gridRowSpan={4}>
        <img src="/images/car21.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={1} gridColumnSpan={9} gridRow={9} gridRowSpan={4}>
        <img src="/images/car22.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={1} gridColumnSpan={14} gridRow={1} gridRowSpan={8}>
        <img src="/images/car23.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={15} gridColumnSpan={10} gridRow={5} gridRowSpan={8}>
        <img src="/images/car24.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={15} gridColumnSpan={3} gridRow={1} gridRowSpan={4}>
        <img src="/images/car25.jpg" alt="car" />
      </Tile>
    </>
  );
}
