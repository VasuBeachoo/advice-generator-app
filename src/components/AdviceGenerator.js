import { useState, useEffect } from "react";
import styled from "styled-components";
import patternDividerDesktop from "../assets/pattern-divider-desktop.svg";
import patternDividerMobile from "../assets/pattern-divider-mobile.svg";
import iconDice from "../assets/icon-dice.svg";

export const DiceBtn = styled.img.attrs({ src: iconDice, alt: "dice-icon" })``;

export const DiceBox = styled.div`
  position: absolute;
  bottom: -2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  user-select: none;
  background-color: var(--Neon-Green);
  border-radius: 100%;
  padding: 1.15rem;
  transition: 0.25s;

  &:hover {
    cursor: pointer;
    box-shadow: var(--Neon-Green) 0px 0px 15px 0px;
  }
`;

export const Divider = styled.img.attrs({
  alt: "divider-pattern",
})`
  user-select: none;
  margin: 0.7rem 0;
`;

export const AdviceText = styled.p`
  color: var(--Light-Cyan);
  font-size: clamp(1.2rem, 4.5vw, 1.5rem);
  font-weight: 700;
  letter-spacing: 0.025ch;
  line-height: 2.35ch;
  max-width: 25ch;
  margin: 0;

  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const AdviceNumber = styled.p`
  color: var(--Neon-Green);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.4ch;
  margin: 0;
`;

export const GeneratorBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1.25rem;
  background-color: var(--Dark-Grayish-Blue);
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  padding: 2.5rem 2rem 3.2rem 2rem;
  margin: 2rem;

  @media (max-width: 600px) {
    padding: 2.5rem 1rem 3.2rem 1rem;
  }

  @media (max-width: 400px) {
    padding: 2.5rem 0 3.2rem 0;
  }
`;

async function getAdviceSlip() {
  const adviceSlip = fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((slip) => slip);
  return adviceSlip;
}

const AdviceGenerator = ({ className, mobile }) => {
  const [adviceSlip, setAdviceSlip] = useState({
    slip: { id: "", advice: "" },
  });

  async function displayAdvice() {
    const slip = await getAdviceSlip();
    setAdviceSlip(slip);
  }

  useEffect(() => {
    displayAdvice();
  }, []);

  return (
    <GeneratorBox className={className}>
      <AdviceNumber>ADVICE #{adviceSlip.slip.id}</AdviceNumber>
      <AdviceText>&ldquo;{adviceSlip.slip.advice}&rdquo;</AdviceText>
      <Divider src={mobile ? patternDividerMobile : patternDividerDesktop} />
      <DiceBox>
        <DiceBtn onClick={displayAdvice} />
      </DiceBox>
    </GeneratorBox>
  );
};

export default AdviceGenerator;
