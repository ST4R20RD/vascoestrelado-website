import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function ClientBubbles() {
  const settings = {
    className: Slide,
    arrows: false,
    draggable: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "ease",
  };
  return (
    <Container>
      <Slider {...settings}>
        <Slide>
          <ClientBubble>
            <ClientProfile>
              <ClientPic src="/images/Profile/turbo.jpg" />
              <ClientName>
                <strong>Ricardo Santos</strong>
                <ClientCareer>Art Editor of Turbo Magazine</ClientCareer>
              </ClientName>
            </ClientProfile>
            <ClientMessage>
              " The photography in publications about cars in Portugal is a little gray, always
              focusing on formulas and visual techniques that are old, most often, give an outdated
              and sad tone.
              <br />
              The photos of Vasco are giving a new life to this area. Visually appealing and
              aesthetic details show unusual and great technical knowledge, which puts his work at
              the level of what is made in the most recognized car magazines in the world."
            </ClientMessage>
          </ClientBubble>
        </Slide>
        <Slide>
          <ClientBubble>
            <ClientProfile>
              <ClientPic src="/images/Profile/dragone.jpg" />
              <ClientName>
                <strong>Manny Dragone </strong>
                <ClientCareer>from Dragone Classic Motocars, USA</ClientCareer>
              </ClientName>
            </ClientProfile>
            <ClientMessage>
              "Dragone Classic Motorcars and Dragone Auctions has used many Photographers in the
              U.S. and Europe and you have done some of the best automobile photos for our auction
              catalog that we have ever had done.
            </ClientMessage>
          </ClientBubble>
        </Slide>
        <Slide>
          <ClientBubble>
            <ClientProfile>
              <ClientPic src="/images/Profile/private.jpg" />
              <ClientName>
                <strong>Private Client</strong>
                <ClientCareer>Car Collector</ClientCareer>
              </ClientName>
            </ClientProfile>
            <ClientMessage>
              "Watching vasco work is fascinating, because we see I'm move fast and thinking and
              talking with I'm self and we can't follow along but he still plays and jokes around.
              And in the end when we see the photos is made we can't believe that is what he was
              doing. No matter, in what conditions, rain, cold, lack of time or of good location he
              always make it happen, no Mather what, the end result it's always amazing."
            </ClientMessage>
          </ClientBubble>
        </Slide>
        <Slide>
          <ClientBubble>
            <ClientProfile>
              <ClientPic src="/images/Profile/niobo.jpg" />
              <ClientName>
                <strong>NIOBO</strong>
                <ClientCareer>
                  Photography Store -{" "}
                  <a target="_blank" href="https://niobo.pt/shop/" rel="noreferrer">
                    www.niobo.pt
                  </a>
                </ClientCareer>
              </ClientName>
            </ClientProfile>
            <ClientMessage>
              "Niobo always looked for people who could form partnerships to respond in a more
              appropriate way to the needs of its customers.
              <br />
              Throughout this time we found some, one is, without a shadow of doubt, our friend
              Vasco Estrelado. Since its help in the Niobo Roadshow held in Lisbon, the videos
              directed and produced by him, their advice was in fact the most valuable for us . It
              has been a very interesting partnership that has and will continue to grow. Our many
              thanks.
            </ClientMessage>
          </ClientBubble>
        </Slide>
        <Slide>
          <ClientBubble>
            <ClientProfile>
              <ClientPic src="/images/Profile/flavioBarreiro.jpg" />
              <ClientName>
                <strong>Flávio Barreiro</strong>
                <ClientCareer>Social Media and Digital Marketeer</ClientCareer>
              </ClientName>
            </ClientProfile>
            <ClientMessage>
              "Working with Vasco Estrelado was very rewarding and enriching as student or client.
              He is always available to help his clients or students, and with his working positive
              attitude and proactive way that he face all the challenges that are proposed to him.
              Vasco is extremely focus on his job. I hope to work with him again very soon. Vasco is
              an excellent photographer and Multimedia professional, and have a very clear vision of
              the Client need."
            </ClientMessage>
          </ClientBubble>
        </Slide>
      </Slider>
    </Container>
  );
}

const Container = styled.div`
  max-width: 95%;
  padding: 40px;
`;

const Slide = styled.div`
  margin-right: 50px;
`;

const ClientBubble = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  padding: 20px;
  margin: auto;
  min-height: 330px;
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

const ClientMessage = styled.p``;

const ClientCareer = styled.p`
  a {
    color: white;
  }
`;
