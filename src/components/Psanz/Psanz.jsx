import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  border-top: black solid 5px;
  margin-top: 1rem;
  display: flex;

  @media (max-width: 768px) {
    order: -1;
  }
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  // background: #0a87af;
  border-radius: 25px;
  margin: 1rem 2rem;

  @media (max-width: 768px) {
    width: 85%;
    font-size: 12px;
    padding: 0px;
    margin: 0.5rem;
    order: -1;
  }
`;

const Para = styled.div`
  padding: 2rem 4rem;
  font-size: 20px;
  color: black;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 10px;
  }
`;

const PsanzTitleStyled = styled(Para)`
  font-weight: 900;
  font-size: 24px;
  padding: 2rem 0 0 2rem;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-left: 1rem;
  }
`;

const PsanzPara = styled(Para)`
  padding: 2rem 0 2rem 2rem;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-left: 1rem;
  }
`;

const LinkStyled = styled(Button)`
  color: white;
  background: #007bff;
  margin: 0 0 1rem 2rem;
  font-size: 18px;
  border-radius: 25px;
  text-align: center;
  width: fit-content;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 0.5rem;
    margin-left: 1rem;
    margin-bottom: 1rem;
  }
`;

const Psanz = () => {
  return (
    <Container>
      <Wrapper className="psanz">
        <PsanzTitleStyled>
          Perinatal Society of Australia and New Zealand
        </PsanzTitleStyled>
        <PsanzPara>
          The FNWANZ is a proud subcommittee of the Perinatal Society of
          Australia and New Zealand.
        </PsanzPara>
        <LinkStyled
          href="https://www.psanz.com.au/"
          target="_blank"
          rel="noopener noreferrer"
        >
          PSANZ
        </LinkStyled>
        <LinkStyled
          href="https://web.cvent.com/event/71fe9307-c088-46ee-99ed-cc19660a089d/websitePage:0e0389a1-9571-44cd-89bf-9550ddf5a244"
          target="_blank"
          rel="noopener noreferrer"
        >
          PSANZ 2021 - 24th Annual Congress
        </LinkStyled>
      </Wrapper>
    </Container>
  );
};

export default Psanz;
