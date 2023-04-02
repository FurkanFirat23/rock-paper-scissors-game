import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const ChoiceButton = styled.button`
  background-color: ${(props) => props.color};
  color: white;
  font-size: 2rem;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Message = styled.h2`
  font-size: 2rem;
`;
const Game = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const choices = ["rock", "paper", "scissors"];

  const play = (playerChoice) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    setPlayerChoice(playerChoice);
    setComputerChoice(computerChoice);

    if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      setPlayerScore(playerScore + 1);
    } else if (
      (computerChoice === "rock" && playerChoice === "scissors") ||
      (computerChoice === "paper" && playerChoice === "rock") ||
      (computerChoice === "scissors" && playerChoice === "paper")
    ) {
      setComputerScore(computerScore + 1);
    }
  };

  return (
    <Container>
      <Title>Rock Paper Scissors</Title>
      <ButtonContainer>
        <ChoiceButton color="#c0392b" onClick={() => play("rock")}>
          Rock
        </ChoiceButton>
        <ChoiceButton color="#2980b9" onClick={() => play("paper")}>
          Paper
        </ChoiceButton>
        <ChoiceButton color="#27ae60" onClick={() => play("scissors")}>
          Scissors
        </ChoiceButton>
      </ButtonContainer>
      {playerChoice && computerChoice && (
        <>
          <Message>{`You chose ${playerChoice}, computer chose ${computerChoice}.`}</Message>
          <Message>
            {playerScore > computerScore
              ? "You win!"
              : playerScore < computerScore
              ? "Computer wins!"
              : "It's a tie!"}
          </Message>
        </>
      )}
      <Message>{`Player: ${playerScore}, Computer: ${computerScore}`}</Message>
    </Container>
  );
};

export default Game;
