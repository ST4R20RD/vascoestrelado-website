import { useEffect, useRef } from "react";
import styled from "styled-components";

export function Modal({ children, setIsOpen }) {
  const popupRef = useRef(null);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (e.path[0] !== popupRef.current) {
        return;
      }

      setIsOpen?.(false);
    };

    document.body.addEventListener("click", closeDropdown);

    return () => document.body.removeEventListener("click", closeDropdown);
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Wrapper ref={popupRef}>{children}</Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  background-color: rgba(24, 24, 27, 0.8);
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 50;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
