import styled from "styled-components";
import patternDividerDesktop from "../assets/pattern-divider-desktop.svg";
import iconDice from "../assets/icon-dice.svg";

export const DiceBtn = styled.img.attrs({ src: iconDice, alt: "dice-icon" })``;

export const Divider = styled.img.attrs({
  src: patternDividerDesktop,
  alt: "divider-pattern",
})``;

export const AdviceText = styled.p``;

export const AdviceNumber = styled.p``;

export const GeneratorBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const AdviceGenerator = ({ className }) => {
  return (
    <GeneratorBox className={className}>
      <AdviceNumber>Advice #117</AdviceNumber>
      <AdviceText>
        &ldquo;It is easy to sit up and take notice, what's difficult is getting
        up and taking action.&rdquo;
      </AdviceText>
      <Divider />
      <DiceBtn />
    </GeneratorBox>
  );
};

export default AdviceGenerator;
