import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ClientBubble } from "../index";

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
    autoplaySpeed: 0,
    pauseOnHover: true,
    cssEase: "ease",
  };
  return (
    <Container>
      <Slider {...settings}>
        <Slide>
          <ClientBubble
            picSrc="/images/Profile/turbo.jpg"
            name="Ricardo Santos"
            career="Art Editor of Turbo Magazine"
            quote="The photos of Vasco are giving a new life to this area"
            message={`" The photography in publications about cars in Portugal is a little gray, always
              focusing on formulas and visual techniques that are old, most often, give an outdated
              and sad tone.
              The photos of Vasco are giving a new life to this area. Visually appealing and
              aesthetic details show unusual and great technical knowledge, which puts his work at
              the level of what is made in the most recognized car magazines in the world."`}
          />
        </Slide>
        <Slide>
          <ClientBubble
            picSrc="/images/Profile/dragone.jpg"
            name="Manny Dragone"
            career="from Dragone Classic Motocars, USA"
            quote="You have done some of the best automobile photos for our auction"
            message={`"Dragone Classic Motorcars and Dragone Auctions has used many Photographers in the
              U.S. and Europe and you have done some of the best automobile photos for our auction
              catalog that we have ever had done."`}
          />
        </Slide>
        <Slide>
          <ClientBubble
            picSrc="/images/Profile/private.jpg"
            name="Private Client"
            career="Car Collector"
            quote="Watching vasco work is fascinating"
            message={`"..., because we see I'm move fast and thinking and talking with I'm self and we can't
              follow along but he still plays and jokes around. And in the end when we see the
              photos is made we can't believe that is what he was doing. No matter, in what
              conditions, rain, cold, lack of time or of good location he always make it happen, no
              Mather what, the end result it's always amazing."`}
          />
        </Slide>
        <Slide>
          <ClientBubble
            picSrc="/images/Profile/niobo.jpg"
            name="NIOBO"
            career={
              <>
                Photography Store -{" "}
                <a target="_blank" href="https://niobo.pt/shop/" rel="noreferrer">
                  www.niobo.pt
                </a>
              </>
            }
            quote="It has been a very interesting partnership"
            message={`
                "Niobo always looked for people who could form partnerships to respond in a more
                appropriate way to the needs of its customers.
                Throughout this time we found some, one is, without a shadow of doubt, our friend
                Vasco Estrelado. Since its help in the Niobo Roadshow held in Lisbon, the videos
                directed and produced by him, their advice was in fact the most valuable for us . It
                has been a very interesting partnership that has and will continue to grow. Our many
                thanks."
              `}
          />
        </Slide>
        <Slide>
          <ClientBubble
            picSrc="/images/Profile/flavioBarreiro.jpg"
            name="Flávio Barreiro"
            career="Social Media and Digital Marketeer"
            quote="Always available to help his clients or students"
            message={`"Working with Vasco Estrelado was very rewarding and enriching as student or client.
              He is always available to help his clients or students, and with his working positive
              attitude and proactive way that he face all the challenges that are proposed to him.
              Vasco is extremely focus on his job. I hope to work with him again very soon. Vasco is
              an excellent photographer and Multimedia professional, and have a very clear vision of
              the Client need.`}
          />
        </Slide>
      </Slider>
    </Container>
  );
}

const Container = styled.div`
  max-width: 100%;
  padding: 20px;
  border-radius: 20px;
`;

const Slide = styled.div`
  margin-right: 50px;
`;
