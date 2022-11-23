import React from "react";
import { Tile } from "../Tile";

export function Grid8() {
  return (
    <>
      <Tile gridColumn={1} gridColumnSpan={10} gridRow={1} gridRowSpan={6}>
        <img src="/images/car46.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={11} gridColumnSpan={7} gridRow={1} gridRowSpan={6}>
        <img src="/images/car47.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={18} gridColumnSpan={7} gridRow={1} gridRowSpan={12}>
        <img src="/images/car48.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={1} gridColumnSpan={10} gridRow={7} gridRowSpan={6}>
        <img src="/images/car49.jpg" alt="car" />
      </Tile>
      <Tile gridColumn={11} gridColumnSpan={7} gridRow={7} gridRowSpan={6}>
        <img src="/images/car50.jpg" alt="car" />
      </Tile>
    </>
  );
}
