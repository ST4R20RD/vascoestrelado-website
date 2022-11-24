import React from "react";
import styled from "styled-components";
import { ClientBubbles } from "../../components";

export function Profile() {
  return (
    <Container>
      <Article>
        <ProfilePhotographer>
          <ProfilePic>
            <img src="/images/Profile/profile.jpg" alt="profile" />
            <h1>Vasco Estrelado</h1>
          </ProfilePic>
          <TextLeft>
            Vasco Estrelado is a professional photographer that found in photography his vocation.
            <br />
            <br />
            Vasco is a self trained artist, with strong level of self dedication and online
            formation with the biggest names in the industry. Additionally he has trained a very
            significant number of beginners in his workshop's of digital photography and on YouTube
            where he had a channel with the name Fotosbycaco, that´s now called Vasco Estrelado.
            <br />
            <br />
            Based in Lisbon Portugal, Vasco delivers full service, from pre-prodution to final
            post-prodution in various areas. His expertise is in Automotive Photography and
            environmental Portraits but also Vasco works with other areas namely Real Estate and
            comercial Photography.
          </TextLeft>
        </ProfilePhotographer>
        <Block>
          <TextCenter>
            <strong>What Clients say:</strong>
          </TextCenter>
          <ClientBubbles />
        </Block>
      </Article>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const TextLeft = styled.p``;

const TextCenter = styled.h1`
  text-align: center;
`;

const Block = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(20, 20, 20, 0.7);
  border-radius: 20px;
  padding: 5px 10px;
  margin-bottom: 20px;
`;

const Article = styled.article`
  color: orange;
`;

const ProfilePic = styled.div`
  text-align: center;
  margin-right: 30px;
  img {
    border-radius: 20px;
    height: 150px;
  }
  font-family: "Brush Script MT", "cursive";
  font-size: 20px;
`;

const ProfilePhotographer = styled.div`
  display: flex;
  width: 60vw;
  margin: auto;
`;
