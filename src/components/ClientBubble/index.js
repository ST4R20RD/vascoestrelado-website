import React from "react";
import styled from "styled-components";
import { FaQuoteRight } from "react-icons/fa";

export function ClientBubble({ picSrc, name, career, quote, message }) {
  return (
    <Container>
      <ClientProfile>
        <ClientPic src={picSrc} />
        <ClientName>
          <strong>{name}</strong>
          <ClientCareer>{career}</ClientCareer>
        </ClientName>
      </ClientProfile>
      <ClientQuote>
        <FaQuoteRight style={{ paddingRight: "10px" }} />
        {quote}
      </ClientQuote>
      <ClientMessage>{message}</ClientMessage>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  padding: 20px;
  margin: auto;
  min-height: 360px;
  background-color: rgba(0, 0, 0, 0.3);
  :hover {
    background-color: rgba(245, 189, 46, 0.8);
    color: black;
  }
`;

const ClientProfile = styled.div`
  display: flex;
  align-items: center;
`;

const ClientPic = styled.img`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  margin-right: 15px;
`;

const ClientName = styled.p`
  display: flex;
  flex-direction: column;
`;

const ClientQuote = styled.h2``;

const ClientMessage = styled.p`
  font-size: 13px;
`;

const ClientCareer = styled.p`
  a {
    color: white;
  }
`;
