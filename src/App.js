import { useState } from "react";
import styled from "styled-components";

const StyledGrid = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 640px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledSpan = styled.span`
  padding: 2rem;
  font-size: 2rem;
  text-align: center;
  color: white;

  transition: font-size 1s;
  :hover,
  :active {
    font-size: 4rem;
    transition: font-size 1s;
    min-width: 0;
    min-height: 0;
    overflow: auto;
  }

  @media (min-width: 640px) {
    overflow: visible;
  }
`;
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function Bait(props) {
  const [isHover, setHover] = useState(0);
  async function sleepSetHover(ms, state) {
    await sleep(ms);
    setHover(state);
  }
  return (
    <StyledSpan
      onMouseEnter={() => sleepSetHover(10, 1)}
      onMouseLeave={() => sleepSetHover(500, 0)}
    >
      {isHover ? props.gotted : props.bait}
    </StyledSpan>
  );
}

function App() {
  const words = {
    Sugma: "SUGMA COCK",
    Stigma: "STIGMA DICK IN YO ASS",
    Fondalma: "FONDALMA BALLS",
    Ramma: "RAMMA COCK IN YO ASS",
    Rubondese: "RUBONDESE NUTS",
    "Lee Ghandi": "LEE GHANDI NUTS",
    Sugondese: "SUGONDESE NUTS",
    Mile: "RUB MILEFT NUT",
    Tipodiss: "SUCK THE TIPODISS COCK",
    Wiremouth: "WIREMOUTH ON THIS DICK",
    Wilma: "WILMA COCK FIT IN YO MOUTH",
    "Plant Tulips": "PLANT TULIPS ON MA DICK",
    "Saw Con": "SAW CON MA BALLS",
    Sloberon: "SLOBERON MA COCK",
    "Taygalooh cat": "TAYGALOOH CAT MA BALLS",
    Dragon: "DRAGON DEEZ NUTS ACROSS YO FACE",
    Nudinyore: "NUDDINYORE MOUTH",
    Kombucha: "KOMBUCHA MOUTH ON MA COCK",
    "Candies/Candice": "CANDIES NUTS FIT IN YO MOUTH",
    Pudding: "PUDDING DEEZ NUTS ON YO CHIN",
    "Leav/ing": "LEAV/ING DEEZ NUTS IN YO MOUTH",
    E10: "E10 DEEZ NUTS",
    "Papa Pear": "PAPA PEAR OF DEEZ NUTS IN YO MOUTH",
  };
  var textSquareLoop = [];
  for (let i in words) {
    textSquareLoop.push(<Bait key={i} bait={i} gotted={words[i]}></Bait>);
  }
  return <StyledGrid>{textSquareLoop}</StyledGrid>;
}

export default App;
