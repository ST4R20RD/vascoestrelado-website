import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "../Modal";

export function ImagePopup({ children }) {
  const [isPopup, setIsPopup] = useState(false);
  return isPopup ? (
    <Modal setIsOpen={setIsPopup}>
      <Wrapper>{children}</Wrapper>
    </Modal>
  ) : (
    <button onClick={() => setIsPopup(true)}>{children}</button>
  );
}

const Wrapper = styled.div``;
