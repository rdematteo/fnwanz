import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Figure } from "react-bootstrap";

const Container = styled.div`
  margin: 0 3rem 0 3rem;
`;

const Title = styled.h1`
  text-align: center;
  padding: 2rem 0 0 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const GeneralTitle = styled.h3``;

const Information = styled.div`
  margin: 0 0 2rem 2rem;
`;

const Covid19 = styled.div`
  margin: 3rem 0;
  border: 10px red solid;
  padding: 10px;
  text-align: center;
  font-size: 40px;
  border-radius: 25px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Atag = styled.div`
  padding: 0 0 0.5rem 0;
`;
const Para = styled.p`
  margin: 0 0 0 0;
`;

class Meeting extends React.Component {
  render() {
    return (
      <Container className="meeting">
        <Title>
          The 34th Fetal and Neonatal Workshop of Australia and New Zealand
        </Title>
        <Covid19>
          <p>Due to COVID-19 restrictions, the 34th FNW has been cancelled.</p>
          <p>
            The meeting has been postponed to Monday 8th and Tuesday 9th
            February 2021
          </p>
        </Covid19>
        <Information>
          <h4>
            <Link
              to="/files/Information/34 FNW Conference Details.pdf"
              target="_blank"
              download
            >
              Download the Information booklet
            </Link>
          </h4>
        </Information>

        <GeneralTitle>Venue</GeneralTitle>
        <Information>
          <p>
            Rydges Newcastle | Cnr Wharf Road and Merewether Street | Newcastle,
            NSW
          </p>
          <ImageContainer>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="figure 1"
                src="/fig1.png"
              />
              <Figure.Image
                width={378}
                height={300}
                alt="figure 2"
                src="/fig2.png"
              />
              <Figure.Image
                width={376}
                height={300}
                alt="figure 3"
                src="/fig3.png"
              />
            </Figure>
          </ImageContainer>
        </Information>

        <GeneralTitle>Accommodation</GeneralTitle>
        <Information>
          <h4>On-site:</h4>
          <Atag>
            <a
              href="https://www.rydges.com/private-page/fetal-and-neonatal-workshop/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Rydges
            </a>
          </Atag>
          <h4>Off-site:</h4>
          <Atag>
            <a
              href="https://www.newcastleapartments.com.au/accommodation/honeysuckle-executive-apartments/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Honeysuckle Executive Apartments
            </a>
          </Atag>
          <Atag>
            <a
              href="https://www.questapartments.com.au/properties/nsw/newcastle/quest-newcastle/overview"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Quest Newcastle
            </a>
          </Atag>
          <Atag>
            <a
              href="https://qualityapartmentsnewcastle.com.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Quality Apartments
            </a>
          </Atag>
          <Atag>
            <a
              href="http://www.novotelnewcastlebeach.com.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Novotel Newcastle
            </a>
          </Atag>
          <Atag>
            <a
              href="https://www.noahsonthebeach.com.au/rooms.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Noah's on the Beach
            </a>
          </Atag>
          <Atag>
            {" "}
            <a
              href="https://www.guestreservations.com/ibis-newcastle/booking?gclid=EAIaIQobChMIy52o5cKz5AIVy4BwCh14HwHuEAAYAiAAEgIr__D_BwE"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ibis Newcastle
            </a>
          </Atag>
          <Atag>
            {" "}
            <a
              href="https://www.travelodge.com.au/hotel/newcastle/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Travelodge Newcastle
            </a>
          </Atag>
        </Information>

        <GeneralTitle>Workshop Dinner</GeneralTitle>
        <Information>
          <Para>
            <strong>Date:</strong> TBA{" "}
          </Para>
          <Para>
            <strong>Venue:</strong> Sprout Dining | 189 Hunter St | Newcastle |
            9 min walk from Rydges
          </Para>
          <Para>
            <strong>Time:</strong> 6:30-11:30pm
          </Para>
        </Information>

        <GeneralTitle>Dates to add to your diary</GeneralTitle>
        <Information>
          <Para>
            <strong>REGISTRATION DEADLINE:</strong> TBA
          </Para>
          <Para>
            <strong>ABSTRACT DEADLINE:</strong> TBA
          </Para>
        </Information>

        <GeneralTitle>Registration Instructions</GeneralTitle>
        <Information></Information>

        <GeneralTitle>Abstract Preparation</GeneralTitle>
        <Information>
          <Para>
            Send all abstract to{" "}
            <a
              href="mailto:julia.c.shaw@newcastle.edu.au?subject=34th%20FNW%20Abstract"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dr Julia Shaw
            </a>
          </Para>
          <Link
            to="/files/AbstractPreparation/Abstract FNW 2020.docx"
            target="_blank"
            download
          >
            Download the Abstract Preparation Form
          </Link>
        </Information>

        <GeneralTitle>For further information contact:</GeneralTitle>
        <Information>
          <h4>LOC</h4>
          <Para>
            <a
              href="mailto:julia.c.shaw@newcastle.edu.au?subject=34th%20FNW%20query"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dr Julia Shaw
            </a>
          </Para>
          <Para>
            <a
              href="mailto:hannah.palliser@newcastle.edu.au?subject=34th%20FNW%20query"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dr Hannah Palliser
            </a>
          </Para>
          <Para>
            <a
              href="mailto:kirsty.pringle@newcastle.edu.au?subject=34th%20FNW%20query"
              target="_blank"
              rel="noopener noreferrer"
            >
              DA/Prof Kirsty Pringle
            </a>
          </Para>
          <Para>
            <a
              href="mailto:jon.hirst@newcastle.edu.au?subject=34th%20FNW%20query"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prof Jonathan Hirst
            </a>
          </Para>
        </Information>

        <GeneralTitle></GeneralTitle>
      </Container>
    );
  }
}

export default Meeting;
